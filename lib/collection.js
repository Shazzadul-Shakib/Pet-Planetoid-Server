const client=require('./mongoConfig');
const database = client.db("pet-planetoid");

// ------ all collections ------- //
const postCollection = database.collection("postCollection");
const commentCollection = database.collection("commentCollection");
const vetCollection = database.collection("vetCollection");

module.exports = {
  postCollection,
  commentCollection,
  vetCollection,
};