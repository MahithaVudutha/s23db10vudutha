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
module.exports = router;

// Handle zebra update form on PUT.
exports.zebra_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await zebra.findById( req.params.id)
// Do updates of properties
if(req.body.zebra_color)
toUpdate.zebra_color = req.body.zebra_color;
if(req.body.zebra_breed) toUpdate.zebra_breed = req.body.zebra_breed;
if(req.body.zebra_price) toUpdate.zebra_price = req.body.zebra_price;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};

