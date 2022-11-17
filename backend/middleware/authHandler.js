const jwt = require("jsonwebtoken");
const {StatusCodes} = require("http-status-codes");
const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

exports.authHandler = async function (req, res, next) {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, data) => {
            if (err) {
                return res.sendStatus(StatusCodes.FORBIDDEN);
                const jwt = require("jsonwebtoken");
                const {StatusCodes} = require("http-status-codes");
                const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

                exports.authHandler = async function (req, res, next) {
                    const user = auth(req);

                    if (user) {
                        req.user = user;
                    }

                    next();
                };

                exports.authRequired = async function (req, res, next) {
                    const user = auth(req);

                    if (user) {
                        req.user = user;
                        next();
                    } else {
                        res.sendStatus(StatusCodes.UNAUTHORIZED);
                    }
                }


                function auth(req) {
                    const authHeader = req.headers.authorization;

                    if (authHeader) {
                        const token = authHeader.split(' ')[1];

                        return jwt.verify(token, accessTokenSecret, (err, data) => {
                            if (err) {
                                return undefined;
                            }

                            return data.user;
                        });
                    } else {
                        return undefined;
                    }
                }
            }

            req.user = data.user;
            next();
        });
    } else {
        res.sendStatus(StatusCodes.UNAUTHORIZED);
    }
};