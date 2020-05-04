var express = require('express');
var router = express.Router();
const pagesControllers=require('../controllers/pagesControllers')

/* GET home page. */
router.get('/',pagesControllers.index );
router.get('/home',pagesControllers.home );
router.get('/sobre',pagesControllers.sobre );
router.get('/contato',pagesControllers.contato );
router.get('/sistema',pagesControllers.sistema );

module.exports = router;
