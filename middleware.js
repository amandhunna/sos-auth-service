const middleware = {

    verifyUser(req, res, next) {
        console.log("hi, ", req.headers['client-address']);
        next();
    },

    trimmer(req, res, next) {
        for (const [key, value] of Object.entries(req.body)) {
            if (typeof req.body[key] === "string") {
                req.body[key] = value.trim();
            }
        }
        next();
    }

}

module.exports = middleware;
