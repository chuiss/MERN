let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose

//creates db with name studentData or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/studentData");

let userSchema = new schemaObj({
    userName : {type: String, required : true},
    password: {type:String, required : true}
},
{
    versionKey: false //false - set to false then it wont create in mongodb, don't set it to true, if you want _v just dont add this
}
)

let UserModel = mongooseObj.model("user", userSchema);//user - collection name, pluralised by mongodb

//UserModel is a table
module.exports = UserModel; //with capability to retrieve save udpate queries with mongo db
console.log("MongoDB connection with user datamodel is established!!")
