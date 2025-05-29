import * as actionTypes from "../ActionTypes";
import axios from "axios";

//product calls
//product action and server call
export const saveProduct = (product) => {
    console.log("saveProduct ", product);

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

export const setProducts = (products) => {
    return{
        type: actionTypes.ADD_PRODUCTS_TOSTORE,
        payload: {products}
    }
}

export const fetchProducts = () => {
    return function(dispatch){

        axios.get("http://localhost:9000/product/api/getProducts")
        .then((allProducts) => {
            let productresp = allProducts.data;
            
            dispatch (setProducts(productresp))
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