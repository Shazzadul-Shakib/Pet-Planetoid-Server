const client=require('./mongoConfig');
const database = client.db("pet-planetoid");

// ------ all collections ------- //
const postCollection = database.collection("postCollection");
const commentCollection = database.collection("commentCollection");

module.exports = {
  postCollection,
  commentCollection,
};