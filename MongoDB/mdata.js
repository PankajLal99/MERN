// // it will contain the database
var db = require('mongoose');
// // schema = tables ke type
var empSchema = new db.Schema({
    name: String,
    email : String,
    phone : Number,
});
// //to make methods we use schema name
empSchema.methods.getName=function(){
    console.log(this.name);
}
// // pass every thing in json
// // First we'll make schema then models
// // model ka first para : name of table , schema name
// // now we make object of our model
var empModel = db.model('Emp',empSchema);
var emps = new empModel({
    name: 'Pankaj Lal',
    email : 'lalpankaj0@gmail.com',
    phone : '7000977422',
});

emps.getName();

// // Collection is tablw as we have in Database
// // Mongo DB Compass give live feed

// // Shell Commands
// https://docs.mongodb.com/manual/reference/insert-methods/
// https://docs.mongodb.com/manual/tutorial/query-documents/