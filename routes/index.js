const express = require("express");
const router = express.Router();
const util = require("util");
const execFile = util.promisify(require("child_process").execFile);
const exec = util.promisify(require("child_process").exec);

router.get("/health", function (req, res, next) {
  res.json({ status: "running" });
});

router.get("/scripts/:scriptName", async (req, res, next) => {
  const { scriptName } = req.params;

  console.log("scriptName: ", scriptName);
  const { stdout } = await execFile("node", ["--version"]);
  console.log("stdout: ", stdout);

  console.log("res: ", await exec("pwd"));

  res.end();
});

module.exports = router;
