const ReasonPhrases = require('http-status-codes').ReasonPhrases;
const StatusCodes = require('http-status-codes').StatusCodes;
const Order = require('../models/order');

// Handle index actions
exports.index = function (req, res) {
  Order.find(function (err, order) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
      });
    } else {
      res.status(StatusCodes.OK).json(order.map(order => {
        return order;
      }));
    }
  });
};

// Handle create order actions
exports.new = function (req, res) {
  const order = new Order(
    {
      product_id: req.body.product_id,
      buyer_id: req.body.buyer_id,
      address: {
        street: req.body.address.street,
        street_number: req.body.address.street_number,
        city: req.body.address.city,
        postal_code: req.body.address.postal_code,
      }
    }
  );

  order.save(function (err, order) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
      });
    } else {
      res.status(StatusCodes.CREATED).json(order.toJSON());
    }
  });
};

// Handle view order info
exports.view = function (req, res) {
  Order.findById(req.params.order_id, function (err, order) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
      });
    } else {
      res.status(StatusCodes.OK).json(order.toJSON());
    }
  });
};

// Handle update order info
exports.update = function (req, res) {
  Order.findById(req.params.order_id, function (err, order) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
      });
    } else {
      order.state = req.body.state ? req.body.state : order.state;
      order.timestamp.fulfilled = req.body.timestamp.fulfilled ? req.body.timestamp.fulfilled : order.timestamp.fulfilled;
      order.timestamp.cancelled = req.body.timestamp.cancelled ? req.body.timestamp.cancelled : order.timestamp.cancelled;
      order.timestamp.in_process = req.body.timestamp.in_process ? req.body.timestamp.in_process : order.timestamp.in_process;

      order.save(function (err, order) {
        if (err) {
          console.log(err);
          res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: ReasonPhrases.INTERNAL_SERVER_ERROR,
          });
        } else {
          res.status(StatusCodes.OK).json(order.toJSON());
        }
      });
    }
  });
};

// Handle delete order
exports.delete = function (req, res) {
  Order.remove({id: req.params.order_id}, function (err) {
    if (err) {
      console.log(err);
      res.status(StatusCodes.NOT_FOUND).json({
        message: ReasonPhrases.NOT_FOUND,
      });
    } else {
      res.status(StatusCodes.OK).send();
    }
  });
};
