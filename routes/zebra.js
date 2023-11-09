var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zebra', { title: 'Search Results zebra' });
});
var express = require('express');
const zebra_controlers= require('../controllers/zebra');
var router = express.Router();
/* GET zebras */
router.get('/', zebra_controlers.zebra_view_all_Page );
module.exports = router;