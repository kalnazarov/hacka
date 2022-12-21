import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Typography, Button, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { useCart } from "../context/CartContextProvaider";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { useProducts } from "../context/ProductContextProvider";
import { useCart } from "../context/CartContextProvaider";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const [hover, setHover] = useState(false);

    const { deleteProduct } = useProducts();
    const { addProductToCart, checkProductInCart, deleteCartProduct } =
        useCart()

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                pt: "50px",

                width: {
                    xs: "60%",
                    sm: "45%",
                    md: "30%",
                    lg: "22%",
                    xl: "18%",
                },
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <Box
                sx={{
                    backgroundImage: `url(${product.picture})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "100% 100%",
                    // backgroundSize: "cover",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "end",
                    // backgroundColor: hover ? "green" : "red",
                    borderRadius: "10px",
                    backgroundSize: "100% 100%",
                    width: "100%",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",

                        display: hover ? "block" : "none",
                        color: "white",
                    }}
                >
                    {checkProductInCart(product.id) ? (
                        <Box onClick={() => addProductToCart(product)}>
                            <RemoveCircleOutlineIcon
                                sx={{ pb: "260px", pl: "160px" }}
                            />
                        </Box>
                    ) : (
                        <Box onClick={() => addProductToCart(product)}>
                            <AddCircleOutlineIcon
                                sx={{ pb: "260px", pl: "160px" }}
                            />
                        </Box>
                    )}
                </Box>
                <Button
                    sx={{
                        backgroundColor: "black",
                        width: "30%",
                        color: "rgb(220 ,174, 100)",
                        mt: "10%",
                        ml: "60%",
                        fontWeight: "800",

                        // height: "10%",
                        textAlign: "center",
                    }}
                >
                    {product.price} $
                </Button>
{/* 
                <Button
                    onClick={() => deleteProduct(product.id)}
                    variant="danger"
                >
                    Delete
                </Button>
                <Button sx={{backgroundColor:'red'}}
                   
                    onClick={() => navigate(`/products/${product.id}`)}
                    variant="primary"
                >
                    Edit
                </Button> */}

                <Button
                    sx={{
                        backgroundColor: "#1f1e27",
                        width: "50%",
                        color: "white",
                        marginTop: "110%",
                        marginBottom: "10%",
                        fontWeight: "800",
                        fontSize: {
                            xs: "10px",
                            sm: "12px",
                            md: "14px",
                            lg: "16px",
                            xl: "10px",
                        },
                    }}
                    onClick={() => navigate(`/products/${product.id}`)}
                >
                    Buy
                </Button>
            </Box>
            <Typography
                sx={{
                    // fontWeight: '600',
                    marginTop: "13px",
                    width: "100%",
                    textAlign: "left",
                    color: "white",
                    fontSize: {
                        xs: "10px",
                        sm: "12px",
                        md: "14px",
                        lg: "16px",
                        xl: "16px",
                    },
                }}
            >
                {product.name}
            </Typography>
        </Box>
    );
};

export default ProductCard;
