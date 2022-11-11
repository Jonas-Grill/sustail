const jwt = require('jsonwebtoken');
const User = require("../models/user");
const {StatusCodes, ReasonPhrases} = require("http-status-codes")
const accessTokenSecret = 'youraccesstokensecret';

// Handle index actions
exports.login = function (req, res) {
    const { username, password } = req.body;

    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });

    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, accessTokenSecret);

        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
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