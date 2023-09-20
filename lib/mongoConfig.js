const { MongoClient, ServerApiVersion } = require("mongodb");
const dotEnv = require("dotenv");
dotEnv.config();
const uri =process.env.uri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports=client;