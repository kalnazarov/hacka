import React, {useState} from 'react';
import cl from './App.module.scss';
import weapons from "./weapons.json"
import RouletteElement from "./Components/Roulette/RouletteElement";
import {Roulette, weaponAttributes} from "./Components/Roulette/roulette";


function App() {
    const [isSpin, setIsSpin] = useState<boolean>(false)
    const [rouletteWeapons, setRouletteWeapons] = useState<weaponAttributes[]>(weapons)
    const [weaponPrizeId, setWeaponPrizeId] = useState<number | null>(null)

    function play() {
        let winner = weapons[Math.floor(Math.random() * weapons.length)];

        const rouletteWrapper = document.getElementById('roulette-container')
        const weaponWrapper = document.getElementById('ev-weapons')

        const roulette = new Roulette({
            winner,
            weapons,
            rouletteWrapper,
            weaponWrapper,
            weaponsCount: 100,
            transitionDuration: 5
        });

        roulette.set_weapons()

        setRouletteWeapons(roulette.weapons)

        setIsSpin(true)

        setWeaponPrizeId(roulette.spin())
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
                weaponPrizeId={weaponPrizeId}
            />
            <button disabled={isSpin} onClick={play}>Play</button>
        </div>
    );
}

export default App;
