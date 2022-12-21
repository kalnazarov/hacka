import * as React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import DeleteSweepIcon from "@mui/icons-material/DeleteSweep";
import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
} from "@mui/material";
import AddChat from "./AddChat";
import { useProducts } from "../context/ChatContextProvaider";
import { useAuth } from "../context/AuthContextProvider";

export default function Chattt() {
    const {
        user: { email },
    } = useAuth();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    // const
    const { getProducts, products, deleteProduct } = useProducts();
    // console.log(product?.title);
    // console.log(product);
    React.useEffect(() => {
        getProducts();
    }, []);
    let admins = "sultan4ik2003@mail.ru";
    console.log(email);
    return (
        <div style={{ position: "fixed", top: "45%" }}>
            <ChatIcon
                sx={{
                    width: "70px",
                    height: "70px",
                    color: "white",
                    borderRadius: "50%",
                    p: "10px",
                    ml: "50px",
                    backgroundColor: "rgb(02,02,02,0.5)",
                }}
                onClick={handleOpen}
            >
                Open modal
            </ChatIcon>
            <Modal
                sx={{
                    backgroundImage:
                        "url(https://i.pinimg.com/originals/da/f9/f7/daf9f7275e72709fc146f6da8bd742dd.png)",
                    backgroundSize: "500px 725px",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
                open={open}
                onClose={handleClose}
            >
                <Box
                    sx={{
                        width: "282px",
                        height: "535px",
                        backgroundColor: "white",
                        mr: "85px",
                        mb: "130px",
                        borderRadius: "10px, 10px",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "black",
                            pt: "10px",
                            pb: "10px",
                        }}
                    >
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                            }}
                            src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Fbbdf1eb714761000%2F10-1_8822al.png&width=240&height=240&1670150759308"
                            alt=""
                        />
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                            }}
                            src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2F3581bf4bcdb45400%2F4-3_7wthx.png&width=240&height=240&1670150759308"
                            alt=""
                        />
                        <img
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                            }}
                            src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Fe6fe3b6f7495e000%2F6-3_z7383j.png&width=240&height=240&1670150759308"
                            alt=""
                        />
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "black",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "13px",
                                color: "white",
                                fontWeight: "bold",
                            }}
                        >
                            We are here to help you!
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "black",
                            pb: "10px",
                        }}
                    >
                        <img
                            style={{ width: "15px", height: "15px" }}
                            src="https://img.icons8.com/emoji/512/green-circle-emoji.png"
                            alt=""
                        />
                        <Typography
                            sx={{
                                fontSize: "13px",
                                color: "gray",
                                fontFamily: "sans-serif",
                            }}
                        >
                            Поддержка сейчас онлайн
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-start",
                        }}
                    ></Box>

                    <Box
                        sx={{
                            overflow: "auto",
                            height: "300px",
                        }}
                    >
                        {products?.map((item) => {
                            return item.email == admins ? (
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        // justifyContent: "flex-start",
                                    }}
                                >
                                    <img
                                        style={{
                                            width: "40px",
                                            height: "40px",
                                            borderRadius: "50%",
                                        }}
                                        src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2Fbbdf1eb714761000%2F10-1_8822al.png&width=240&height=240&1670150759308"
                                        alt=""
                                    />

                                    <Box sx={{ pl: "10px" }}>
                                        <Typography
                                            sx={{
                                                color: "gray",
                                                fontSize: "12px",
                                                pt: "5px",
                                                width: "200px",
                                            }}
                                        >
                                            {item.email}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                color: "white",
                                                backgroundColor:
                                                    "rgb(02,02,02,0.5)",
                                                borderRadius: "10px",
                                                fontSize: "15px",
                                                pl: "5px",
                                                pr: "5px",
                                            }}
                                        >
                                            {item.coment}
                                        </Typography>
                                    </Box>
                                    <DeleteSweepIcon
                                        sx={{ color: "green", pl: "5px" }}
                                        onClick={() => {
                                            deleteProduct(item.id);
                                            // navigate("/products");
                                        }}
                                        variant="primary"
                                        type="button"
                                    />
                                </Box>
                            ) : (
                                <>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                        }}
                                        key={item.id}
                                    >
                                        <DeleteSweepIcon
                                            sx={{ color: "green" }}
                                            onClick={() => {
                                                deleteProduct(item.id);
                                                // navigate("/products");
                                            }}
                                            variant="primary"
                                            type="button"
                                        />

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "flex-end",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    ml: "5px",
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    alignItems: "end",
                                                }}
                                            >
                                                <Typography
                                                    sx={{
                                                        color: "gray",
                                                        fontSize: "12px",
                                                        pt: "5px",
                                                    }}
                                                >
                                                    {email}
                                                </Typography>
                                                <Typography
                                                    sx={{
                                                        color: "white",
                                                        backgroundColor:
                                                            "whitesmoke",
                                                        color: "black",
                                                        borderRadius: "10px",
                                                        fontSize: "15px",
                                                        pl: "5px",
                                                        pr: "5px",
                                                        wordBreak: "break-all",
                                                    }}
                                                >
                                                    {item.coment}
                                                </Typography>
                                            </Box>
                                            <img
                                                style={{
                                                    width: "40px",
                                                    height: "40px",
                                                    borderRadius: "50%",
                                                }}
                                                src="https://image.crisp.chat/process/thumbnail/?url=https%3A%2F%2Fstorage.crisp.chat%2Fusers%2Favatar%2Foperator%2F3581bf4bcdb45400%2F4-3_7wthx.png&width=240&height=240&1670150759308"
                                                alt=""
                                            />
                                        </Box>
                                    </Box>
                                </>
                            );
                        })}
                    </Box>
                    <Box sx={{ position: "fixed", top: "68%", right: "45%" }}>
                        <AddChat />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
