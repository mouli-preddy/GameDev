import * as React from "react";
import { sampleGame } from "../Config/GameConfig";
import Controls from "./Controls";
import PlayArea from "./PlayArea";

type Props = {};

export const Board = (props: Props) => {
  function onRollDice(left: number, right: number) {
    console.log("dice rolled", left, right);
  }

  function endChance() {
    console.log("end chance");
  }

  return (
    <div>
      <Controls rollDice={onRollDice} endChance={endChance} />
      <PlayArea game={sampleGame}/>
    </div>
  );
};
