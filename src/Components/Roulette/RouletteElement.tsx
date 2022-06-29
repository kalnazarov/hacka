import React from 'react';
import {Roulette, weaponAttributes} from "./roulette";
import cl from "./Roulette.module.scss"
import "./roulette.scss"
import RouletteItem from "./RouletteItem/RouletteItem";

interface RouletteElementParams {
    weaponPrizeAttrs: weaponAttributes,
    weaponActorsAttrs: weaponAttributes[],
    beforeParty: () => void
    afterParty: () => void
}

const RouletteElement = ({
                             weaponPrizeAttrs,
                             weaponActorsAttrs,
                             beforeParty,
                             afterParty,
                         }: RouletteElementParams) => {

    /** ЗАМЕТКА ПРО ОРУЖИЕ
     -----------------------------------------------------------------------------

     Вопрос: что такое ATTRS?
     Ответ: это атрибуты для создания объектов класса EvWeapon. внутри моего кода
     используется класс EvWeapon, но тебе в нём разбираться не нужно. всё,
     что нужно, -- это подсунуть правильные переменные WEAPON_PRIZE_ATTRS
     и WEAPON_ACTORS_ATTRS

     WEAPON_PRIZE_ATTRS  <-- один набор атрибутов для оружия-приза
     WEAPON_ACTORS_ATTRS <-- массив атрибутов для оружия-актёров

     обязательные поля в атрибутах:
     - weapon_name (строка)
     - skin_name   (строка)
     - rarity (один из вариантов: 'milspec', 'restricted', 'classified', 'covert',  'rare', 'uncommon')
     - steam_image (ссылка на картинку)
     -----------------------------------------------------------------------------*/


    function main() {
        let el_parent = document.getElementById('roulette-container')

        // инициализировать рулетку
        let roulette = new Roulette({
            weapon_prize_attrs: weaponPrizeAttrs,
            weapon_actors_attrs: weaponActorsAttrs,
            el_parent: el_parent,
            beforeParty: beforeParty,
            afterParty: afterParty
        });

        roulette.start()
    }

    return (
        <div>
            <div className={cl.wrapper} id={"roulette-container"}></div>
            {weaponActorsAttrs.map((w, i) => {
                return <RouletteItem
                    key={i}
                    id={i}
                    weapon_name={w.weapon_name}
                    skin_name={w.skin_name}
                    rarity={w.rarity}
                    steam_image={w.steam_image}
                />
            })}
            <button onClick={main}>Play</button>
        </div>
    );
};

export default RouletteElement;