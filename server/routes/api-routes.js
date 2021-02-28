const router = require("express").Router();

const { test } = require("../controllers/controller");

router.get("/test", test);
module.exports = router;
