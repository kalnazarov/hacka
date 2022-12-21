import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Button, Grid, Menu, MenuItem } from "@mui/material";
// import Badge from "@mui/material/Badge";
import { AccountCircle } from "@mui/icons-material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { useCart } from "../context/CartContextProvaider";
import { useAuth } from "../context/AuthContextProvider";
import { ADMIN } from "../helpers/const";
import { getCountProductsInCart } from "../helpers/functions";
import { navbarContext } from "../context/HeaderContext";

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),

        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: "12ch",
            "&:focus": {
                width: "20ch",
            },
        },
    },
}));

export default function Navbar() {
    const { searchState, setSearchState } = React.useContext(navbarContext);

    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = React.useState(searchParams.get("q") || "");

    React.useEffect(() => {
        setSearchParams({
            q: search,
        });
    }, [search]);

    const openSearch = () => {
        setSearchState(!searchState);
    };

    const { addProductToCart } = useCart();
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        setCount(getCountProductsInCart);
    }, [addProductToCart]);
    const {
        user: { email },
        handleLogout,
    } = useAuth();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: "#111114", width: "100%" }}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>

                    <Box
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={() => navigate("/")}
                    >
                        <img
                            style={{ width: "50px", height: "50px" }}
                            src="https://www.pngkey.com/png/full/307-3072904_mac-makeup-logo-png-ks-logo-cosmetics.png"
                            alt=""
                        />
                    </Box>

                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                    >
                        <Box display={"flex"}>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    onClick={() => navigate("/")}
                                >
                                    Главная
                                </Typography>
                            </MenuItem>
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography
                                    textAlign="center"
                                    onClick={() => navigate("/products")}
                                >
                                    Скины
                                </Typography>
                            </MenuItem>

                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "none", md: "flex" },
                                }}
                            >
                                {email === ADMIN ? (
                                    <Button
                                        onClick={() => navigate("/admin")}
                                        sx={{ textAlign: "center" }}
                                        color="inherit"
                                    >
                                        Добавить игру
                                    </Button>
                                ) : (
                                    <></>
                                )}
                            </Box>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Search>
                                <SearchIconWrapper>
                                    <SearchIcon onClick={openSearch} />
                                </SearchIconWrapper>
                                <StyledInputBase
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    placeholder="Search…"
                                    inputProps={{ "aria-label": "search" }}
                                    // sx={{ cursor: " pointer" }}
                                    // position="start"
                                    onClick={() => setSearchState(false)}
                                />
                            </Search>
                            <IconButton>
                                <Badge badgeContent={count} color="primary">
                                    <ShoppingCartCheckoutIcon
                                        sx={{ color: "white" }}
                                        onClick={() => navigate("/cart")}
                                    />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            ></IconButton>
                        </Box>
                    </Box>

                    <Grid>
                        {email ? (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2, display: "flex" }}
                                onClick={() => navigate("/")}
                            >
                                <img
                                    style={{
                                        width: "40px",
                                        height: "20px",
                                        paddingRight: "10px",
                                    }}
                                    src="https://img.icons8.com/emoji/512/green-circle-emoji.png"
                                    alt=""
                                />
                                <Typography onClick={handleMenu}>
                                    {email}
                                </Typography>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                >
                                    <MenuItem onClick={handleClose}></MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        My account
                                    </MenuItem>
                                    <MenuItem onClick={handleLogout}>
                                        <Typography>Logout</Typography>
                                    </MenuItem>
                                </Menu>
                            </IconButton>
                        ) : (
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2, display: "none" }}
                                // onClick={() => navigate("/")}
                            ></IconButton>
                        )}
                    </Grid>
                    {/* <AdminIcon /> */}

                    <Box sx={{ flexGrow: 0 }}>
                        {email ? (
                            // <MenuItem onClick={handleLogout}>
                            //     <Typography
                            //         sx={{
                            //             textAlign: "center",
                            //             color: "white",
                            //             fontWeight: "bold",
                            //             textShadow: "black",
                            //             display: "none",
                            //         }}
                            //     >
                            //         Logout
                            //     </Typography>
                            //     <AccountCircle
                            //         sx={{ color: "white", paddingLeft: "10px" }}
                            //     />
                            // </MenuItem>
                            <></>
                        ) : (
                            <Link
                                to="/auth"
                                style={{
                                    textDecoration: "none ",
                                    color: "black",
                                }}
                            >
                                <MenuItem onClick={handleLogout}>
                                    <Typography
                                        sx={{
                                            textAlign: "center",
                                            color: "white",
                                            fontWeight: "bold",
                                        }}
                                    >
                                        Login
                                    </Typography>
                                </MenuItem>
                            </Link>
                        )}
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
