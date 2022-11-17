exports.failSafeHandler = async function (error, req, res, next) {
    try {
        await next();
    } catch (err) {
        console.error(err)
        res.status(500).send('Something went wrong')
    }
}

exports.errorHandler = function (error, req, res, next) {
    res.status(500).send(error)
}
