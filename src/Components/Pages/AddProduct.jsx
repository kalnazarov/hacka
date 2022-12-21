// import { useState } from "react";
// import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import { useNavigate } from "react-router-dom";
// import { useProducts } from "../context/ProductContextProvider";

// function AddProduct() {
//     const { createProduct } = useProducts();

//     const navigate = useNavigate();
//     const [product, setProduct] = useState({
//         title: "",
//         description: "",
//         price: 0,
//         image: "",
//         category: "",
//     });

//     const handleInp = (e) => {
//         if (e.target.name == "price") {
//             let obj = { ...product, [e.target.name]: Number(e.target.value) };
//             setProduct(obj);
//         } else {
//             let obj = { ...product, [e.target.name]: e.target.value };
//             setProduct(obj);
//         }
//     };

//     console.log(product);

//     return (
//         <Form className="w-50 m-auto">
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Product Title</Form.Label>
//                 <Form.Control
//                     onChange={handleInp}
//                     type="text"
//                     name="title"
//                     placeholder="Enter product title"
//                 />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//                 <Form.Label>Price</Form.Label>
//                 <Form.Control
//                     onChange={handleInp}
//                     type="number"
//                     name="price"
//                     placeholder="title price"
//                 />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Product Description</Form.Label>
//                 <Form.Control
//                     onChange={handleInp}
//                     type="text"
//                     name="description"
//                     placeholder="Enter product description"
//                 />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Product Category</Form.Label>
//                 <Form.Control
//                     onChange={handleInp}
//                     type="text"
//                     name="category"
//                     placeholder="Enter product category"
//                 />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicEmail">
//                 <Form.Label>Product Image</Form.Label>
//                 <Form.Control
//                     onChange={handleInp}
//                     type="text"
//                     name="image"
//                     placeholder="Enter product image url"
//                 />
//             </Form.Group>

//             <Button
//                 onClick={() => {
//                     createProduct(product);
//                     navigate("/products");
//                 }}
//                 variant="primary"
//                 type="button"
//             >
//                 ADD product
//             </Button>
//         </Form>
//     );
// }

// export default AddProduct;

import {
    Box,
    Button,
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ProductContextProvider";
const AddProduct = () => {
    const { addProduct } = useProducts();
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 0,
        picture: "",
        type: "",
    });

    const handleInp = (e) => {
        if (e.target.name === "price") {
            let obj = { ...product, [e.target.name]: Number(e.target.value) };
            setProduct(obj);
        } else {
            let obj = { ...product, [e.target.name]: e.target.value };
            setProduct(obj);
        }
    };
    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 425,
                sm: 750,
                md: 960,
                lg: 1200,
                xl: 1536,
            },
        },
    });

    return (
        <Box
            align="center"
            sx={{
                backgroundImage: `url(${"https://mobimg.b-cdn.net/v3/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg"})`,

                backgroundSize: "100%",
                height: "70vh",
                display: "flex",
                marginBottom: "0px",
                flexDirection: "column",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                    width: "100%",
                    backgroundImage: "none",
                },
                [theme.breakpoints.down("md")]: {
                    height: "54vh",
                },
                pt: "50px",
            }}
        >
            <Typography
                sx={{
                    color: "white",
                    fontSize: "30px",
                    [theme.breakpoints.down("sm")]: {
                        color: "black",
                        fontSize: "24px",
                    },
                }}
            >
                ADD PRODUCT PANEL
            </Typography>
            <Box
                sx={{
                    width: "60vw",
                    margin: "3vh auto 10vh",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr ",
                    gridGap: "10px",
                    [theme.breakpoints.down("sm")]: {
                        width: "80%",
                    },
                }}
            >
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "white",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Name"
                    variant="outlined"
                    name="name"
                    size="small"
                />

                <FormControl
                    fullWidth
                    sx={{ backgroundColor: "white", borderRadius: "4px" }}
                >
                    <InputLabel
                        sx={{
                            fontSize: "18px",
                            color: "black",
                        }}
                        htmlFor="outlined-adornment-amount"
                    ></InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-amount"
                        onChange={handleInp}
                        placeholder="Price"
                        variant="outlined"
                        name="price"
                        size="small"
                        type="number"
                        startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                        }
                    />
                </FormControl>
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        gridColumn: "1/3",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Description"
                    variant="outlined"
                    name="description"
                    size="small"
                />

                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Picture"
                    variant="outlined"
                    name="picture"
                    size="small"
                />
                <TextField
                    onChange={handleInp}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "white",
                        borderRadius: "4px",
                    }}
                    fullWidth
                    label="Type"
                    variant="outlined"
                    name="type"
                    size="small"
                />

                <Button
                    onClick={() => {
                        addProduct(product);
                        navigate("/products");
                    }}
                    sx={{
                        borderColor: "black",
                        backgroundColor: "#0B1F4F",
                        color: "white",
                        transition: "1000s",
                        gridColumn: "1/3",
                    }}
                    variant="outlined"
                    fullWidth
                    size="large"
                >
                    ADD PRODUCT
                </Button>
            </Box>
        </Box>
    );
};

export default AddProduct;
