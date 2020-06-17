class Helper {
    success(res, data, status = 200) {
        return res.status(status).json({ status, data });
    }
    error(res, error, status = 400) {
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
        if (value.length) {
            const errorData = {
                data: data,
                error: "required_field_missing",
                message: `Required field ${value} are missing`,
            };

            throw new Error(JSON.stringify(errorData));
        }
    };
}

module.exports = new Helper();
