import React, {useEffect, useState} from 'react';
import cl from './App.module.scss';
import weapons from "./weapons.json"
import RouletteElement from "./Components/Roulette/RouletteElement";
import {Roulette, weaponAttributes} from "./Components/Roulette/roulette";


function App() {
    const [isSpin, setIsSpin] = useState<boolean>(false)
    const [rouletteWeapons, setRouletteWeapons] = useState<weaponAttributes[]>(weapons)
    const [weaponPrizeId, setWeaponPrizeId] = useState<number>(-1)
    const weaponsCount = 50
    const transitionDuration = 5

    useEffect(() => {
        load()
    }, [])

    function load() {
        console.log("loaded")
        let winner = weapons[Math.floor(Math.random() * weapons.length)];
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

        return roulette
    }

    function play() {
        console.log("lets play")
        const roulette = load()

        setIsSpin(true)
        setWeaponPrizeId(roulette.spin())
    }

    return (
        <div className={cl.App}>
            <div className={cl.wrapper}>
                <RouletteElement
                    setIsSpin={setIsSpin}
                    rouletteWeapons={rouletteWeapons}
                    weaponPrizeId={weaponPrizeId}
                />
                <button className={cl.button} disabled={isSpin} onClick={play}>Play</button>
            </div>
        </div>
    );
}

export default App;
