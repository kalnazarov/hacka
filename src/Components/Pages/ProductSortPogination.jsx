import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Divider,
    createTheme,
    ThemeProvider,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import ProductSort from "./ProductSort";
import axios from "axios";
import { JSON_API_PRODUCTS } from "../helpers/const";

const theme = createTheme({
    palette: {
        primary: {
            main: "#000",
            contrastText: "#EEE",
        },
    },
});

const ProductSortPagination = ({ page, setPage, count }) => {
    const [sort, setSort] = React.useState("");

    const [productCount, setProductCount] = useState([]);

    async function productQuantity() {
        const { data } = await axios.get(JSON_API_PRODUCTS);
        setProductCount(data);
    }

    useEffect(() => {
        productQuantity();
    }, []);

    const handleSort = (event) => {
        setSort(event.target.value);
    };

    const handleChange = (e, p) => {
        setPage(p);
    };
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Box
                    sx={{
                        width: "100%",
                        display: {
                            xs: "block",
                            sm: "block",
                            md: "flex",
                            lg: "flex",
                            xl: "flex",
                        },
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingBottom: "3%",
                        pt: "100px",
                        color: "white",
                    }}
                >
                    <Box
                        sx={{
                            width: {
                                xs: "10%",
                                sm: "10%",
                                md: "30%",
                                lg: "30%",
                                xl: "30%",
                            },
                            height: "30px",
                            margin: {
                                xs: "0%",
                                sm: "3%",
                                md: "0",
                                lg: "0",
                                xl: "0",
                            },
                        }}
                    >
                        <ProductSort />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            margin: {
                                xs: "9%",
                                sm: "10%",
                                md: "0",
                                lg: "0%",
                                xl: "0",
                            },
                        }}
                    >
                        <Typography sx={{ fontWeight: "800", color: "gray" }}>
                            {productCount.length} Games
                        </Typography>
                        <Divider
                            sx={{ marginLeft: "12px" }}
                            orientation="vertical"
                            flexItem
                        ></Divider>
                        <Stack
                            spacing={2}
                            sx={{
                                marginRight: 5,
                                backgroundColor: "gray",
                                borderRadius: "5px",
                            }}
                        >
                            <Pagination
                                sx={{}}
                                page={page}
                                onChange={handleChange}
                                count={count}
                                color="primary"
                                size="small"
                            />
                        </Stack>
                    </Box>
                </Box>
            </ThemeProvider>
        </div>
    );
};

export default ProductSortPagination;
