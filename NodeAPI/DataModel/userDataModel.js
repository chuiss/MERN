

//npm i mongoose

/*
import mongoose , use the mongoose to create data if there no connection
a schema to demonstrate the data key values pairs + validations
using schema to create a datamodel to provide mongoose methods to access modify data
and to create the collection
this data model will allow us to do mapping with mongo db using mongoose
MongoDB - non-relation, document oriented database, non-schema, non-structured
create a connection using mongoDB client
get schema to make connection to mongodb
get schema object created and also develop data model to be used in api
set validations and data types in schema
although mongodb is schema less but with mongoose we can create a schema to start with

*/

let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name mernstack19 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/data25");

let userSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required : true},
    street: String,
    mobile: Number
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let UserModel = mongooseObj.model("user", userSchema);//user - collection name, pluralised by mongodb

//UserModel is a table
module.exports = UserModel; //with capability to retrieve save udpate queries with mongo db

console.log("MongoDB connection with user datamodel is established!!")