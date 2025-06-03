import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AddItemToCart } from "../../State/Cart/CartAction";


let ProductItemComponent = ({product})=>{
    //useState is a hook that allows you to add state to functional components in React.
    // It returns an array with two elements: the current state value and a function to update that state.
    // In this case, we are using useState to manage the visibility of product details.
    //showHide is the state variable that will hold the visibility status of product details
    //toggleShowHide is the function that will be used to update the showHide state variable
    //initially set to false, meaning product details are hidden
    //when the user clicks on the product name, it will toggle the visibility of the product details
    let [showHide, toggleShowHide] = useState(false)

    //useDispatch is a hook that returns a reference to the dispatch function from the Redux store.
    // It allows you to dispatch actions to the Redux store, which can then update the state based on those actions.
    //In this case, we are using useDispatch to dispatch the AddItemToCart action when the user clicks on the "Add Item" button.
    //dispatchToAddProduct is the reference to the dispatch function
    //we will use this to dispatch the action to add the product to the cart
    let dispatchToAddProduct = useDispatch();

   let dispatchToRemoveProduct = useDispatch();
    //AddItemToCart is an action creator that returns an action object with the type and payload
    //we will pass the product as the payload to this action
    //this will update the cart state in the Redux store with the new product added
    //this will allow us to add the product to the cart when the user clicks on the "Add Item" button
    let addItemToCart = (product)=>{
        dispatchToAddProduct(AddItemToCart(product))        
    }


  

    return(
        <ul className="product col-md-11">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
           {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                    <button onClick={()=>addItemToCart(product)} >Add Item</button>
                    
                </ul>
                 : <div></div>} 
            </li>
        </ul>
    )

}

export default ProductItemComponent;