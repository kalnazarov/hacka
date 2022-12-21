import * as React from "react";
import { Box, Button, CardActionArea, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export let image3 = [
    {
        img: "https://key-drop.gg/uploads/skins/vest.jpg",
        name: "Space",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "0.70",
        id: "2",
    },
    {
        name: "Focus",
        img: "https://key-drop.gg/uploads/skins/serpent.jpg",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "12.00",
        id: "1",
    },

    {
        img: "https://key-drop.gg/uploads/skins/arrow.jpg",
        name: "Fang",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
        price: "30.00",
        id: "3",
    },
    {
        name: "Cobra",
        img: "https://key-drop.gg/uploads/skins/lore.jpg",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "5.20",
        id: "4",
    },
    {
        name: "Royal",
        img: "https://key-drop.gg/uploads/skins/vice.jpg",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "1.80",
        id: "5",
    },
    {
        name: "Thunder",
        img: "https://key-drop.gg/uploads/skins/bloodshot.jpg",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "1.80",
        id: "6",
    },
];

export default function HomeCard6() {
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
                    CS:GO PREMIUM
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
                {image3.map((step, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundImage: `url(${step.img})`,
                            backgroundSize: "100%,100%",
                            backgroundRepeat: "no-repeat",
                            width: "15%",
                            height: "100%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "rgba(220,174,100)",
                                width: "40%",
                                color: "black",
                                mb: "110%",
                                fontWeight: "800",
                                ml: "5%",
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

                                color: "white",
                                marginTop: "75%",
                                mb: "5%",
                                fontWeight: "800",
                            }}
                        >
                            {step.name}
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: "black",
                                width: "50%",
                                color: "rgb(220 ,174, 100)",

                                mb: "110%",
                                fontWeight: "800",
                                mr: "5%",
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
