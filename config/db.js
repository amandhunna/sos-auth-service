const db = {
    url: process.env.dbURL || 'mongodb://localhost:27017/sos',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
}

module.exports = db;
