import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContextProvider";
import { ADMIN } from "../helpers/const";
import AdminPage from "../Pages/AdminPage";
import AuthPage from "../Pages/AuthPage";
import CartPage from "../Pages/CartPage";
import EditProductPage from "../Pages/EditProductPage";
import HomePage from "../Pages/HomePage";
import PayPage from "../Pages/PayPage";
import ProductCarusPage from "../Pages/ProductCarusPage";
import ProductDetailsPage from "../Pages/ProductsDetailsPage";
import ProductsPage from "../Pages/ProductsPage";

const MainRoutes = () => {
    const { user } = useAuth();
    const PUBLIC_ROUTES = [
        { id: 1, link: "/", element: <HomePage /> },
        { id: 6, link: "/auth", element: <AuthPage /> },
        { id: 3, link: "/products", element: <ProductsPage /> },

        { id: 4, link: "/products/:id", element: <ProductDetailsPage /> },
        { id: 5, link: "/carusel/:id", element: <ProductCarusPage /> },
        { link: "/cart", element: <CartPage />, id: 10 },
        { id: 3, link: "/pay", element: <PayPage /> },

        { id: 7, link: "*", element: <h1>NOT FOUND</h1> },
    ];

    const PRIVATE_ROUTES = [
        { link: "/edit/:id", element: <EditProductPage />, id: 7 },
        { link: "/admin", element: <AdminPage />, id: 3 },
    ];

    return (
        <>
            <Routes>
                {PUBLIC_ROUTES.map((item) => (
                    <Route
                        key={item.id}
                        path={item.link}
                        element={item.element}
                    />
                ))}
                {user
                    ? PRIVATE_ROUTES.map((item) => (
                          <Route
                              key={item.id}
                              path={item.link}
                              element={
                                  user.email === ADMIN ? (
                                      item.element
                                  ) : (
                                      <Navigate replace to="*" />
                                  )
                              }
                          />
                      ))
                    : null}
            </Routes>
        </>
    );
};

export default MainRoutes;
