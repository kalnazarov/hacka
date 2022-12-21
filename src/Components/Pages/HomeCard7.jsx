import * as React from "react";
import { Box, Button, CardActionArea, Rating, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export let image3 = [
    {
        img: "https://image.key-drop.gg/game/case/2021-07-14/3-1.png",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "0.70",
        id: "2",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://image.key-drop.gg/game/case/2021-07-14/3-4.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "12.00",
        id: "1",
    },

    {
        img: "https://image.key-drop.gg/game/case/2021-07-14/3-5.png",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
        price: "30.00",
        id: "3",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://image.key-drop.gg/game/case/2021-07-14/3-3.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "5.20",
        id: "4",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://image.key-drop.gg/game/case/2021-07-14/3-2.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "1.80",
        id: "5",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://image.key-drop.gg/game/case/2021-05-27/3-6.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "1.80",
        id: "6",
    },
    {
        img: "https://image.key-drop.gg/game/case/2021-05-27/3-9.png",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "0.70",
        id: "7",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://image.key-drop.gg/game/case/2021-05-27/3-1.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "12.00",
        id: "8",
    },

    {
        img: "https://image.key-drop.gg/game/case/2021-05-27/3-8.png",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
        price: "30.00",
        id: "9",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://image.key-drop.gg/game/case/2021-05-27/3-7.png",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "5.20",
        id: "10",
    },
];

export default function HomeCard7() {
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
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    pt: "50px",
                }}
            >
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
                    GAMES
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
                    flexWrap: "wrap",
                }}
            >
                {image3.map((step, index) => (
                    <Box
                        key={index}
                        sx={{
                            backgroundImage: `url(${step.img})`,
                            backgroundSize: "100%,100%",
                            backgroundRepeat: "no-repeat",
                            width: "17%",
                            height: "fit-content",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "10px",
                            pb: "20px",
                        }}
                    >
                        <Button
                            sx={{
                                backgroundColor: "rgba(220,174,100,0.7)",
                                width: "40%",
                                color: "black",
                                mb: "95%",
                                fontWeight: "800",
                                ml: "5%",
                            }}
                        >
                            New
                        </Button>
                        <Button
                            onClick={() => navigate(`/carusel/${step.id}`)}
                            variant="contained"
                            sx={{
                                backgroundColor: "#1f1e27",
                                width: "50%",

                                color: "white",
                                marginTop: "85%",
                                mb: "15%",
                                fontWeight: "800",
                            }}
                        >
                            Buy
                        </Button>
                        <Button
                            sx={{
                                backgroundColor: "black",
                                width: "50%",
                                color: "rgb(220 ,174, 100,0.7)",

                                mb: "95%",
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
