import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../context/ChatContextProvaider";
import SendIcon from "@mui/icons-material/Send";
import { useAuth } from "../context/AuthContextProvider";
function AddChat() {
    const { createProduct, getOneProductDetails, deleteProduct } =
        useProducts();

    const navigate = useNavigate();

    const {
        user: { email },
    } = useAuth();
    const [coment, setComent] = useState("");
    function addComent() {
        let obj = {
            coment,
            email,
        };
        createProduct(obj);
        console.log(obj);
    }
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
                sx={{ width: "235px" }}
                onChange={(e) => setComent(e.target.value)}
                type="text"
                label="SMS"
                id="outlined-size-small"
                size="small"
            />

            <SendIcon
                sx={{ pl: "5px" }}
                onClick={() => {
                    addComent();
                }}
            />
        </Box>
    );
}

export default AddChat;
