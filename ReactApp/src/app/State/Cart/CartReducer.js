import * as ActionTypes from "../ActionTypes";

const Initial_State = {
    Cart: {
        name: "",
        price: "",
        category: "",
        description: "",
        rating: ""
    },
    Carts: [],
    Loading: false
};

let CartReducer = (state = Initial_State, action) => {
    //switch case logic to read action type and return new state / updated state
    switch (action.type){
        case ActionTypes.ADD_CART_TOSTORE:
                return { ...state, Carts: [...state.Carts, action.payload.product] };
        case "SET_LOADING":
            return { ...state, Loading: action.payload.loading }; //we update loading and then return a new state
        default:
            return state;

    }
}
export default CartReducer;