import React from 'react';
import {Roulette, weaponAttributes} from "../../roulette";

interface RouletteElementParams {
    weaponPrizeAttrs: weaponAttributes,
    weaponActorsAttrs: weaponAttributes[]
}

const RouletteElement = ({weaponPrizeAttrs, weaponActorsAttrs}: RouletteElementParams) => {

    // ЗАМЕТКА ПРО ОРУЖИЕ
    // -----------------------------------------------------------------------------

    // Вопрос: что такое ATTRS?
    // Ответ: это атрибуты для создания объектов класса EvWeapon. внутри моего кода
    //         используется класс EvWeapon, но тебе в нём разбираться не нужно. всё,
    //         что нужно, -- это подсунуть правильные переменные WEAPON_PRIZE_ATTRS
    //         и WEAPON_ACTORS_ATTRS

    // WEAPON_PRIZE_ATTRS  <-- один набор атрибутов для оружия-приза
    // WEAPON_ACTORS_ATTRS <-- массив атрибутов для оружия-актёров

    // обязательные поля в атрибутах:
    //     - weapon_name (строка)
    //     - skin_name   (строка)
    //     - rarity      (один из вариантов: 'milspec', 'restricted', 'classified',
    //                                       'covert',  'rare',       'uncommon')
    //     - steam_image (ссылка на картинку)

    // ПРИ ЗАГРУЗКЕ СТРАНИЦЫ ЗДЕСЬ НАЧИНАЕТСЯ ВСЯ ДВИЖУХА
    // -----------------------------------------------------------------------------
    function main() {
            // куда монтировать рулетку
        let el_parent = document.getElementById('mysite-roulette-container')

            // инициализировать рулетку
        let roulette = new Roulette({
                weapon_prize_attrs: weaponPrizeAttrs,
                weapon_actors_attrs: weaponActorsAttrs,
                el_parent: el_parent,
                beforeParty: function () {
                    console.log('Поехали!');
                },
                afterParty: function () {
                    console.log('Ой, всё');
                }
            });

        // понеслась
        roulette.start();
    }

    document.addEventListener('DOMContentLoaded', main);

    return (
        <div>

        </div>
    );
};

export default RouletteElement;