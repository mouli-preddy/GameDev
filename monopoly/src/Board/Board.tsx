import React, { useState } from "react";
import { sampleGame } from "../Config/GameConfig";
import Controls from "./Controls";
import PlayArea from "./PlayArea";

type Props = {};

export const Board = (props: Props) => {
  const [players, setPlayers] = useState(sampleGame.players);
  const [properties, setProperties] = useState(sampleGame.properties);
  const [value, setValue] = useState(0);

  function onRollDice(left: number, right: number) {
    const nextPos = (players[0].currentPosition + left + right) % 40;
    players[0].currentPosition = nextPos;
    setPlayers(players);
    setValue(value + 1);
    console.log("dice rolled", left, right, players[0]);
  }

  function endChance() {
    console.log("end chance");
  }

  return (
    <div>
      <p>{players[0].currentPosition}</p>
      <Controls rollDice={onRollDice} endChance={endChance} />
      <PlayArea players={players} properties={properties} />
    </div>
  );
};
