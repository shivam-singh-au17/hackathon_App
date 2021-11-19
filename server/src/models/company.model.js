const mongoose = require("mongoose");

const companyModel = new mongoose.model({
  company_name: { type: String, required: true },
  company_logo: { type: String, required: true },
  pincodes_serving: { type: Array, required: true },
  trucks: { type: Number, required: true },
  pricing: { type: Object },
});

module.exports = mongoose.model("company", companyModel);
