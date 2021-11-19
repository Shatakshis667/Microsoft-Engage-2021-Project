const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Student = require("../model/Student");
const Test = require("../model/Test");
const User = require("../model/User");
require("dotenv").config();

/**
 * @method - GET
 * @param - /profile/:profileID
 * @description - Fetch student profile using profileID
 */

router.get("/profile/:profileID", auth, async (req, res) => {
  const profileID = req.params.profileID;

  try {
    await Student.findOne({
      _id: profileID,
    })
      .populate("profileInfo")
      .exec(function (err, obj) {
        if (err) {
          return res.status(400).json({ err });
        } else {
          return res.status(200).json({
            obj,
          });
        }
      });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Error in fetching Student Data");
  }
});

module.exports = router;