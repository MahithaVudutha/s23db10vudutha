var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var zebra_controller = require('../controllers/zebra');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// zebra ROUTES ///
// POST request for creating a zebra.
router.post('/zebras', zebra_controller.zebra_create_post);
// DELETE request to delete zebra.
router.delete('/zebras/:id', zebra_controller.zebra_delete);
// PUT request to update zebra.
router.put('/zebras/:id', zebra_controller.zebra_update_put);
// GET request for one zebra.
router.get('/zebras/:id', zebra_controller.zebra_detail);
// GET request for list of all zebra items.
router.get('/zebras', zebra_controller.zebra_list);
router.get('/detail', zebra_controller.zebra_view_one_Page); 

router.get('/create', zebra_controller.zebra_create_Page); 

router.get('/update', zebra_controller.zebra_update_Page); 

router.get('/delete', zebra_controller.zebra_delete_Page);
module.exports = router;



