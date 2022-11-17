const ReasonPhrases = require('http-status-codes').ReasonPhrases;
const StatusCodes = require('http-status-codes').StatusCodes;
const User = require('../models/user');
const bcrypt = require("bcrypt");

// Handle index actions
exports.index = function (req, res) {
    User.find({type: 'PRODUCER'}, function (err, users) {
        if (err) {
            console.log(err);
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                message: ReasonPhrases.INTERNAL_SERVER_ERROR,
            });
        } else {
            res.status(StatusCodes.OK).json(users.map(user => {
                user.password = undefined;
                return user;
            }));
        }
    });
};

// Handle create user actions
exports.new = async function (req, res) {
    if (await User.find({email: req.body.email}).count() > 0) {
        res.status(StatusCodes.BAD_REQUEST).json({
            message: 'User already exists',
        });
    } else {
        const user = new User(
            {
                name: {
                    first: req.body.name.first,
                    last: req.body.name.last,
                },
                email: req.body.email,
                password: await bcrypt.hash(req.body.password, await bcrypt.genSalt(10)),
                banking_info: {
                    iban: req.body.banking_info.iban,
                },
                address: {
                    street: req.body.address.street,
                    street_number: req.body.address.street_number,
                    city: req.body.address.city,
                    postal_code: req.body.address.postal_code,
                },
                type: req.body.type,
            }
        );

        user.save(function (err, user) {
            if (err) {
                console.log(err);
                res.status(StatusCodes.BAD_REQUEST).json({
                    message: ReasonPhrases.BAD_REQUEST,
                });
            } else {
                res.status(StatusCodes.CREATED).json(user.toJSON());
            }
        });
    }
};

// Handle view user info
exports.view = function (req, res) {
    User.findById(req.user._id, function (err, user) {
        if (err) {
            console.log(err);
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: ReasonPhrases.UNAUTHORIZED,
            });
        } else {
            user.password = undefined;
            res.status(StatusCodes.OK).json(user.toJSON());
        }
    });
};

// Handle update user info
exports.update = function (req, res) {
    User.findById(req.user._id, function (err, user) {
        if (err) {
            console.log(err);
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: ReasonPhrases.UNAUTHORIZED,
            });
        } else {
            user.name.first = req.body.name.first ? req.body.name.first : user.name.first;
            user.name.last = req.body.name.last ? req.body.name.last : user.name.last;
            user.email = req.body.email ? req.body.email : user.email;
            user.banking_info.iban = req.body.banking_info.iban ? req.body.banking_info.iban : user.banking_info.iban;
            user.address.street = req.body.address.street ? req.body.address.street : user.address.street;
            user.address.street_number = req.body.address.street_number ? req.body.address.street_number : user.address.street_number;
            user.address.city = req.body.address.city ? req.body.address.city : user.address.city;
            user.address.postal_code = req.body.address.postal_code ? req.body.address.postal_code : user.address.postal_code;

            user.save(function (err, user) {
                if (err) {
                    console.log(err);
                    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                        message: ReasonPhrases.INTERNAL_SERVER_ERROR,
                    });
                } else {
                    user.password = undefined;
                    res.status(StatusCodes.OK).json(user.toJSON());
                }
            });
        }
    });
};

// Handle delete user
exports.delete = function (req, res) {
    User.deleteOne({_id: req.user._id}, function (err) {
        if (err) {
            console.log(err);
            res.status(StatusCodes.UNAUTHORIZED).json({
                message: ReasonPhrases.UNAUTHORIZED,
            });
        } else {
            res.status(StatusCodes.OK).send();
        }
    });
};
