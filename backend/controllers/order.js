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
    } else if ((order.state = 'CANCELLED' || 'FULFILLED' || req.body.state) || !req.body.state) {
      res.status(StatusCodes.BAD_REQUEST).json({
        message: ReasonPhrases.BAD_REQUEST,
      });
    } else {
      let invalid_change = false;

      // more complicated but less hardcoding
      let change_hierarchy = ['NOT FULFILLED', 'IN PROCESS', 'FULFILLED', 'CANCELLED'];
      for (let i = 0; i < change_hierarchy.length-2; i++) {
        if (order.state === req.body.state) break;
        for (let j = i + 1; j < change_hierarchy; j++) {
          if (order.state === change_hierarchy[i] && req.body.state === change_hierarchy[j]) {
            order.state = req.body.state;
            if (j === 1) {
              order.timestamp.in_process = Date.now;
            } else if (j === 2) {
              order.timestamp.fulfilled = Date.now;
            } else {
              order.timestamp.cancelled = Date.now;
            }
            break;
          }
        }
      }
      if(order.state !== req.body.state) {
        invalid_change = true;
      }

      // Easier but more hardcoding
      /* if(order.state === 'NOT FULFILLED'){
        if(req.body.state === 'IN PROCESS'){
          order.timestamp.in_process = Date.now;
        } else if(req.body.state === 'FULFILLED'){
          order.timestamp.fulfilled = Date.now;
        } else {
          order.timestamp.cancelled = Date.now;
        }
        order.state = req.body.state;
      } else {
        if(req.body.state === 'CANCELLED'){
          order.timestamp.cancelled = Date.now;
          order.state = req.body.state;
        } else if(req.body.state === 'FULFILLED'){
          order.timestamp.fulfilled = Date.now;
          order.state = req.body.state;
        } else {
          invalid_change = true;
        }
      } */

      if (invalid_change){
        res.status(StatusCodes.BAD_REQUEST).json({
          message: ReasonPhrases.BAD_REQUEST,
        });
      } else {
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
