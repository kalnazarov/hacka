import * as React from "react";
import { Button, Grid, Typography } from "@mui/material";
import { borderBottom, Box, fontSize } from "@mui/system";
import BoltSharpIcon from "@mui/icons-material/BoltSharp";
import { getCountProductsInCart } from "../helpers/functions";
import { useCart } from "../context/CartContextProvaider";
export default function Cart() {
    const { getCart, cart, deleteCartProduct, addProductToCart } = useCart();
    const [count, setCount] = React.useState(0);
    React.useEffect(() => {
        setCount(getCountProductsInCart);
    }, [addProductToCart]);

    React.useEffect(() => {
        getCart();
    }, []);

    const cartCleaner = () => {
        localStorage.removeItem("cart");
        getCart();
    };

    return (
        <Box sx={{ width: "80%", pt: "150px", pb: "400px", color: "white" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h3" sx={{ color: "white", pt: "25px" }}>
                    Инвентарь ({count})
                </Typography>
                <Box sx={{ width: "27%", borderBottom: "2px solid gray" }}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",

                            pb: "20px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "18px",
                            }}
                        >
                            Промежуточный итог
                        </Typography>

                        <Typography
                            sx={{
                                fontFamily: "Inter,sans-serif",
                                fontWeight: "300",

                                fontSize: "16px",
                                color: "white",
                                borderBottom: "2px solid green",
                            }}
                        >
                            {cart.totalPrice}$
                        </Typography>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            pb: "20px",
                        }}
                    >
                        <Button
                            sx={{
                                color: "white",
                                backgroundColor: "green",
                                width: "300px",
                                height: "50px",
                            }}
                        >
                            Оформить заказ
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box>
                {cart.products.map((row, i) => (
                    <Box
                        key={i}
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            pt: "20px",
                        }}
                    >
                        <Box
                            className="EBANNYI__MARJIN"
                            sx={{
                                width: "60%",
                                backgroundColor: "rgb(32, 32, 32)",
                                height: "200px",
                                display: "flex",
                            }}
                        >
                            <Box
                                sx={{
                                    width: "18%",
                                    height: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    pl: "3px",
                                }}
                            >
                                <img
                                    style={{ width: "90%", height: "90%" }}
                                    src={row.item.picture}
                                    alt="noe"
                                />
                            </Box>
                            <Box sx={{ width: "80%", pl: "10px" }}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        pt: "11px",
                                    }}
                                >
                                    <Button
                                        sx={{
                                            color: "rgb(245, 245, 245)",
                                            backgroundColor:
                                                "rgba(255, 255, 255, 0.1)",
                                            width: "115px",
                                            height: "25px",
                                            fontSize: "11px",
                                        }}
                                    >
                                        Базовая игра
                                    </Button>
                                    <Typography
                                        sx={{ pr: "10px", color: "gray" }}
                                    >
                                        ${row.item.price}
                                    </Typography>
                                </Box>
                                <Typography sx={{ pt: "10px" }} variant="h5">
                                    {row.item.name}
                                </Typography>
                                <Typography sx={{ pt: "10px", color: "gray" }}>
                                    Epic Games
                                </Typography>
                                <Box sx={{ display: "flex", pt: "50px" }}>
                                    <Box sx={{ width: "40%" }}>
                                        <BoltSharpIcon sx={{ color: "gray" }} />
                                    </Box>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            width: "75%",
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: "gray",
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            Бесконечная игра не доводит до
                                            добра.
                                        </Typography>
                                        <Button
                                            onClick={() =>
                                                deleteCartProduct(row.item.id)
                                            }
                                            sx={{ color: "white" }}
                                        >
                                            Удалить
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                width: "25%",
                                backgroundColor: "rgb(32, 32, 32,0.7)",
                                p: "15px",
                                color: "gray",
                            }}
                        >
                            <Typography
                                // variant="h4"
                                sx={{
                                    fontFamily: "Inter,sans-serif",
                                    fontWeight: "300",
                                    fontSize: "36px",
                                    lineHeight: "35px",
                                }}
                            >
                                Все игры и приложения
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pt: "6px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Inter,sans-serif",
                                        fontWeight: "300",
                                        fontSize: "18px",
                                    }}
                                >
                                    Цена
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Inter,sans-serif",
                                        fontWeight: "bold",
                                        fontSize: "18px",
                                    }}
                                >
                                    {row.item.price}$
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pt: "6px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Inter,sans-serif",
                                        fontWeight: "300",
                                        fontSize: "18px",
                                    }}
                                >
                                    Налоги
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Inter,sans-serif",
                                        fontWeight: "300",

                                        fontSize: "16px",
                                        color: "gray",
                                    }}
                                >
                                    Расчёт при оформлении заказа
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    pt: "6px",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontFamily: "Inter,sans-serif",
                                        fontWeight: "300",
                                        fontSize: "18px",
                                    }}
                                >
                                    Скидка
                                </Typography>
                                <Typography
                                    sx={{
                                        fontFamily: "Inter,sans-serif",
                                        fontWeight: "300",

                                        fontSize: "16px",
                                        color: "gray",
                                    }}
                                >
                                    none
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>

        // <table>
        //     <tbody>
        //         <tr className=" cart-desktop tr-head">
        //             <th className=" item" align="left">
        //                 ITEM
        //             </th>
        //             <th className=" headqty">QTY</th>
        //             <th align=" center">ITEM PRICE</th>
        //             <th align=" right">SUBTOTAL</th>
        //         </tr>

        // {cart.products.map((row, i) => (
        //     <tr className="row" key={i}>
        //         <td
        //             valign="top"
        //             align="left"
        //             className="cart-desktop img-descr"
        //         >
        //             <img
        //                 className="cartimg"
        //                 src={row.item.picture}
        //                 alt="noe"
        //             />
        //             <div className="name-qty">
        //                 <p className="name">{row.item.name}</p>
        //                 <p className="qty">Qty: {row.count}</p>
        //             </div>
        //         </td>
        //         <td className="cart-desktop" valign="top">
        //             <input
        //                 className="counter"
        //                 min={1}
        //                 max={100}
        //                 type="number"
        //                 value={row.count}
        //                 onChange={(e) =>
        //                     changeProductCount(
        //                         e.target.value,
        //                         row.item.id
        //                     )
        //                 }
        //             />
        //             <p
        //                 className="remove"
        //                 align="left"
        //                 sx={{ display: "block" }}
        //                 onClick={() => deleteCartProduct(row.item.id)}
        //             >
        //                 Remove
        //             </p>
        //         </td>
        //         <td
        //             valign="top"
        //             className="prices cart-desktop"
        //             align="center"
        //         >
        //             <p className="cart-price">${row.item.price}</p>
        //         </td>
        //         <td className="cart-desktop" valign="top" align="right">
        //             <p className="subprice">${row.subPrice}</p>
        //         </td>

        //     </tr>
        // ))}
        //     </tbody>
        // </table>
    );
}
