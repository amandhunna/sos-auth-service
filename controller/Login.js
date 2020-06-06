class Login {
    login(req, res, next) {
        console.log("-------hi", req.headers['user-agent']);
        res.json({ "df": "fd" })
    }
}

module.exports = new Login();