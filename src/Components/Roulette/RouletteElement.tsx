import React from 'react';
import cl from "./roulette.module.scss"
import RouletteItem from "./RouletteItem/RouletteItem";
import {weaponAttributes} from "./roulette";

interface RouletteElementParams {
    setIsSpin: (arg0: boolean) => void,
    setIsSpinEnd: (arg0: boolean) => void,
    rouletteWeapons: weaponAttributes[],
    weaponPrizeId: number | null,
    isSpin: boolean,
    isSpinEnd: boolean
}

const RouletteElement = ({
                             rouletteWeapons,
                             setIsSpin,
                             setIsSpinEnd,
                             weaponPrizeId,
                             isSpin,
                             isSpinEnd
                         }: RouletteElementParams) => {

    function transitionEndHandler() {
        setIsSpin(false)
        setIsSpinEnd(true)
    }

    return (
        <div id={"roulette-container"} className={cl.rouletteContainer}>
            <div className={cl.evRoulette}>
                <div className={cl.evTarget}></div>
                <div id={"ev-weapons"} className={cl.evWeapons} onTransitionEnd={transitionEndHandler}>
                    {rouletteWeapons.map((w, i) => {
                        return <RouletteItem
                            key={i}
                            id={i}
                            isLoser={(i !== weaponPrizeId) && !isSpin && isSpinEnd}
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