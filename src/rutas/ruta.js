const { Router } = require("express");
const router = Router();
const { home, token, message } = require("./../modelo/modelo");

router.get("/", home);
router.post("/token", token);
router.post("/message", message);

module.exports = router;
