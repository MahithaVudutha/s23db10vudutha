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
// for a specific zebra.
exports.zebra_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await zebra.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    
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
    // Handle zebra delete on DELETE.
exports.zebra_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await zebra.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    // Handle a show one view with id specified by query
exports.zebra_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await zebra.findById( req.query.id)
res.render('zebradetail',
{ title: 'zebra Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle building the view for creating a zebra.
// No body, no in path parameter, no query.
// Does not need to be async
exports.zebra_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('zebracreate', { title: 'zebra Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    // Handle building the view for updating a zebra.
// query provides the id
exports.zebra_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await zebra.findById(req.query.id)
res.render('zebraupdate', { title: 'zebra Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.zebra_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await zebra.findById(req.query.id)
res.render('zebradelete', { title: 'zebra Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};