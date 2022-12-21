import * as React from "react";
import { Box, Button, CardActionArea, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export let image = [
    {
        img: "https://key-drop.gg/uploads/skins/MESH.png",
        name: "MESH",
        price: "0.70",
        id: "2",
    },
    {
        name: "GOJO",
        img: "https://key-drop.gg/uploads/skins/GOJO.png",

        price: "12.00",
        id: "1",
    },

    {
        img: "https://key-drop.gg/uploads/skins/WAKE.png",
        name: "WAKE",
        price: "Бесплатно",
        price: "30.00",
        id: "3",
    },
    {
        name: "DESOLATION",
        img: "https://key-drop.gg/uploads/skins/DESOLATION.png",
        price: "5.20",
        id: "4",
    },
    {
        name: "STAMP",
        img: "https://key-drop.gg/uploads/skins/STAMP.png",
        price: "1.80",
        id: "5",
    },
];
export default function HomeCard2() {
    const navigate = useNavigate();
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                // justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Box sx={{ display: "flex", justifyContent: "center", pt: "50px" }}>
                <Typography
                    sx={{
                        textAlign: "center",
                        color: "white",
                        pb: "10px",
                        fontFamily: "Urbane,sans-serif",
                        fontWeight: "bold",
                        fontSize: "22px",
                        borderBottom: "2px solid white",
                    }}
                >
                    LIMITED EDITION
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "90%",
                    heidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "50px",
                    borderTop: "1px solid gray",
                }}
            >
                {image.map((step, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundImage: `url(${step.img})`,
                            backgroundSize: "100%,100%",
                            backgroundRepeat: "no-repeat",
                            width: "17%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderRadius: "10px",
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "rgba(220,174,100)",
                                width: "20%",
                                color: "black",
                                mb: "115%",
                                fontWeight: "800",
                                ml: "2%",
                                height: "7%",
                            }}
                        >
                            New
                        </Button>
                        <Button
                            variant="contained"
                            onClick={() => navigate(`/carusel/${step.id}`)}
                            sx={{
                                backgroundColor: "#1f1e27",
                                width: "50%",
                                mt: "110%",
                                color: "white",

                                fontWeight: "800",
                            }}
                        >
                            {step.name}
                        </Button>

                        <Button
                            sx={{
                                backgroundColor: "black",
                                width: "30%",
                                color: "rgb(220 ,174, 100)",
                                mb: "115%",
                                fontWeight: "800",
                                mr: "2%",
                                height: "7%",
                                textAlign: "center",
                            }}
                        >
                            {step.price} $
                        </Button>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
