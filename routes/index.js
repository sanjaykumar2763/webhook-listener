const express = require("express");
const router = express.Router();
const util = require("util");
const execFile = util.promisify(require("child_process").execFile);
const exec = util.promisify(require("child_process").exec);

const currentUser = process.env.USER;
const webhookListenerScriptsLocation =
  process.env.WH_LISTENER_SCRIPTS_PATH || `/home/${currentUser}/wh_scripts/`;

router.get("/health", function (req, res, next) {
  res.json({ status: "running" });
});

router.get("/scripts/:scriptName", async (req, res, next) => {
  const { scriptName } = req.params;

  console.log("Request to execute script ", scriptName);

  const scriptPath = webhookListenerScriptsLocation + scriptName;

  console.log("Script path: ", scriptPath);

  try {
    const { stdout } = await execFile("sh", [scriptPath]);

    console.log(`Response for executing ${scriptPath}: ${stdout}`);
  } catch (e) {
    console.error(`Error while running ${scriptPath}: `, e);
  }

  res.end();
});

module.exports = router;
