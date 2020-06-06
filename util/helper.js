class Helper {
    success(res, data, status = 200) {
        return res.status(status).json({ status: 200, data: data });
    }
    error(res, error, status = 400) {
        res.status(status).json({ status, error });
    }

    randomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
}

module.exports = new Helper();
