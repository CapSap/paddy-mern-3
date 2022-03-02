const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create schema
const OrderSchema = new Schema({
  orderNumber: {
    type: Number,
    required: true,
  },
  customerName: {
    type: String,
    required: true,
  },
  orderStatus: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  pickupLocation: {
    type: String,
  },
  notes: {
    type: String,
  },

  orderedItems: {
    type: Array,
  },
  fourHour: {
    type: Boolean,
  },
});

module.exports = mongoose.model("order", OrderSchema);
