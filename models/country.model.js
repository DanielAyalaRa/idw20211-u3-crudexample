const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 3,
  },
});

const countryModel = mongoose.model("Country", schema, "country");

module.exports = countryModel;