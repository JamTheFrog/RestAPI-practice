const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
const User = mongoose.model("User")

router.get("/users/all", async (req,res) => {
    const allUsers = await User.find({})
    res.send(allUsers)
})
router.post("/users/create", async (req,res) => {
    const {name, age} = req.body
    if(!name || !age){ console.log("gazda no content")
    res.send(null)
}
    const latestUser = await User.create({name, age})
    res.send(latestUser)
})
router.delete("/users/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        res.status(404).send({ error: "User not found" });
        return;
      }
      res.send(deletedUser);
    } catch (err) {
      res.status(500).send({ error: "Server error" });
    }
  });

module.exports = router;