import React from "react";
import cl from "./App.module.scss";
import weapons from "./weapons.json";

import McRoulette from "./Components/Roulette/McRoulette";
import Header from "./Components/Pages/Header";
import MainRoutes from "./Components/Routes/MainRoutes";
import Footer from "./Components/Pages/Footer";

function App() {
    const weaponsCount = 150;
    const transitionDuration = 20;

    return (
        // <div className={cl.App}>
        //     <Header />
        //     <div className={cl.wrapper}>

        //     </div>
        // </div>
        <div>
            <Header />
            <MainRoutes />
            {/* <McRoulette
                weapons={weapons}
                weaponsCount={weaponsCount}
                transitionDuration={transitionDuration}
            /> */}
            <Footer/>
        </div>
    );
}

export default App;
