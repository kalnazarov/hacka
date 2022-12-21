import * as React from "react";
import { Box, Button, CardActionArea, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

let image = [
    {
        img: "https://key-drop.gg/uploads/skins/COOKIE_MAN1.png",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "0.70",
        id: "2",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://key-drop.gg/uploads/skins/GIFTREE11.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "12.00",
        id: "1",
    },

    {
        img: "https://key-drop.gg/uploads/skins/SURPRISE11.png",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
        price: "30.00",
        id: "3",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://key-drop.gg/uploads/skins/SNOWFLY1.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "5.20",
        id: "4",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://key-drop.gg/uploads/skins/TORPEDO3.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "1.80",
        id: "5",
    },
];

export default function HomeCard() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "90%",
                heidth: "100%",
                display: "flex",
                justifyContent: "space-between",
                // pb: "500px",
            }}
        >
            {image.map((step, index) => (
                <Box
                    key={index}
                    sx={{
                        backgroundImage: `url(${step.img})`,
                        backgroundSize: "100%,100%",
                        backgroundRepeat: "no-repeat",
                        width: "19%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* <Button
                        sx={{
                            backgroundColor: "white",
                            width: "30%",
                            color: "black",
                            marginTop: "10%",
                            mb: "90%",
                            fontWeight: "800",
                            // ml: "10%",
                            mr: "5%",
                            height: "10%",
                        }}
                    >
                        Новое
                    </Button> */}
                    <Button
                        variant="contained"
                        sx={{
                            backgroundColor: "#1f1e27",
                            width: "30%",

                            color: "white",
                            marginTop: "85%",
                            mb: "15%",
                            fontWeight: "800",
                            display: "none",
                        }}
                        onClick={() => navigate("/carusel")}
                    >
                        Buy
                    </Button>
                    <Button
                        sx={{
                            backgroundColor: "black",
                            width: "30%",
                            color: "rgb(220 ,174, 100)",
                            marginTop: "10%",
                            mb: "90%",
                            fontWeight: "800",
                            ml: "50%",
                            height: "7%",
                            textAlign: "center",
                        }}
                    >
                        {step.price} $
                    </Button>
                </Box>
            ))}
        </Box>
    );
}
