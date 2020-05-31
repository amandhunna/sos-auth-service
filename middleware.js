const middleware = {

    verifyUser(req, res, next) {
        console.log("----df---hi", req.headers['client-address']);
        next();
    }
}

module.exports = middleware;
