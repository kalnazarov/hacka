import React from "react";
import ProductDetails from "./ProductDetails";

const ProductDetailsPage = () => {
    return (
        <div
            style={{
                backgroundColor: "rgb(18, 18, 18)",
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "100%",
            }}
        >
            <ProductDetails />
        </div>
    );
};

export default ProductDetailsPage;
