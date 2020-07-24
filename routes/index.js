const express = require("express");
const router = express.Router();

const { spawn } = require("child_process");

router.get("/health", function (req, res, next) {
  res.json({ status: "running" });
});

router.get("/scripts/:scriptName", function (req, res, next) {
  const { scriptName } = req.params;
  res.end();
});

module.exports = router;
