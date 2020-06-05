class Helper {
    success(res, data) {
        return res.status(200).json({ status: 200, data: data });
    }
    error(res, error) {
        res.status(400).json({ status: 400, error: error });
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
