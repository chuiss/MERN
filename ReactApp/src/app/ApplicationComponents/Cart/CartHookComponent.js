import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveCart } from "../../State/Cart/CartAction";

let CartHookComponent = (props) => {
    // Get cart state from Redux store
    let cartState = useSelector((state) => state.cartReducer.Cart);

    console.log("CartHookComponent", cartState);

    // useRef hooks for form fields
    let name = useRef(null);
    let price = useRef(null);
    let category = useRef(null);
    let description = useRef(null);
    let rating = useRef(null);

    // useEffect for pre-filling inputs if cart already exists
    useEffect(() => {
        if (cartState) {
            name.current.value = cartState.name || "";
            price.current.value = cartState.price || "";
            category.current.value = cartState.category || "";
            description.current.value = cartState.description || "";
            rating.current.value = cartState.rating || "";
        }
    }, [cartState]);

    const dispatchCart = useDispatch();

    let submitCart = (evt) => {
        let cartObj = {
            name: name.current.value,
            price: price.current.value,
            category: category.current.value,
            description: description.current.value,
            rating: rating.current.value
        };

        dispatchCart(saveCart(cartObj));

        alert("Cart submitted to DB: " + JSON.stringify(cartObj));

        evt.preventDefault(); // prevent full form reload
    };

    return (
        <>
            <h1>Cart Form - Using Hooks</h1>
            <form className="form-control col-md-12" onSubmit={submitCart}>
                <b>Product Name</b>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                    ref={name}
                    maxLength={25}
                    required
                />

                <b>Price</b>
                <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price"
                    ref={price}
                    required
                />

                <b>Category</b>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter category"
                    ref={category}
                    maxLength={20}
                    required
                />

                <b>Description</b>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter description"
                    ref={description}
                    maxLength={100}
                    required
                />

                <b>Rating</b>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter rating"
                    ref={rating}
                    maxLength={5}
                    required
                />

                <button type="submit" className="btn btn-success mt-3">
                    Save Cart
                </button>
            </form>
        </>
    );
};

export default CartHookComponent;
