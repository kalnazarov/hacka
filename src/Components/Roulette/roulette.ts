export interface weaponAttributes {
    weapon_name: string,
    skin_name: string
    rarity: string
    steam_image: string
}

// КЛАСС ОРУЖИЯ
export class Weapon {
    id: number
    weapon_name: string
    skin_name: string
    rarity: string
    steam_image: string
    el: HTMLElement | null
    element_width: number

    constructor(id: number, attrs: weaponAttributes) {
        this.id = id;

        // атрибуты с сервера
        this.weapon_name = attrs.weapon_name;
        this.skin_name = attrs.skin_name;
        this.rarity = attrs.rarity;
        this.steam_image = attrs.steam_image;

        // DOM-элемент создаётся в рендер рулетки
        this.el = null;

        this.element_width = 200;
    }

}

export interface rouletteAttributes {
    weapon_prize_attrs: weaponAttributes
    weapon_actors_attrs: weaponAttributes[]
    el_parent: HTMLElement | null
    beforeParty: () => void
    afterParty: () => void
}

// КЛАСС РУЛЕТКИ
export class Roulette {

    weapon_prize_attrs: any
    weapon_actors_attrs: any
    el_parent: HTMLElement | null
    el: any
    el_weapons: any

    weapons: Weapon[]

    beforeParty: () => void
    afterParty: () => void

    weaponsCount: number
    weaponPrizeId: number
    spinSecs: number
    startDelayMsecs: number
    soundSpinInterval: number
    imageLoadInterval: number
    imageLoadWaitMsecs: number

    startSound: string
    spinSound: string
    stopSound: string

    constructor(attrs: rouletteAttributes) {
        // атрибуты для генерации массива weapons
        this.weapon_prize_attrs = attrs.weapon_prize_attrs;
        this.weapon_actors_attrs = attrs.weapon_actors_attrs;

        // тут будет всё оружие (оружие-приз + оружие-актёры)
        this.weapons = [];

        // родительский DOM-элемент для рулетки
        this.el_parent = attrs.el_parent;

        // DOM-элемент самой рулетки
        this.el = null;

        // родительский DOM-элемент для DOM-элементов оружия (он вращается)
        this.el_weapons = null;

        // callback на старте вращения
        this.beforeParty = attrs.beforeParty;

        // callback по окончании вращения
        this.afterParty = attrs.afterParty;

        // общее количество оружия
        this.weaponsCount = 25;

        // id приза
        this.weaponPrizeId = this.weaponsCount - 3;

        // время вращения
        this.spinSecs = 10;

        // время отложенного старта
        this.startDelayMsecs = 100;

        // интервал синхронизации звуков вращения
        this.soundSpinInterval = 100;

        // интервал ожидания картинок
        this.imageLoadInterval = 500;

        // максимальное время ожидания картинок
        // после этого придётся сдаться и показать битые картинки
        this.imageLoadWaitMsecs = 10000;

        // звуки
        this.startSound = 'sound/roulette_start.wav';
        this.spinSound = 'sound/roulette_spin.wav';
        this.stopSound = 'sound/roulette_stop.wav';
    }

    /** ПАРАМЕТРЫ РУЛЕТКИ

     N_WEAPONS -- это общее количество оружия в рулетке
     (приз + возможно повторяющиеся актёры)

     всего оружия должно быть не меньше 8 штук
     вот как оно выглядит

     +---+---+---+     +---+---+---+---+---+
     | 0 | 1 | 2 | ... |L-5|L-4|L-3|L-2|L-1|
     +---+---+---+     +---+---+---+---+---+

     L -- это N_WEAPONS
     (или после вызова метода 'set_weapons': this.weapons.length)

     L-3 -- на этом месте оружие-приз */


    /**  вопрос: что тут происходит?
     ответ: - создаётся массив из N_WEAPONS-1 актёров
     - позицию WEAPON_PRIZE_ID занимает приз */

    /**    СОЗДАТЬ ОРУЖИЕ ИЗ АТРИБУТОВ
     ----------------------------------------------------------------------------- */
    set_weapons = () => {
        let weapons = []
        let weapon_actors_len = this.weapon_actors_attrs.length
        let j = 0

        const set_weapon_actors = (from_i: any, to_i: any) => {
            let i;
            for (i = from_i; i <= to_i; i += 1) {
                weapons[i] = new Weapon(i, this.weapon_actors_attrs[j]);
                j = (j === weapon_actors_len - 1) ? 0 : j + 1;
            }
        };

        if (weapon_actors_len === 0) {
            throw new Error('Ошибка! Нет актёров.');
        }

        set_weapon_actors(0, this.weaponPrizeId - 1);

        weapons[this.weaponPrizeId] = new Weapon(this.weaponPrizeId, this.weapon_prize_attrs);

        set_weapon_actors(this.weaponPrizeId + 1, this.weaponsCount - 1);

        this.weapons = weapons;
    };

