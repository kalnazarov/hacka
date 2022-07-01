import React, {useState} from 'react';
import cl from './App.module.scss';
import weapons from "./weapons.json"
import RouletteElement from "./Components/Roulette/RouletteElement";
import {Roulette, weaponAttributes} from "./Components/Roulette/roulette";


function App() {
    const [isSpin, setIsSpin] = useState<boolean>(false)
    const [rouletteWeapons, setRouletteWeapons] = useState<weaponAttributes[]>(weapons)
    const [weaponPrizeId, setWeaponPrizeId] = useState<number>(-1)
    const [isReplay, setIsReplay] = useState<boolean>(false)
    const [isSpinEnd, setIsSpinEnd] = useState<boolean>(false)
    const weaponsCount = 150
    const transitionDuration = 15

    function prepare() {
        const weaponWrapper = document.getElementById('ev-weapons')
        weaponWrapper!.style.transition = "none"
        weaponWrapper!.style.left = "0px"
    }

    function load() {
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
        if (isReplay) {
            prepare()
        }
        setIsSpin(true)

        const roulette = load()

        setTimeout(() => {
            setIsSpin(true)
            setWeaponPrizeId(roulette.spin())
            setIsReplay(true)
        }, 1000)
    }

    return (
        <div className={cl.App}>
            <div className={cl.wrapper}>
                <RouletteElement
                    setIsSpin={setIsSpin}
                    setIsSpinEnd={setIsSpinEnd}
                    rouletteWeapons={rouletteWeapons}
                    weaponPrizeId={weaponPrizeId}
                    isSpin={isSpin}
                    isSpinEnd={isSpinEnd}
                />
                <button className={cl.button} disabled={isSpin} onClick={play}>Roll</button>

            </div>
        </div>
    );
}

export default App;
