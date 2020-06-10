class Helper {
    success(res, data, status = 200) {
        return res.status(status).json({ status, data });
    }
    error(res, error, status = 400) {
        console.log('-----', error)
        return res.json({ status, error });
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

    requiredFields(data, reqField) {
        const value = reqField.filter(item => {
            if (data[item] === undefined) return item;
            return false;
        });
        if (true || value.length) {
            throw new Error(`{ message: required fields ${value} are missing, data:${data}, error: required_field_missing }`);
        }
    };
}

module.exports = new Helper();
