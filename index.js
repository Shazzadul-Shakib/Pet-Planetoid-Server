const express = require("express");
const cors = require("cors");
const dotEnv= require("dotenv");


//------- middleware & to read eng files --------//
const app = express();
app.use(cors());
app.use(express.json());
dotEnv.config();
const port = process.env.PORT || 5000;

//------- import routes --------//
const addPost=require('./routes/posts/addPost');
const getPost=require('./routes/posts/getPost');

//------- use routes --------//
app.use('/add-posts',addPost);
app.use('/get-posts',getPost);

app.get("/", (_, res) => {
  res.send("Pet Planetoid server is running..");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
