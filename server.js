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
const port = process.env.PORT || 3001;

const app = express();

app.use(cors());
/* 
app.use(cors({ origin: true, credentials: true }));
app.use(function (req, res, next) {
   res.header('Access-Control-Allow-Origin', '*');
   res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header('Access-Control-Allow-Origin: *');
   res.header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
   res.header('Access-Control-Allow-Headers: *');
   res.header('Access-Control-Max-Age: 1728000');
   res.header("Content-Length: 0");
   res.header("Content-Type: text/plain");
   next();
}); */


// configure body parser
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));


// register routes
app.use('/', router)


app.listen(port);

console.log('listening at port', port);

module.exports = app;