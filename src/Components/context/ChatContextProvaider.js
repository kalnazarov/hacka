import React, { createContext, useContext, useEffect, useReducer } from "react";
import {
    collection,
    getDocs,
    addDoc,
    doc,
    getDoc,
    updateDoc,
    deleteDoc,
} from "firebase/firestore";
import { db } from "../../fire";

const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
    products: [],
    productDetails: null,
};

function reducer(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_PRODUCTS":
            return { ...state, products: action.payload };

        case "GET_PRODUCT_DETALIS":
            return { ...state, productDetails: action.payload };

        default:
            return state;
    }
}

const ProductContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    //  collection - функция для полученя ссылки на коллекцию данных
    const productsCollectionRef = collection(db, "products");

    //  read
    async function getProducts() {
        const data = await getDocs(productsCollectionRef);
        dispatch({
            type: "GET_PRODUCTS",
            payload: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
        });

        console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }

    //create
    async function createProduct(newProduct) {
        await addDoc(productsCollectionRef, newProduct);
        getProducts()
    }

    //update

    async function getOneProductDetails(id) {
        const productDocRef = doc(db, "products", id);
        const productDetails = await getDoc(productDocRef);
        dispatch({
            type: "GET_PRODUCT_DETALIS",
            payload: productDetails.data(),
        });
        console.log("CHGVJ", productDetails.data());
    }
    // getOneProductDetails("nXlYJfQ3uCCW19EzsmND");
    async function updateProduct(id, updatedProduct) {
        const productDocRef = doc(db, "products", id);

        await updateDoc(productDocRef, updatedProduct);
        getProducts();
    }
    //delete
    async function deleteProduct(id) {
        const productDocRef = doc(db, "products", id);

        await deleteDoc(productDocRef);
        getProducts();
    }
    useEffect(() => {
        getProducts();
        console.log(state.products);
    }, []);

    const values = {
        productDetails: state.productDetails,
        getOneProductDetails,
        deleteProduct,
        createProduct,
        updateProduct,
        getProducts,
        products: state.products,
    };
    return (
        <productContext.Provider value={values}>
            {children}
        </productContext.Provider>
    );
};

export default ProductContextProvider;
