import React from 'react';
import cl from './App.module.scss';
import weapons from "./weapons.json"
import RouletteElement from "./Components/Roulette/Roulette";

function App() {
    let randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];

    return (
        <div className={cl.App}>
            <h1 className={cl.title}>
                Здесь будет мотиватор
            </h1>
            <h2 className={cl.sub_title}>
                когда его напишут...
            </h2>
            <RouletteElement weaponPrizeAttrs={randomWeapon} weaponActorsAttrs={weapons}/>
        </div>
    );
}

export default App;
