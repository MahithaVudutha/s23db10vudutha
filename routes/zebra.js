var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('zebra', { title: 'Search Results zebra' });
});
var express = require('express');
const zebra_controlers= require('../controllers/zebra');
var router = express.Router();
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET zebras */
router.get('/', zebra_controlers.zebra_view_all_Page );
/* GET detail zebra page */
router.get('/detail',secured, zebra_controlers.zebra_view_one_Page);
/* GET create zebra page */
router.get('/create', secured,zebra_controlers.zebra_create_Page);
/* GET create update page */
router.get('/update',secured, zebra_controlers.zebra_update_Page);
/* GET delete zebra page */
router.get('/delete',secured, zebra_controlers.zebra_delete_Page);
module.exports = router;