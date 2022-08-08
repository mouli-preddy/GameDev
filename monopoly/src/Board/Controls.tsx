import React from 'react';

function Controls() {
    const min = 1;
    const max = 6;

    function rollDice() {
        const left = Math.floor(Math.random() * (max - min + 1) + min);
        const right = Math.floor(Math.random() * (max - min + 1) + min);
        console.log("dice rolled with result", left, right);
    }

    function doneTurn() {
        console.log("turn is done");
    }

    function showTradePage() {
        console.log('trade things');
    }

    return (
        <div>
            <button onClick={rollDice}>Roll Dice</button>
            <button onClick={showTradePage}>Trade</button>
            <button onClick={doneTurn}>Done</button>
        </div>
    );
}

export default Controls;