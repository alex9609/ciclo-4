var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Hola mundo' });
  res.send("prueba sin motor de vista soy un unicornio especial")
});

module.exports = router;
