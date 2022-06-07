const APIError = require("./APIError");

const apiErrorHandler = (err, req, res, next) => {
    // console.log(err);
    res.set('Content-Type', 'application/problem+json')
    if (err.status === 401) {
        err = APIError.notAuthorized()
    }
    if (err instanceof APIError) {
        err.instance = req.path
        res.status(err.status).json(err);
    } else {
        let unknownError = APIError.internal()
        unknownError.instance = req.path
        res.status(unknownError.status).json(unknownError);
    }
}

module.exports = apiErrorHandler;