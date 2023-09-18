const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
// zg9OapIm6dsIoqf5;shakib1186

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://shakib1186:zg9OapIm6dsIoqf5@pet-planetoid.3oxempm.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Database name and collection name
    const database = client.db("allPosts");
    const postCollection = database.collection("postCollection");

    // <---------- Our Api From here ---------- />
    
    // Post API for create post
    app.post("/posts", async (req, res) => {
      const newPost = req.body;
      console.log(newPost);
      const result = await postCollection.insertOne(newPost);
      res.send(result);
    });

    // Get all post API
    app.get("/posts",async(req,res)=>{
        const result= await postCollection.find().toArray();
        res.send(result);
    })

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Pet Planetoid server is running..");
});
app.listen(port, (req, res) => {
  console.log(`Server is running on port ${port}`);
});
