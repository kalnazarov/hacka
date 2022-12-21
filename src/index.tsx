import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import ProductContextProvider from "./Components/context/ProductContextProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthContextProvider from "./Components/context/AuthContextProvider";
import HeaderContext from "./Components/context/HeaderContext";
import CartContextProvider from "./Components/context/CartContextProvaider";
import ProductContextProvider from "./Components/context/ProductContextProvider";
import ChatContextProvider from "./Components/context/ChatContextProvaider";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <BrowserRouter>
        <ChatContextProvider>
            <CartContextProvider>
                <HeaderContext>
                    <AuthContextProvider>
                        <ProductContextProvider>
                            <App />
                        </ProductContextProvider>
                    </AuthContextProvider>
                </HeaderContext>
            </CartContextProvider>
        </ChatContextProvider>
    </BrowserRouter>
);
