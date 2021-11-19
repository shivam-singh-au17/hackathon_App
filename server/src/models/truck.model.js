const mongoose = require("mongoose");

const truckModel = new mongoose.model({
  belongs_to: { type: mongoose.Schema.Types.ObjectId, required: true },
  truck_no: { type: String, required: true },
  from: { type: String, required: true },
  to: { type: String, required: true },
  stops: { type: Array },
  capacity: { type: Number, required: true },
  filled: { type: Number },
  free: { type: Number },
  packages: { type: Array },
});

module.exports = mongoose.model("truck", truckModel);
