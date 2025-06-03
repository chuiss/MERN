let mongooseObj = require("mongoose");
let schemaObj = mongooseObj.Schema; // using Schema from mongoose

// creates or connects to the same database
mongooseObj.connect("mongodb://127.0.0.1/data25");

let cartSchema = new schemaObj(
    {
       userid: {type:String, required: true},
       cart: Object 
    },
    {
        versionKey: false // set to false so it wont create in MongoDB
    }
);

// collection name = "cart" (MongoDB will pluralize it to "carts")
let CartModel = mongooseObj.model("cart", cartSchema);

module.exports = CartModel;
