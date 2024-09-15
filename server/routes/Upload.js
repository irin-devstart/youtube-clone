const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { Upload } = require("../models");

const storage = multer.diskStorage({
  destination: "./Videos",
  filename: (req, file, callBack) => {
    callBack(null, "VIDEO" + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
}).single("video");

router.post("/video", (req, res) => {
  res.send("This Video Upload");
});

router.post("/", (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const channelName = req.body.channelName;
  const thumbnailUrl = req.body.thumbnailUrl;
  const videoPathname = req.body.videoPathName;
  Upload.create({
    title: title,
    description: description,
    channel: channelName,
    thumbnailUrl: thumbnailUrl,
    videoPathname: videoPathname,
  }).catch((err) => {
    console.log(err);
  });
});

module.exports = router;
