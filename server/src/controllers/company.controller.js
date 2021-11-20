const router = require("express").Router();
const Company = require("../models/company.model");
const Truck = require("../models/truck.model");
const uuid = require("uuid");
const KEY = process.env.GOOGLE_KEY;

// add a new company

router.get("/", async (req, res) => {
  try {
    const companies = await Company.find().populate("trucks").lean().exec();
    res.status(200).json(companies);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const company = await Company.create(req.body);
    res.status(201).json(company);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// price Calculater

router.get("/price", async (req, res) => {
  try {
    const company = await Company.findById(req.body.company_id).lean().exec();
    let price;
    if (Number(req.body.distance >= 1000)) {
      price = company.pricing.gte1000 * req.body.distance;
    } else if (Number(req.body.distance >= 500)) {
      price = company.pricing.gte500 * req.body.distance;
    } else {
      price = company.pricing.lt500 * req.body.distance;
    }

    if (Number(req.body.weight >= 1000)) {
      price *= 2;
    } else if (Number(req.body.weight >= 500)) {
      price += ~~(price / 2);
    }
    return res.status(200).json({ price });
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});

// book an order

router.post("/book", async (req, res) => {
  try {
    const order = {
      from: req.body.from,
      to: req.body.to,
      weight: req.body.weight,
      order_id: uuid(),
    };

    // Should select a truck which goes from the given city to destination or passes by destination
    // as well as having free space sufficient enough
    const available_truck = await Truck.find({
      $and: [
        {
          $or: [
            { $and: [{ to: req.body.to }, { from: req.body.from }] },
            { $and: [{ from: req.body.from }, { stops: req.body.to }] },
          ],
        },
        {
          $and: [{ free: { $gte: req.body, weight } }],
        },
      ],
    });

    if (available_truck) {
      await Truck.findByIdAndUpdate(
        available_truck._id,
        {
          capacity: available_truck.capacity + req.body.weight,
          filled: available_truck.capacity + req.body.weight,
          free: available_truck.capacity - req.body.weight,
          $push: { packages: order },
        },
        { new: true }
      )
        .lean()
        .exec();
      return res
        .status(200)
        .json({ message: "Booked Succesfully", order_id: order.order_id });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).send(err);
  }
});
module.exports = router;
