import React from "react";

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
    console.log("trade things");
  }

  return (
    <div style={styles.buttonContainer}>
      <button onClick={rollDice} style={styles.button}>
        Roll Dice
      </button>
      <button onClick={showTradePage} style={styles.button}>
        Trade
      </button>
      <button onClick={doneTurn} style={styles.button}>
        Done
      </button>
    </div>
  );
}

const styles = {
  buttonContainer: {
    margin: "10px",
  },
  button: {
    border: "none",
    background: "none",
    "background-color": "brown",
    color: "white",
    padding: "8px 32px",
    margin: "5px 4px",
    "border-radius": "4px",
  },
};

export default Controls;
