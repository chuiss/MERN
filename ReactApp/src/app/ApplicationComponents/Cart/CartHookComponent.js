import axios from "axios";
import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
 
let CartHookComponent = (props) => {
    // Get cart state from Redux store
    let cartItems = useSelector((state) => state.cartReducer.CartItems);

    console.log("CartHookComponent", cartItems);
 
    // useEffect for pre-filling inputs if cart already exists
    useEffect(() => {
       
    }, [cartItems]);

    const dispatchCart = useDispatch();
    
    let submitCart = (evt) => {
        for (const cartItem of cartItems) {
            // CALL API to save cart items
            axios.post("http://localhost:9000/cart/api/saveCartItem", cartItem)
            .then(response => {
                console.log("Cart saved. All items:", response.data);
                return response.data; // returning updated cart list
            })
            .catch(error => {
                console.error("Error saving cart item:", error);
                throw error;
            });
        }
        evt.preventDefault(); // prevent full form reload
    };
    
    const CartDisplayComponent = ({ cartItems }) => {
        return (
            <div className="container mt-4">
                <h2 className="mb-4">🛒 Your Cart</h2>
                {
                    cartItems.length === 0 ? (
                        <p className="text-muted">Your cart is empty.</p>
                    ) : (
                        <div className="row justify-content-center">
                            {cartItems.map((item, index) => (
                                <div key={index} className="card col-md-6 m-2 shadow-sm">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title mb-0">{item.name}</h5>
                                            <span className="badge bg-primary fs-6">${item.price}</span>
                                        </div>
                                        <p className="card-text mb-1"><strong>Category:</strong> {item.category}</p>
                                        <p className="card-text mb-1"><strong>Description:</strong> {item.description}</p>
                                        <p className="card-text mb-1"><strong>Rating:</strong> {item.rating}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )
                }
            </div>
        );
    };


    return (
        <>
            <h1>My Cart</h1>
            <CartDisplayComponent cartItems={cartItems} />

            <button type="submit" className="btn btn-success mt-3" onClick={submitCart}>
                Save Cart
            </button>
           
        </>
    );
};

export default CartHookComponent;
