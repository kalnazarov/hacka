// import { Box } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useProducts } from "../context/ProductContextProvider";
// import ProductsList from "./ProductsList";
// import ProductSortPagination from "./ProductSortPogination";

// const ProductsPage = () => {
//     const { products, getProducts } = useProducts();

//     useEffect(() => {
//         getProducts();
//     }, []);

//     const [page, setPage] = useState(1);
//     const itemsPerPage = 15;
//     const count = Math.ceil(products.length / itemsPerPage);

//     function currentData() {
//         const begin = (page - 1) * itemsPerPage;
//         const end = begin + itemsPerPage;
//         return products.slice(begin, end);
//     }
//     const [searchParams, setSearchParams] = useSearchParams();
//     useEffect(() => {
//         getProducts();
//         setPage(1);
//     }, [searchParams]);
//     return (
//         <Box
//             sx={{
//                 backgroundColor: "#1f1e27",
//                 display: "flex",
//                 justifyContent: "center",
//             }}
//         >
//             <Box
//                 sx={{
//                     width: "90%",
//                 }}
//             >
//                 <ProductSortPagination
//                     page={page}
//                     setPage={setPage}
//                     count={count}
//                 />
//                 <ProductsList />
//             </Box>
//         </Box>
//     );
// };

// export default ProductsPage;

// import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";

import { useParams, useSearchParams } from "react-router-dom";
import ProductList from "./ProductList";
import ProductSortPagination from "./ProductSortPogination";
import { useProducts } from "../context/ProductContextProvider";

const ProductsPage = () => {
    const { products, getProducts } = useProducts();

    useEffect(() => {
        getProducts();
    }, []);

    const [page, setPage] = useState(1);
    const itemsPerPage = 15;
    const count = Math.ceil(products.length / itemsPerPage);

    function currentData() {
        const begin = (page - 1) * itemsPerPage;
        const end = begin + itemsPerPage;
        return products.slice(begin, end);
    }
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(() => {
        getProducts();
        setPage(1);
    }, [searchParams]);

    return (
        <div
            style={{
                backgroundColor: "rgb(18, 18, 18)",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Box sx={{ width: "90%" }}>
                <ProductSortPagination
                    page={page}
                    setPage={setPage}
                    count={count}
                />
                <ProductList currentData={currentData} />
            </Box>
        </div>
    );
};

export default ProductsPage;
