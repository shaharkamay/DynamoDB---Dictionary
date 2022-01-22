"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, _next) => {
    let message = 'Server error, please try again later';
    let status = 500;
    if (err instanceof Error)
        message = err.message;
    else if (err && typeof err === 'object') {
        if ('message' in err && 'status' in err) {
            message = err.message;
            status = err.status;
        }
    }
    console.log(err);
    res.status(status).json(message);
};
exports.default = errorHandler;
