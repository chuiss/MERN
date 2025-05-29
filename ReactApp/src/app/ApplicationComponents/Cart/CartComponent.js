import React, {useRef, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { saveCart } from "../../State/Cart/CartAction";

let CartComponent = () => {
    let name = useRef(null);
    let price = useRef(null);
    let category = useRef(null);
    let description = useRef(null);
    let rating = useRef(null);

    let cart = useSelector((state) => state.cartReducer.Cart);
    
    let dispatchCart = useDispatch();
    //useEffect - reads all the changes that affect the state of the component and then does the job of re-render
    //if we pass the second parameter to initialize the state it will work as - componentDidMount
    //if we dont pass the second parameter to initialize the state it will work as - shouldComponentUpdate
    //if we return a child function then it will work as - componentWillUnMount
    useEffect(() => {
        //initializing the values we read from reducer to our cart state
        name.current.value = cart.name;
        price.current.value = cart.price;
        category.current.value = cart.category;
        description.current.value = cart.description;
        rating.current.value = cart.rating;


    }, []);

    let saveCartClick = (evt) => {
        //creating cart data model to be saved in db using cart api
        let cartToSave = {
            name: name.current.value,
            price: price.current.value,
            category: category.current.value,
            description: description.current.value,
            rating: rating.current.value
        };

        alert("We are going to save this cart!!! " + JSON.stringify(cartToSave));

        dispatchCart(saveCart(cartToSave));
        evt.preventDefault();
    }

return (
        <div className="col-md-12">
            <h1 className="col-md-12">Cart Component</h1>

            <form className="form componentClass">
                <div className="form col-md-8">
                    <div className="col-md-12">
                        <b>Product Name</b>
                        <input
                            type="text"
                            className="form-control col-md-6"
                            ref={name}
                            placeholder="Product Name"
                            maxLength={25}
                        />
                    </div>

                    <div className="col-md-12">
                        <b>Price</b>
                        <input
                            type="number"
                            className="form-control col-md-6"
                            ref={price}
                            placeholder="Product Price"
                        />
                    </div>

                    <div className="col-md-12">
                        <b>Category</b>
                        <input
                            type="text"
                            className="form-control col-md-6"
                            ref={category}
                            placeholder="Product Category"
                        />
                    </div>

                    <div className="col-md-12">
                        <b>Description</b>
                        <input
                            type="text"
                            className="form-control col-md-6"
                            ref={description}
                            placeholder="Product Description"
                        />
                    </div>

                    <div className="col-md-12">
                        <b>Rating</b>
                        <input
                            type="text"
                            className="form-control col-md-6"
                            ref={rating}
                            placeholder="Product Rating"
                        />
                    </div>

                    <input
                        type="button"
                        className="form-control btn btn-success col-md-3"
                        value="Save to Checkout"
                        onClick={saveCartClick}
                    />
                </div>
            </form>
        </div>
    );
};

export default CartComponent;

