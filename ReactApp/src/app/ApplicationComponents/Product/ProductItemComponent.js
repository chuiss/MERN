import React, {useState} from "react";

let ProductItemComponent = ({product}) => {

    let[showHide, toggleShowHide] = useState(false);

    return (
        <ul className="product col-md-11">
            <li className="product" onClick={()=>toggleShowHide(!showHide)}>
           {product.name}
                {showHide ? 
                    <ul>
                    <li>{product.price}</li>
                    <li>{product.desc}</li>
                    <li>{product.rating}</li> 
                    {/* <button onClick={()=>addItemToCart(product)} >Add Item</button> */}
                </ul>
                 : <div></div>} 
            </li>
        </ul>
    )
}

export default ProductItemComponent;