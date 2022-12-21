import { Chat, Home } from "@mui/icons-material";
import { Alert, Box } from "@mui/material";
import React from "react";
import HomeCard2 from "./HomeCard2";
import HomeCard from "./HomeCard";
import HomeCard3 from "./HomeCard3";
import { useAuth } from "../context/AuthContextProvider";
import Chattt from "./Chattt";
import HomeCard4 from "./HomeCard4";
import HomeCard5 from "./HomeCard5";
import HomeCard6 from "./HomeCard6";
import HomeCard7 from "./HomeCard7";
const HomePage = () => {
    const { alert, setAlert } = useAuth();
    const { alerts, setAlerts } = useAuth();

    function closeAlert() {
        setAlert(false);
    }
    setTimeout(closeAlert, 9000);

    function closeAlerts() {
        setAlerts(false);
    }
    setTimeout(closeAlerts, 9000);

    return (
        <Box sx={{ backgroundColor: "#1f1e27", pt: "50px" }}>
            {alert && (
                <Alert sx={{ mt: "15px" }} severity="success">
                    Вы Успешно Авторизировались!
                </Alert>
            )}
            {alerts && (
                <Alert sx={{ mt: "15px" }} severity="success">
                    Вы Успешно Зарегистрировались!
                </Alert>
            )}

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "-3",
                }}
            >
                <Box
                    sx={{
                        backgroundImage: `url(${"https://key-drop.gg/web/KD/static/images/xmas-event-2022/home/home-bg.png"})`,
                        width: "95%",
                        height: "100%",
                        backgroundSize: "100%",
                        backgroundRepeat: "no-repeat",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box>
                        <img
                            style={{
                                width: "100%",
                                height: "561px",
                                transform: "scaleX(-1)",
                                transform: "scaleX(-1)",
                            }}
                            src="https://key-drop.gg/web/KD/static/images/xmas-event-2022/home/home-right.png"
                            alt=""
                        />
                    </Box>
                    <Box sx={{ pl: "50px", pr: "50px" }}>
                        <img
                            style={{ width: "100%", height: "258px" }}
                            src=" https://key-drop.gg/web/KD/static/images/xmas-event-2022/home/home-title.png"
                            alt=""
                        />
                    </Box>

                    <Box>
                        <img
                            style={{
                                width: "100%",
                                height: "561px",
                            }}
                            src=" https://key-drop.gg/web/KD/static/images/xmas-event-2022/home/home-right.png"
                            alt=""
                        />
                    </Box>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                }}
            >
                <HomeCard />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                }}
            >
                <HomeCard2 />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                }}
            >
                <HomeCard3 />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                }}
            >
                <HomeCard4 />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                }}
            >
                <HomeCard5 />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                }}
            >
                <HomeCard6 />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    zIndex: "1",
                }}
            >
                <HomeCard7 />
            </Box>
            <Chattt />
        </Box>
    );
};

export default HomePage;
