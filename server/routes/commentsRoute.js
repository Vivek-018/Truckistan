const express = require("express")
const router = express.Router();
const Comments = require("../schema/CommentSchema");

router.post("/", async (req, res) => {
    const { desc } = req.body
    try {
        if (desc) {
            const savedComments = await Comments({ desc: desc })
            const saved = savedComments.save();
            res.status(201).json({ saved })
        } else {
            res.status(404).send({ msg: "Some Internal Error Occured" })
        }
    } catch (error) {
        res.status(404).send({ msg: "Some Internal Error Occured" })
    }
})


module.exports = router;