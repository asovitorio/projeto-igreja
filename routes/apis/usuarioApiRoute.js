var express = require('express');
var router = express.Router();
const usuarioApiController = require('../../controllers/apis/usuarioApiController')

router.get('/',usuarioApiController.index)
router.post('/',usuarioApiController.create)



module.exports = router;