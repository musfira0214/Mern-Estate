
export const errorHandler = (statusCode, message) => {
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
};

/* 
=====> WE user this one on auth.COntrolar.js
with the using of this one we got the error like this

"message": "error from the function"

*/