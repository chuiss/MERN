import * as ActionTypes from "../ActionTypes";

const Initial_State = {

    CartItems: [],  // this holds all the products added to the cart
    Loading: false
};

let cartReducer = (state = Initial_State, action) => {
    //switch case logic to read action type and return new state / updated state
    switch (action.type){
        case ActionTypes.ADD_CART_TO_STORE:
                return { ...state, CartItems: [...state.CartItems, action.payload.product] };
        case "SET_LOADING":
            return { ...state, Loading: action.payload.loading }; //we update loading and then return a new state
        default:
            return state;

    }
}

export default cartReducer;

 