const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const router = require('./router');

const mongoose = require('mongoose');

const db = require('./config/db');

mongoose.connect(db.url, db.options, (err) => {
    if (err) {
        console.log(err)
    }
})
const port = process.env.PORT || 6000;

const app = express();

app.use(cors());

// configure body parser
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }))

// register routes
app.use('/api', router)


app.listen(port);

console.log('listening at port', port);

module.exports = app;