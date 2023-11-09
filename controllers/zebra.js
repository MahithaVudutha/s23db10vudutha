var zebra = require('../models/zebra');
// List of all zebras
exports.zebra_list = async function(req, res) {
    try{
    thezebras = await zebra.find();
    res.send(thezebras);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
    

// for a specific zebra.
exports.zebra_detail = function(req, res) {
res.send('NOT IMPLEMENTED: zebra detail: ' + req.params.id);
};
// Handle zebra create on POST.
exports.zebra_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: zebra create POST');
};
// Handle zebra delete form on DELETE.
exports.zebra_delete = function(req, res) {
res.send('NOT IMPLEMENTED: zebra delete DELETE ' + req.params.id);
};
// Handle zebra update form on PUT.
exports.zebra_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: zebra update PUT' + req.params.id);
};
// VIEWS
// Handle a show all view
exports.zebra_view_all_Page = async function(req, res) {
    try{
    thezebras = await zebra.find();
    res.render('zebra', { title: 'zebra Search Results', results: thezebras });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// Handle zebra create on POST.
exports.zebra_create_post = async function(req, res) {
    console.log(req.body)
    let document = new zebra();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"zebra_type":"goat", "cost":12, "size":"large"}
    document.zebra_color = req.body.zebra_color;
    document.zebra_breed = req.body.zebra_breed;
    document.zebra_price = req.body.zebra_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
