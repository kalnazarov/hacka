import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";
import AirportShuttleIcon from "@mui/icons-material/AirportShuttle";
import PaymentIcon from "@mui/icons-material/Payment";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import React, { useState } from "react";
import { useEffect } from "react";
import { useLinkClickHandler, useNavigate, useParams } from "react-router-dom";

import { Button, CardContent, Grid } from "@mui/material";
import { ADMIN } from "../helpers/const";
import BoltSharpIcon from "@mui/icons-material/BoltSharp";
import WindowRoundedIcon from "@mui/icons-material/WindowRounded";
import AppleIcon from "@mui/icons-material/Apple";
import { useProducts } from "../context/ProductContextProvider";
import { useCart } from "../context/CartContextProvaider";
import { useAuth } from "../context/AuthContextProvider";

const ProductDetails = () => {
    const { addProductToCart, checkProductInCart } = useCart();
    const [like, setLike] = useState(false);
    const navigate = useNavigate();
    const { getProductDetails, productDetails, deleteProduct } = useProducts();
    const { id } = useParams();
    useEffect(() => {
        getProductDetails(id);
    }, []);

    const {
        user: { email },
    } = useAuth();

    return (
        <Box sx={{ width: "80%", pt: "110px", pb: "80px", color: "white" }}>
            <Typography variant="h3" sx={{ color: "white", pb: "10px" }}>
                {productDetails.name}
            </Typography>

            <Box
                sx={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                }}
            >
                <Box sx={{ width: "60%" }}>
                    <iframe
                        width="100%"
                        height="490"
                        allow="autoplay"
                        src="https://www.youtube.com/embed/smttkZ06oYg?autoplay=1"
                    ></iframe>

                    <Typography
                        variant="h3"
                        sx={{ textAlign: "center", color: "gray" }}
                    >
                        Лучшие отзывы об игре
                    </Typography>

                    <p
                        style={{
                            height: "150px",
                            fontSize: "22px",
                            fontFamily: "Inter,sans-serif",
                            lineHeight: "30px",
                            // textAlign: "center",
                        }}
                    >
                        {productDetails.description} <BoltSharpIcon />
                    </p>
                </Box>
                <Box sx={{ width: "20%" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: "6px",
                        }}
                    >
                        <img
                            style={{ width: "90%", height: "320px" }}
                            src={productDetails.picture}
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "11px",
                            pb: "10px",
                        }}
                    >
                        <Button
                            sx={{
                                color: "rgb(245, 245, 245)",
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                                width: "150px",
                                height: "30px",
                                fontSize: "11px",
                            }}
                        >
                            Базовая игра
                        </Button>
                        <Typography sx={{ pr: "10px", color: "white" }}>
                            {productDetails.price}.99 $
                        </Typography>
                    </Box>
                    <Box sx={{ pb: "10px" }}>
                        <Button
                            onClick={() => navigate("/pay")}
                            sx={{
                                color: "white",
                                backgroundColor: "green",
                                width: "100%",
                                height: "50px",
                            }}
                        >
                            Купить Сейчас
                        </Button>
                    </Box>
                    {checkProductInCart(productDetails.id) ? (
                        <Button
                            variant="contained"
                            onClick={() => navigate("/cart")}
                            sx={{
                                color: "white",
                                backgroundColor: "transparent",
                                border: "1px solid gray",
                                width: "100%",
                                height: "50px",
                            }}
                        >
                            Посмотреть в корзине
                        </Button>
                    ) : (
                        <Button
                            variant="contained"
                            onClick={() => addProductToCart(productDetails)}
                            sx={{
                                color: "white",
                                backgroundColor: "transparent",
                                border: "1px solid gray",
                                width: "100%",
                                height: "50px",
                            }}
                        >
                            Добавить в корзину
                        </Button>
                    )}
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "10px",
                            borderBottom: "0.5px solid gray",
                            pb: "3px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                                color: "gray",
                            }}
                        >
                            Издатель
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                            }}
                        >
                            Epic Games
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "10px",
                            borderBottom: "0.5px solid gray",
                            pb: "3px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                                color: "gray",
                            }}
                        >
                            Разработчик
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                            }}
                        >
                            kalnazarov_
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "10px",
                            borderBottom: "0.5px solid gray",
                            pb: "3px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                                color: "gray",
                            }}
                        >
                            Платформа
                        </Typography>
                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",
                                fontSize: "18px",
                            }}
                        >
                            <WindowRoundedIcon sx={{ color: "white" }} />
                            <AppleIcon sx={{ color: "white" }} />
                        </Typography>
                    </Box>
                    <Box sx={{ pt: "10px" }}>
                        <Button
                            variant="contained"
                            onClick={() => setLike(!like)}
                            sx={{
                                color: "white",
                                backgroundColor: "transparent",
                                border: "1px solid gray",
                                width: "100%",
                                height: "40px",
                                fontSize: "30px",
                            }}
                        >
                            {like ? "❤️" : " 💔"}
                        </Button>
                    </Box>
                    {email === ADMIN ? (
                        <>
                            <Box sx={{ pt: "10px" }}>
                                <Button
                                    onClick={() => navigate(`/edit/${id}`)}
                                    variant="contained"
                                    sx={{
                                        color: "white",
                                        backgroundColor: "transparent",
                                        border: "1px solid gray",
                                        width: "100%",
                                        height: "25px",
                                    }}
                                >
                                    Редактировать
                                </Button>
                            </Box>
                            <Box sx={{ pt: "5px" }}>
                                <Button
                                    onClick={() => {
                                        deleteProduct(id);
                                        navigate(`/products`);
                                    }}
                                    variant="contained"
                                    sx={{
                                        color: "white",
                                        backgroundColor: "transparent",
                                        border: "1px solid gray",
                                        width: "100%",
                                        height: "25px",
                                    }}
                                >
                                    Удалить
                                </Button>
                            </Box>
                        </>
                    ) : (
                        <></>
                    )}
                </Box>
            </Box>
        </Box>
    );
};

export default ProductDetails;
