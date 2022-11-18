const ReasonPhrases = require('http-status-codes').ReasonPhrases;
const StatusCodes = require('http-status-codes').StatusCodes;
const Order = require('../models/order');
const Product = require('../models/product');

// Handle index actions
exports.index = function (req, res) {
    Order.find(function (err, orders) {
        if (err) {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
            });
        } else {
            res.status(StatusCodes.OK).json(orders.filter(
                order => order.seller_id.toString() === req.user._id || order.buyer_id.toString() === req.user._id
            ).map(order => {
                return order;
            }));
        }
    });
};

// Handle create order actions
exports.new = function (req, res) {
    if (req.user.type === "USER") {
        Product.findById(req.body.product_id, function (err, product) {
            if (err || !product) {
                console.log(err);
                res.status(StatusCodes.NOT_FOUND).json({
                    message: ReasonPhrases.NOT_FOUND,
                });
            } else {
                console.log(product);
                const order = new Order({
                    product_id: product._id,
                    seller_id: product.seller_id,
                    quantity: req.body.quantity,
                    buyer_id: req.user._id,
                    address: {
                        street: req.body.address.street,
                        street_number: req.body.address.street_number,
                        city: req.body.address.city,
                        postal_code: req.body.address.postal_code,
                    }
                });

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
            }
        });
    } else {
        res.status(StatusCodes.FORBIDDEN).json({
            message: ReasonPhrases.FORBIDDEN,
        });
    }
};

// Handle view order info
exports.view = function (req, res) {
    Order.findById(req.params.order_id, function (err, order) {
        if (err || !order) {
            console.log(err);
            res.status(StatusCodes.NOT_FOUND).json({
                message: ReasonPhrases.NOT_FOUND,
            });
        } else {
            if (order.seller_id === req.user._id.toString() || order.buyer_id.toString() === req.user._id) {
                res.status(StatusCodes.OK).json(order.toJSON());
            } else {
                res.status(StatusCodes.FORBIDDEN).json({
                    message: ReasonPhrases.FORBIDDEN,
                });
            }
        }
    });
};

// Handle update order info
exports.update = function (req, res) {
    Order.findById(req.params.order_id, function (err, order) {
        if (err || !order) {
            console.log(err);
            res.status(StatusCodes.NOT_FOUND).json({
                message: ReasonPhrases.NOT_FOUND,
            });
        } else if (order.state === ("CANCELLED" || "FULFILLED") || order.state === req.body.state || !req.body.state) {
            res.status(StatusCodes.BAD_REQUEST).json({
                message: ReasonPhrases.BAD_REQUEST,
            });
        } else if (order.seller_id.toString() === req.user._id) {
            let invalid_change = false;

            // more complicated but less hardcoding
            let change_hierarchy = ['NOT FULFILLED', 'CANCELLED', 'IN PROCESS', 'FULFILLED'];
            for (let i = 0; i < change_hierarchy.length - 1; i++) {
                if (order.state === req.body.state) {
                    break
                }
                for (let j = i + 1; j < change_hierarchy.length; j++) {
                    if (order.state === change_hierarchy[i] && req.body.state === change_hierarchy[j]) {
                        order.state = req.body.state;
                        if (j === 2) {
                            order.timestamp.in_process = Date.now();
                        } else if (j === 3) {
                            order.timestamp.fulfilled = Date.now();
                        } else {
                            order.timestamp.cancelled = Date.now();
                        }
                        break;
                    }
                }
            }
            if (order.state !== req.body.state) {
                invalid_change = true;
            }

            if (invalid_change) {
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
        } else {
            res.status(StatusCodes.FORBIDDEN).json({
                message: ReasonPhrases.FORBIDDEN,
            });
        }
    });
};

// Handle delete order
exports.delete = function (req, res) {
    if (req.user.type === "ADMIN") {
        Order.deleteOne({_id: req.params.order_id}, function (err) {
            if (err) {
                console.log(err);
                res.status(StatusCodes.NOT_FOUND).json({
                    message: ReasonPhrases.NOT_FOUND,
                });
            } else {
                res.status(StatusCodes.OK).send();
            }
        });
    } else {
        res.status(StatusCodes.FORBIDDEN).json({
            message: ReasonPhrases.FORBIDDEN,
        });
    }
};
