var express = require('express');
var router = express.Router();
const pagesControllers=require('../controllers/pagesControllers')

/* GET home page. */
router.get('/',pagesControllers.home );
router.get('/home',pagesControllers.home );
router.get('/sobre',pagesControllers.sobre );
router.get('/contato',pagesControllers.contato );
router.post('/contato',pagesControllers.email );
router.get('/sistema',pagesControllers.sistema );

module.exports = router;
