const express = require("express");
const { postCollection } = require("../../lib/collection");
const { ObjectId } = require("mongodb");
const router = express.Router();

router.patch('/:id',async(req,res)=>{
    const {id}=req.params;
    const filter={_id: new ObjectId(id)};
    const isliked = req.body.isLiked;
    // const likedUser=req.body.likedUser;
    console.log(isliked);
    const updateLikeStatus = {
      $set: {
        isLiked: isliked,
        // likedUser:likedUser
      },
    };
    const result=await postCollection.updateOne(filter,updateLikeStatus);
    res.send(result);
})

module.exports = router;
