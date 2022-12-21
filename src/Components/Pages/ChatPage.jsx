import React, { useEffect } from "react";
import { useProducts } from "../context/ChatContextProvaider";
import Chattt from "./Chattt";

const ChatPage = () => {
    const { products, getProducts } = useProducts();
    useEffect(() => {
        getProducts();
        console.log(products);
    }, []);
    return (
        <div className="container d-flex justiy-content-center flex-wrap">
            {products && products.length > 0
                ? products?.map((product) => (
                      <Chattt key={product.id} product={product} />
                  ))
                : null}
        </div>
    );
};

export default ChatPage;
