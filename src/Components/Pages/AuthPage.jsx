import React from "react";
import { useAuth } from "../context/AuthContextProvider";
import Auth from "./Auth";

const AuthPage = () => {
    const {
        user: { email },
    } = useAuth();
    return <div>{<Auth/>}</div>;
};

export default AuthPage;
