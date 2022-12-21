import { Box } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductsList = () => {
    const { products, getProducts } = useProducts();
    useEffect(() => {
        getProducts();
    }, []);

    return (
        <Box
            sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
                marginRight: "30px",
                marginLeft: {
                    xs: "30px",
                    sm: "30px",
                    md: "0",
                    lg: "0",
                    xl: "0",
                },
            }}
        >
            {products && products.length > 0
                ? products.map((product) => (
                      <ProductCard key={product.id} product={product} />
                  ))
                : null}
        </Box>
    );
};

export default ProductsList;
