const express = require("express");
const router = express.Router();
const util = require("util");
const execFile = util.promisify(require("child_process").execFile);
const exec = util.promisify(require("child_process").exec);

const webhookListenerScriptsLocation =
  process.env.WH_LISTENER_SCRIPTS_PATH || `/var/wh_scripts/`;

router.get("/health", function (req, res, next) {
  res.json({ status: "running" });
});

router.post("/scripts/:scriptName", async (req, res, next) => {
  const {
    body: { ref },
  } = req;

  if (!ref.endsWith(req.query.branch)) {
    return res.status(204).end();
  }

  const { scriptName } = req.params;

  console.log("Request to execute script ", scriptName);

  const scriptPath = webhookListenerScriptsLocation + scriptName;

  console.log("Script path: ", scriptPath);

  try {
    const { stdout } = await execFile("sh", [scriptPath]);

    console.log(`Response for executing ${scriptPath}: ${stdout}`);

    return res.status(201).end();
  } catch (e) {
    console.error(`Error while running ${scriptPath}: `, e);

    return res.status(500).end();
  }
});

module.exports = router;
