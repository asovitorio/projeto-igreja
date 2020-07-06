var express = require('express');
var router = express.Router();
const systemControllers = require("../controllers/systemControllers");

router.get('/',systemControllers.index)
router.get('/logout',systemControllers.logout)
router.get('/membro',systemControllers.cadastroMenbroView)


module.exports = router;