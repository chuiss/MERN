import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../State/Cart/CartAction";

const ProductItemComponent = ({ product }) => {
    const [showHide, toggleShowHide] = useState(false);
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        const cartItem = {
            name: product.name,
            price: product.price,
            category: product.category || "N/A",
            description: product.desc,
            rating: product.rating || "N/A"
        };
        console.log("Adding to cart:", cartItem);
        dispatch(addItemToCart(cartItem));
    };

    return (
        <div className="d-flex justify-content-center">
            <div className="card col-md-6 my-3 p-3 shadow-sm">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center gap-1" onClick={() => toggleShowHide(!showHide)} style={{ cursor: "pointer" }}>
                        <h5 className="card-title mb-0 me-2">{product.name}</h5>
                        <button className="btn btn-success btn-sm" onClick={(e) => { e.stopPropagation(); handleAddToCart(); }}>Add to Cart</button>
                    </div>

                    {showHide && (
                        <ul className="list-group list-group-flush mt-3">
                            <li className="list-group-item"><strong>Price:</strong> ${product.price}</li>
                            <li className="list-group-item"><strong>Description:</strong> {product.desc}</li>
                            <li className="list-group-item"><strong>Rating:</strong> {product.rating}</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductItemComponent;
