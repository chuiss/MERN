import * as actionTypes from "../ActionTypes";
import axios from "axios";

//product calls
//product action and server call
export const saveProduct = (product) => {
    console.log("Product ", product);

    return function(dispatch){

        axios.post("http://localhost:9000/product/api/saveProduct", product)
        .then ((allData) => {
            let productresp = allData.data;
            console.log("product save response", productresp);
            dispatch(addProduct(productresp))
    })
    .catch((err) => {
        console.log("Error while saving product", err);
    })
}
}

export const addProduct = (products) => {
    return{
        type: actionTypes.ADD_PRODUCTS_TOSTORE,
        payload: {products}
    }
}

export const fetchProducts = () => {
    console.log("Products ")
    return function(dispatch){

        axios.get("http://localhost:9000/product/api/getproducts")
        .then((allProducts) => {
            let productresp = allProducts.data;
            console.log("get products response", productresp);
            dispatch (addProduct(productresp))
        })
        .catch((err) => {
            console.log("Error while saving product", err);
        })
    }
}

export const setLoading = (loading) => {
    return {
        type: "SET_LOADING",
        payload: { loading }

    }
}