import React from 'react';
import {weaponAttributes} from "../roulette";
import cl from "./RouletteHistory.module.scss";

interface historyProps {
    winHistory: weaponAttributes[]
}

const RouletteHistory = ({winHistory}: historyProps) => {
    const slicedHistory = winHistory.length <= 6 ? winHistory.slice(0, 6).reverse() : winHistory.slice(-6).reverse()
    return (
        <div className={cl.wrapper}>
            <div className={cl.title}>История побед:</div>
            <div className={cl.items}>
                {slicedHistory.map((weapon) => {
                    return <div className={cl.itemWrapper}>
                        <div className={`${cl.evWeaponRarity} ${cl[weapon.rarity]}`}></div>
                        <img className={cl.image} src={weapon.steam_image} alt={weapon.weapon_name}/>
                        <div className={cl.evWeaponText}>
                            <p>{weapon.weapon_name}</p>
                            <p>{weapon.skin_name}</p>
                        </div>
                    </div>
                })}
            </div>
        </div>
    );
};

export default RouletteHistory;