const express = require("express");
const router = express.Router();

//order model import
const Order = require("../../models/Orders");

//@route GET api/orders
// get all all orders
router.get("/", (req, res) => {
  Order.find().then((orders) => res.json(orders));
});

//@route POST api/orders

router.post("/", (req, res) => {
  const newOrder = new Order({
    orderNumber: req.body.orderNumber,
    orderStatus: req.body.orderStatus,
    customerName: req.body.customerName,
    pickupLocation: req.body.pickupLocation,
    notes: req.body.notes,
    orderedItems: req.body.orderedItems,
    fourHour: req.body.fourHour,
  });

  newOrder.save().then((order) => res.json(order));
});

module.exports = router;
