import React from 'react';
import cl from './App.module.scss';
import RouletteElement from "./Components/Roulette/RouletteElement";
import weapons from "./weapons.json"


function App() {

    const weaponsCount = 150
    const transitionDuration = 15

    return (
        <div className={cl.App}>
            <div className={cl.wrapper}>
                <RouletteElement
                    weapons={weapons}
                    weaponsCount={weaponsCount}
                    transitionDuration={transitionDuration}
                />
            </div>
        </div>
    );
}

export default App;
