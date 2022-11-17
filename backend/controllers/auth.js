const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const {StatusCodes} = require("http-status-codes")
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

// Handle login actions
exports.login = async function (req, res) {
    const {email, password} = req.body;

    await User.findOne({email: email}, async function (err, user) {
        if (err || !user) {
            console.log(err);
            res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Username or password incorrect',
            });
        } else {
            if (user && await bcrypt.compare(password, user.password)) {
                // Generate an access token
                const accessToken = jwt.sign({
                    user: user
                }, accessTokenSecret, {expiresIn: '1h'});

                res.status(StatusCodes.OK).json({
                    token: accessToken
                });
            } else {
                res.status(StatusCodes.BAD_REQUEST).json({
                    message: 'Username or password incorrect',
                });
            }
        }
    });
};