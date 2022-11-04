async function failSafeHandler(error, req, res, next) {
    try {
        await next();
    } catch (err) {
        console.error(err)
        res.status(500).send('Something went wrong')
    }
}

function errorHandler(error, req, res, next) {
    res.status(500).send(error)
}

module.exports = { errorHandler, failSafeHandler }