    /** РЕНДЕР
     -----------------------------------------------------------------------------*/
    render = () => {
        let el_roulette = document.createElement('div')
        let el_target = document.createElement('div')
        let el_weapons = document.createElement('div')

        // подсчёт загруженных картинок
        let n_images_loaded = 0
        let image_load_wait = 0
        let image_load_interval: any;

        el_roulette.id = 'ev-roulette';
        el_target.id = 'ev-target';
        el_weapons.id = 'ev-weapons';

        el_weapons.style.width = (this.weaponsCount * Weapon.prototype.element_width) + 'px';

        this.weapons.forEach((weapon) => {
            let el_weapon = document.createElement('div')
            let el_weapon_inner = document.createElement('div')
            let el_weapon_rarity = document.createElement('div')
            let el_weapon_img = document.createElement('img')
            let el_weapon_text = document.createElement('div')
            let el_weapon_text_name = document.createElement('p')
            let el_weapon_text_skin_name = document.createElement('p')

            // важно: onload callback перед src
            el_weapon_img.onload = () => {
                n_images_loaded += 1;
            };

            el_weapon_img.src = weapon.steam_image;
            el_weapon_img.alt = weapon.weapon_name;
            el_weapon_text_name.textContent = weapon.weapon_name;
            el_weapon_text_skin_name.textContent = weapon.skin_name;

            el_weapon.className = 'ev-weapon';
            el_weapon_inner.className = 'ev-weapon-inner';
            el_weapon_rarity.className = 'ev-weapon-rarity ev-weapon-rarity-' + weapon.rarity;
            el_weapon_text.className = 'ev-weapon-text';

            el_weapon_text.appendChild(el_weapon_text_name);
            el_weapon_text.appendChild(el_weapon_text_skin_name);
            el_weapon_inner.appendChild(el_weapon_rarity);
            el_weapon_inner.appendChild(el_weapon_img);
            el_weapon_inner.appendChild(el_weapon_text);
            el_weapon.appendChild(el_weapon_inner);

            weapon.el = el_weapon;

            el_weapons.appendChild(weapon.el);
        });

        el_roulette.appendChild(el_target);
        el_roulette.appendChild(el_weapons);

        /** ждём загрузки всех картинок
         по окончании начинаем вращаться*/
        image_load_interval = setInterval(() => {
            image_load_wait += this.imageLoadInterval;

            // полная боевая готовность или не могу больше ждать
            if (
                (n_images_loaded === this.weaponsCount) ||
                (image_load_wait >= this.imageLoadWaitMsecs)
            ) {
                clearInterval(image_load_interval);

                this.el_weapons = el_weapons;
                this.el = el_roulette;

                this.el_parent?.appendChild(this.el);

                this.spin();
            }
        }, this.imageLoadInterval);

    }

    /** УЧУ РУЛЕТКУ ИЗДАВАТЬ ЗВУКИ
     -----------------------------------------------------------------------------*/
    make_sound = (sound: string) => {
        let audio = new Audio(sound);
        audio.volume = 0.2;
        audio.play().then(r => console.log(r));
    };

    /** ВРАЩЕНИЕ РУЛЕТКИ
     -----------------------------------------------------------------------------*/
    spin = () => {
        let el_weapon_width_1_2 = Math.floor(Weapon.prototype.element_width / 2)
        let el_weapon_width_1_20 = Math.floor(Weapon.prototype.element_width / 20)

        let rand = (min: number, max: number) => {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // рандомная координата остановки
        let rand_stop = (this.weaponsCount - 5) * Weapon.prototype.element_width +
            el_weapon_width_1_2 +
            rand(el_weapon_width_1_20, (18 * el_weapon_width_1_20))

        // эти ребята используются для синхронизации звука
        // (когда мишень совпадает с началом очередного оружия, должно тикать)
        let sound_spin_interval: any;
        // считает количество пройденных оружий во время вращения
        let spin_counter = 0;

        // анимация теперь через 'transition', а не через 'animation'
        // 'ease-out' -- это плавное замедление рулетки
        this.el_weapons.style.transition = 'left ' + this.spinSecs + 's ease-out';

        // немного отложенный старт
        // (ибо нельзя сразу установить цсс-свойство 'left')
        setTimeout(() => {
            // перед стартом может быть необходимость что-то сотворить
            this.beforeParty();

            this.make_sound(this.startSound);

            this.el_weapons.style.left = '-' + rand_stop + 'px';

            // здесь попытка синхронизировать звук вращения с анимацией
            sound_spin_interval = setInterval(() => {
                let current_left = Math.abs(
                    parseInt(window.getComputedStyle(this.el_weapons).left, 10)
                )
                let current_spin_counter = Math.floor(
                    (current_left + el_weapon_width_1_2) / Weapon.prototype.element_width
                )
                // рулетка довращалась до нового оружия
                if (current_spin_counter > spin_counter) {
                    spin_counter = current_spin_counter;
                    this.make_sound(this.spinSound);
                }
            }, this.soundSpinInterval);

        }, this.startDelayMsecs);

        /** анимация остановилась
         значит, рулетка тоже  */

        this.el_weapons.addEventListener('transitionend', () => {
            clearInterval(sound_spin_interval);
            this.make_sound(this.stopSound);
            this.weapons.forEach(weapon => {
                if (weapon.id !== this.weaponPrizeId) {
                    weapon.el!.style.opacity = String(0.5);
                }
            });

            // всё, рулетка остановилась
            // дальше можешь делать что-нибудь своё
            this.afterParty();
        });
    }

    /** ЗАПУСК
     * -----------------------------------------------------------------------------*/
    start = () => {
        // перед рендером нужно создать оружие из атрибутов
        this.set_weapons();

        // рендер, который вызовет this.spin() после успешной загрузки картинок
        this.render();
    };

}
