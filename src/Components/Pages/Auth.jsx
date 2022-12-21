import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { Alert, IconButton, Input, MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import { fontSize } from "@mui/system";
import { useAuth } from "../context/AuthContextProvider";
export default function Auth() {
    const navigate = useNavigate();
    const {
        email,
        password,
        emailError,
        passwordError,
        hasAccount,
        setPassword,
        setEmail,
        setHasAccount,
        handleLogin,
        handleSignup,
        alert,
        setAlert,
        alerts,
        setAlerts,
    } = useAuth();

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password"),
        });
    };

    return (
        <div
            style={{
                backgroundImage:
                    "url(https://i.pinimg.com/originals/ba/6c/d4/ba6cd45d22f01b59c1c4605c4e6dabab.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
            }}
        >
            <Box
                sx={{
                    pb: "50px",
                    pt: "100px",

                    width: "100%",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Box
                    sx={{
                        width: "30%",
                        height: "650px",
                        backgroundColor: "rgba(02,02,02,0.7)",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: "50px",
                        }}
                    >
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={() => navigate("/")}
                        >
                            <img
                                style={{ width: "100px", height: "100px" }}
                                src="https://www.pngkey.com/png/full/307-3072904_mac-makeup-logo-png-ks-logo-cosmetics.png"
                                alt=""
                            />
                        </IconButton>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: "20px",
                        }}
                    >
                        <Typography
                            sx={{
                                width: "80%",
                                color: "gray",
                                fontFamily: "Brutal, sans-serif",
                                fontWeight: "bold",
                                fontSize: "20px",
                                textAlign: "center",
                            }}
                        >
                            Войдите с помощью учетной записи
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: "40px",
                        }}
                    >
                        <input
                            style={{
                                color: "white",
                                border: "2px solid gray",
                                backgroundColor: "transparent",
                                borderRadius: "10px",
                                width: "60%",
                                height: "50px",
                                textAlign: "center",
                                fontSize: "17px",
                            }}
                            placeholder="Адрес электронной почты"
                            id="email"
                            name="email"
                            autoComplete="email"
                            helperText={emailError}
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                        />
                    </Box>
                    <Box
                        onSubmit={handleSubmit}
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pt: "30px",
                        }}
                    >
                        <input
                            style={{
                                color: "white",
                                border: "2px solid gray",
                                backgroundColor: "transparent",
                                borderRadius: "10px",
                                width: "60%",
                                height: "50px",
                                textAlign: "center",
                                fontSize: "17px",
                            }}
                            required
                            placeholder="Пароль"
                            name="password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            helperText={passwordError}
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            pt: "30px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mt: 1,
                            }}
                        >
                            {" "}
                            <Checkbox
                                value="remember"
                                sx={{ color: "white" }}
                            />
                            <Typography sx={{ fontSize: 14, color: "white" }}>
                                Запомнить меня
                            </Typography>
                        </Box>
                        <Link
                            className="links"
                            sx={{
                                mt: 1,
                                fontSize: 15,
                                color: "white",
                                fontSize: { xs: 14, sm: 16 },
                            }}
                            href="#"
                            variant="body2"
                            // color="white"
                        >
                            Забыли пароль?
                        </Link>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        {hasAccount ? (
                            <Button
                                className="button_sign_in"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    fontWeight: 700,

                                    fontSize: "20px",
                                    width: "30%",
                                    color: "white",
                                    fontFamily: "Brutal, sans-serif",
                                    backgroundColor: "danger",
                                }}
                                onClick={() => {
                                    handleLogin();
                                    setAlert(true);
                                    navigate("/");
                                }}
                            >
                                Sign in
                            </Button>
                        ) : (
                            <Button
                                className="button_register"
                                variant="contained"
                                sx={{
                                    mt: 3,
                                    mb: 2,
                                    fontWeight: 700,
                                    color: "white",
                                    fontSize: "20px",
                                    width: "30%",
                                    backgroundColor: "red",
                                    fontFamily: "Brutal, sans-serif",
                                }}
                                onClick={() => {
                                    handleSignup();
                                    setAlerts(true);
                                    navigate("/");
                                }}
                            >
                                Register
                            </Button>
                        )}
                    </Box>
                    <Grid
                        container
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Grid item>
                            {hasAccount ? (
                                <Link
                                    className="links"
                                    sx={{ color: "white" }}
                                    href="#"
                                    variant="body2"
                                    onClick={() => setHasAccount(!hasAccount)}
                                >
                                    {"Don't have an account? Register now"}
                                </Link>
                            ) : (
                                <Link
                                    className="links"
                                    sx={{ color: "white" }}
                                    href="#"
                                    variant="body2"
                                    onClick={() => setHasAccount(!hasAccount)}
                                >
                                    {"Already have an account? Log In"}
                                </Link>
                            )}
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* <Box className="auth">
                <Container component="main" maxWidth="lg">
                    <CssBaseline />
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <Box
                            sx={{
                                mt: 8,
                                justifyContent: "center",
                                width: { xs: "90%", sm: "70%", md: "45%" },
                                // backgroundColor: "#2a2a2a",
                            }}
                        >
                            <Typography
                                sx={{
                                    fontWeight: 700,
                                    fontSize: "45px",
                                    fontFamily: "Quattrocento Sans",
                                    textAlign: "center",
                                    color: "rgb(47, 12, 12)",
                                }}
                                component="h1"
                                variant="h5"
                            >
                                Sign In
                            </Typography>
                            <Box
                                component="form"
                                onSubmit={handleSubmit}
                                noValidate
                                sx={{ mt: 3 }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: "22px",
                                        fontFamily: "Quattrocento Sans",
                                        color: "rgb(47, 12, 12)",
                                    }}
                                >
                                    Email
                                </Typography>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    autoFocus
                                    helperText={emailError}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />

                                <Box sx={{ mt: 2 }}>
                                    <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: "22px",
                                            fontFamily: "Quattrocento Sans",
                                            color: "rgb(47, 12, 12)",
                                        }}
                                    >
                                        Password
                                    </Typography>
                                    <TextField
                                        required
                                        fullWidth
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        helperText={passwordError}
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                        }}
                                    />
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            mt: 1,
                                        }}
                                    >
                                        {" "}
                                        <Checkbox
                                            value="remember"
                                            color="primary"
                                        />
                                        <Typography sx={{ fontSize: 14 }}>
                                            Remember me
                                        </Typography>
                                    </Box>
                                    <Link
                                        className="links"
                                        sx={{
                                            mt: 1,
                                            fontSize: 15,
                                            color: "black",
                                            fontSize: { xs: 14, sm: 16 },
                                        }}
                                        href="#"
                                        variant="body2"
                                        color="primary"
                                    >
                                        Forgot password?
                                    </Link>
                                </Box>
                                {hasAccount ? (
                                    <Button
                                        className="button_sign_in"
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            fontWeight: 700,
                                            fontFamily: "Quattrocento Sans",
                                            fontSize: "20px",
                                            backgroundColor: "#ffc7ba",
                                        }}
                                        onClick={() => {
                                            handleLogin();
                                            navigate("/");
                                        }}
                                    >
                                        Sign in
                                    </Button>
                                ) : (
                                    <Button
                                        className="button_register"
                                        type="submit"
                                        fullWidth
                                        variant="outlained"
                                        sx={{
                                            mt: 3,
                                            mb: 2,
                                            fontWeight: 700,
                                            fontFamily: "Quattrocento Sans",
                                            fontSize: "20px",
                                            backgroundColor: "#ffc7ba",
                                        }}
                                        onClick={handleSignup}
                                    >
                                        Register
                                    </Button>
                                )}

                                <Grid
                                    container
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Grid item>
                                        {hasAccount ? (
                                            <Link
                                                className="links"
                                                sx={{ color: "black" }}
                                                href="#"
                                                variant="body2"
                                                onClick={() =>
                                                    setHasAccount(!hasAccount)
                                                }
                                            >
                                                {
                                                    "Don't have an account? Register now"
                                                }
                                            </Link>
                                        ) : (
                                            <Link
                                                className="links"
                                                sx={{ color: "black" }}
                                                href="#"
                                                variant="body2"
                                                onClick={() =>
                                                    setHasAccount(!hasAccount)
                                                }
                                            >
                                                {
                                                    "Already have an account? Log In"
                                                }
                                            </Link>
                                        )}
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box> */}
        </div>
    );
}
