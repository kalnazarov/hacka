import React, {useState} from 'react';
import cl from './App.module.scss';
import weapons from "./weapons.json"
import RouletteElement from "./Components/Roulette/RouletteElement";
import {Roulette, weaponAttributes} from "./Components/Roulette/roulette";


function App() {
    const [isSpin, setIsSpin] = useState<boolean>(false)
    const [rouletteWeapons, setRouletteWeapons] = useState<weaponAttributes[]>(weapons)
    const weaponsCount = 50
    const transitionDuration = 5

    function play() {
        let winner = weapons[Math.floor(Math.random() * weapons.length)];
        console.log(winner)
        const rouletteWrapper = document.getElementById('roulette-container')
        const weaponWrapper = document.getElementById('ev-weapons')

        const roulette = new Roulette({
            winner,
            weapons,
            rouletteWrapper,
            weaponWrapper,
            weaponsCount: weaponsCount,
            transitionDuration: transitionDuration
        });

        roulette.set_weapons()
        setRouletteWeapons(roulette.weapons)

        setIsSpin(true)
        roulette.spin()
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
                setIsSpin={setIsSpin}
                rouletteWeapons={rouletteWeapons}
                // TODO избавиться от хардкода
                weaponPrizeId={weaponsCount - 3}
            />
            <button disabled={isSpin} onClick={play}>Play</button>
        </div>
    );
}

export default App;
