const ReasonPhrases = require('http-status-codes').ReasonPhrases;
const StatusCodes = require('http-status-codes').StatusCodes;
const User = require('../models/user');

// Handle index actions
exports.index = function (req, res) {
    User.find(function (err, users) {
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
exports.new = function (req, res) {
    const user = new User(
        {
            name: {
                first: req.body.name.first,
                last: req.body.name.last,
            },
            email: req.body.email,
            password: req.body.password,
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
};

// Handle view user info
exports.view = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            console.log(err);
            res.status(StatusCodes.NOT_FOUND).json({
                message: ReasonPhrases.NOT_FOUND,
            });
        } else {
            res.status(StatusCodes.OK).json(user.toJSON());
        }
    });
};

// Handle update user info
exports.update = function (req, res) {
    User.findById(req.params.user_id, function (err, user) {
        if (err) {
            console.log(err);
            res.status(StatusCodes.NOT_FOUND).json({
                message: ReasonPhrases.NOT_FOUND,
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
                    res.status(StatusCodes.OK).json(user.toJSON());
                }
            });
        }
    });
};

// Handle delete user
exports.delete = function (req, res) {
    User.remove({id: req.params.user_id}, function (err) {
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