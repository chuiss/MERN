let mongooseObj = require("mongoose");
let schemaObj = mongooseObj.Schema; // using Schema from mongoose

// creates or connects to the same database
mongooseObj.connect("mongodb://127.0.0.1/data25");

let cartSchema = new schemaObj(
    {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        category: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: String, default: "N/A" },
        qty: { type: Number, default: 1 },
        addedAt: { type: Date, default: Date.now }
    },
    {
        versionKey: false // disables __v field in MongoDB
    }
);

// collection name = "cart" (MongoDB will pluralize it to "carts")
let CartModel = mongooseObj.model("cart", cartSchema);

module.exports = CartModel;
