const express = require("express");
const router = express.Router();

//order model import
const Order = require("../../models/Orders");

//@route GET api/orders
// get all all orders
router.get("/", async (req, res) => {
  Order.find().then((orders) => res.json(orders));
});

//@route POST api/orders

router.post("/", async (req, res, next) => {
  if (!req.body.orderNumber && !req.body.customerName) {
    res.status(400);
    try {
      throw new Error("missing order number and customer name");
    } catch (err) {
      next(err);
    }
  } else {
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
  }
});

//@route PUT api/orders
router.put("/:id", async (req, res, next) => {
  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(400);
    try {
      throw new Error("order not found");
    } catch (err) {
      next(err);
    }
  } else {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(updatedOrder);
  }
});

module.exports = router;
