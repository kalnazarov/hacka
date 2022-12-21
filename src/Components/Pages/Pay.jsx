import * as React from "react";
import {
    Box,
    Button,
    CardActionArea,
    Rating,
    TextField,
    Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export let image3 = [
    {
        img: "https://key-drop.gg/uploads/payment/methods/PaybySkins1.png?v51",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "0.70",
        id: "2",
    },
    {
        name: "https://key-drop.gg/uploads/payment/methods/Skrill.png?v51",
        img: "https://key-drop.gg/uploads/payment/methods/Skrill.png?v51",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "12.00",
        id: "1",
    },

    {
        img: "https://key-drop.gg/uploads/payment/methods/VISA_MASTER_AMERICAN.png?v51",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "Бесплатно",
        price: "30.00",
        id: "3",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://key-drop.gg/uploads/payment/methods/Visa_Master_alone.png?v51",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "5.20",
        id: "4",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://key-drop.gg/uploads/payment/methods/sofort.png?v51",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "1.80",
        id: "5",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://key-drop.gg/uploads/payment/methods/Crypto11.png?v51",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "1.80",
        id: "6",
    },
    {
        img: "https://key-drop.gg/uploads/payment/methods/Group_14775.png?v51",
        name: "Rumbleverse - Новый сезон",
        decription:
            "Второй сезон Rumbleverse уже вышел! Сражайтесь с друзьями на новом острове, в новых временных режимах и c совершенно новым боевым пропуском!",
        price: "0.70",
        id: "7",
    },
    {
        name: "Рыцари Готэма - Уже доступно",
        img: "https://key-drop.gg/uploads/payment/methods/Giftcards11.png?v51",
        decription:
            "Бэтмен мёртв. Растущий с невероятной скоростью преступный мир захлестнул улицы Готэм-Сити. Теперь дело за семьёй Бэтмена.",
        price: "12.00",
        id: "8",
    },
];

export default function Pay() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                backgroundColor: "black",

                // justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                pt: "70px",
                pb: "50px",
            }}
        >
            <Box
                sx={{
                    width: "90%",
                    heidth: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    pt: "50px",
                    flexWrap: "wrap",
                }}
            >
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr 1fr 1fr",
                        gridGap: "10px",
                        width: "65%",
                    }}
                >
                    {image3.map((step, index) => (
                        <Box
                            sx={{
                                backgroundColor: "#1f1e27",
                                display: "flex",
                                alignItems: "center",
                                borderRadius: "5%",
                            }}
                            key={index}
                        >
                            <img src={step.img} alt="" />
                        </Box>
                    ))}
                </Box>
                <Box
                    sx={{
                        width: "500px",
                        height: "500px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                    }}
                >
                    <Box
                        sx={{
                            width: "480px",
                            height: "245px",
                            backgroundColor: "#1f1e27",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start",
                            borderRadius: "5%",
                        }}
                    >
                        <Box
                            sx={{
                                backgroundColor: "gray",
                                display: "flex",
                                height: "150px",
                                width: "450px",
                                justifyContent: "space-between",
                                borderRadius: "10px",
                                mt: "15px",

                                // alignItems: "center",
                            }}
                        >
                            <Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box sx={{ pl: "20px" }}>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "20px",
                                            }}
                                        >
                                            What is a promotional code?
                                        </Typography>
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                color: "black",
                                                fontSize: "14px",
                                                fontWeight: "bold",
                                            }}
                                        >
                                            Enter promo code and{" "}
                                            <span
                                                style={{
                                                    color: "green",
                                                    fontWeight: "bold",
                                                }}
                                            >
                                                Activate 10% bonus.
                                            </span>
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <img
                                            style={{
                                                width: "250px",
                                                height: "150px",
                                            }}
                                            src="https://key-drop.gg/web/KD/static/images//payment-modal/grampa.png?v51"
                                            alt=""
                                        />
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        pt: "15px",
                                    }}
                                >
                                    <input
                                        style={{
                                            width: "350px",
                                            height: "50px",
                                            borderRadius: "10px",
                                            backgroundColor: "rgb(17 ,17, 20)",
                                            color: "gray",
                                            border: "none",
                                        }}
                                        placeholder="Enter the promo code"
                                    />
                                    <Button
                                        sx={{
                                            backgroundColor: "rgb(30, 62, 37)",
                                            border: "2px solid rgb(119, 255, 157)",

                                            color: "rgb(168, 255 ,166)",
                                            ml: "5px",
                                            width: "100px",
                                        }}
                                    >
                                        Отмена
                                    </Button>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: "480px",
                            mt: "15px",
                            height: "245px",
                            backgroundColor: "#1f1e27",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "start",
                            borderRadius: "5%",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h3"
                                    sx={{
                                        mt: "10px",
                                        color: "green",
                                        backgroundColor: "rgb(30, 62, 37)",
                                        fontWeight: "bold",
                                        borderRadius: "10px",
                                        p: "5px",
                                    }}
                                >
                                    Paypal
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    pt: "15px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <input
                                    style={{
                                        width: "400px",
                                        height: "50px",
                                        borderRadius: "10px",
                                        backgroundColor: "rgb(17 ,17, 20)",
                                        color: "gray",
                                        border: "none",
                                        mt: "10px",
                                    }}
                                    placeholder="Ведите сумму"
                                />
                                <Button
                                    sx={{
                                        width: "400px",
                                        height: "50px",
                                        borderRadius: "10px",
                                        backgroundColor: "white",
                                        color: "black",
                                        border: "none",
                                        mt: "0px",
                                    }}
                                >
                                    {" "}
                                    Оплатить
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}
