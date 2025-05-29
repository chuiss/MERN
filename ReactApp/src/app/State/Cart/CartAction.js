import * as actionTypes from "../ActionTypes";
import axios from "axios";
 
export const addItemToCart = (product) => {
     return function(dispatch){
        dispatch({
            type: actionTypes.ADD_CART_TO_STORE,
            payload: { product: product }
        })
    }
}