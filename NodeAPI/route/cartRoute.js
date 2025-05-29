const express = require('express'); // import package
const cartRouter = express.Router({ strict: true, caseSensitive: true }); // a separate router
const cartDataModel = require('../DataModel/cartDataModel'); // your mongoose model

// POST - Save cart item
cartRouter.post("/api/saveCartItem", (req, res) => {
    let cartObj = req.body;
    console.log("Cart Object Received:", cartObj);

    let cartSchemaObj = new cartDataModel(cartObj);

    cartSchemaObj.save()
        .then((savedCartItem) => {
            console.log("Successfully saved cart item:", savedCartItem);
            cartDataModel.find()
                .then((allCartItems) => {
                    res.send(allCartItems); // return all cart items after saving
                })
                .catch((fetchErr) => {
                    console.log("Error fetching cart items:", fetchErr);
                    res.status(500).send("Error while fetching cart items");
                });
        })
        .catch((saveErr) => {
            console.log("Error saving cart item:", saveErr);
            res.status(500).send("Error while saving cart item");
        });
});

// GET - Fetch all cart items
cartRouter.get("/api/getCartItems", (req, res) => {
    cartDataModel.find()
        .then((cartItems) => {
            res.send(cartItems);
        })
        .catch((err) => {
            console.log("Error fetching cart items:", err);
            res.status(500).send("Error while fetching cart items");
        });
});

module.exports = cartRouter;
