var express = require('express');
var router = express.Router();
const systemControllers = require("../controllers/systemControllers");

router.get('/',systemControllers.index)


module.exports = router;