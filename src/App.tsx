import React from 'react';
import cl from './App.module.scss';
import weapons from "./weapons.json"
import RouletteElement from "./Components/Roulette/RouletteElement";


function App() {
    let randomWeapon = weapons[Math.floor(Math.random() * weapons.length)];

    function afterParty(){
        console.log("Начало")
    }

    function beforeParty(){
        console.log("Конец")
    }

    return (
        <div className={cl.App}>
            <h1 className={cl.title}>
                Здесь будет мотиватор
            </h1>
            <h2 className={cl.sub_title}>
                когда его напишут...
            </h2>
            <RouletteElement
                weaponPrizeAttrs={randomWeapon}
                weaponActorsAttrs={weapons}
                afterParty={afterParty}
                beforeParty={beforeParty}
            />
        </div>
    );
}

export default App;
