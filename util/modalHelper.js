const assert = require('assert');
const mongodb = require('mongodb');
const orderModal = require('../modal/order')

class ModalHelper {
    // https://mongoosejs.com/docs/api.html#schematype_SchemaType-required
    requiredMessage() {
        return '{PATH} is required!'
    }

    connect() {
        const MongoClient = mongodb.MongoClient;

        // Connection URL
        const url = 'mongodb://localhost:27017';

        // Database Name
        const dbName = 'sos';

        // Create a new MongoClient
        const client = new MongoClient(url, { useUnifiedTopology: true });

        // Use connect method to connect to the Server
        client.connect(async function (err) {
            assert.equal(null, err);
            console.info("Connected successfully to server");
            const db = client.db(dbName);
            orderModal(db);
            db.createCollection("contacts",
                {
                    'validator': {
                        '$or':
                            [
                                { 'phone': { '$type': "string" } },
                                { 'email': { '$regex': /@mongodb\.com$/ } },
                                { 'status': { '$in': ["Unknown", "Incomplete"] } }
                            ]
                    }
                },
                function (err, results) {
                    console.log("Collection created.");
                    client.close();
                }
            );
            const ss = await db.collection('contacts').findOne();
            console.log("------", ss)
            // client.close();
        } );
    }

    connectURI() {
        const MongoClient = mongodb.MongoClient;
        const uri = "mongodb+srv://admin:<password>@cluster0-5xtpf.gcp.mongodb.net/test?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true });
        client.connect(err => {
            const collection = client.db("test").collection("devices");
            // perform actions on the collection object
            client.close();
        });
    }
}

module.exports = new ModalHelper;


