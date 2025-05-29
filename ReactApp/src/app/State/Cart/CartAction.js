import * as actionTypes from "../ActionTypes";
import axios from "axios";

export const saveToCart = (product) => {
    return function(dispatch){
        axios.post("http://localhost:9000/cart/api/saveCartItem", product)
        .then ((response) => {
            dispatch({
                type: actionTypes.ADD_CART_TOSTORE,
                payload: { product: response.data }
            })
        })
        .catch((err) => {
            console.log("Error while saving cart item", err);
        })
    };
};







            //             let cartItem = response.data;
//             console.log("Cart item save response", cartItem);
//             dispatch(addToCart(cartItem));
//         })
//         .catch((err) => {
//             console.log("Error while saving cart item", err);
//         })
//     }
// }

// export const addToCart = (product) => {
//     return {
//         type: actionTypes.ADD_CART_TOSTORE,
//         payload: { product }
//     };
// }
