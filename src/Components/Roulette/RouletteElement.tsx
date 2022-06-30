import React, {useState} from 'react';
import "./roulette.scss"
import RouletteItem from "./RouletteItem/RouletteItem";
import {weaponAttributes} from "./roulette";

interface RouletteElementParams {
    rouletteWeapons: weaponAttributes[],
    setIsSpin: (arg0: boolean) => void,
    weaponPrizeId: number | null
}

const RouletteElement = ({rouletteWeapons, setIsSpin, weaponPrizeId}: RouletteElementParams) => {

    const [isSpinEnd, setIsSpinEnd] = useState<boolean>(false)

    function transitionEndHandler(){
        setIsSpinEnd(true)
        setIsSpin(false)
    }

    return (
        <div id={"roulette-container"}>
            <div id={"ev-roulette"}>
                <div id={"ev-target"}></div>
                <div id={"ev-weapons"} onTransitionEnd={transitionEndHandler}>
                    {rouletteWeapons.map((w, i) => {
                        return <RouletteItem
                            key={i}
                            id={i}
                            isSpinEnd={isSpinEnd}
                            isLoser={i !== weaponPrizeId}
                            weapon_name={w.weapon_name}
                            skin_name={w.skin_name}
                            rarity={w.rarity}
                            steam_image={w.steam_image}
                        />
                    })}
                </div>
            </div>
        </div>
    );
};

export default RouletteElement;