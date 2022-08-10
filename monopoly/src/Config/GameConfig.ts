export interface PlayerConfig {
  name: string;
  cashInHand: number;
  propertyIds: number[];
  currentPosition: number;
  colorCode: string;
  symbolId: number;
}

export interface PropertyConfig {
  id: number;
  houses: number;
  hotels: number;
  boughtByPlayerId: number;
}

export default interface GameConfig {
  players: PlayerConfig[];
  properties: PropertyConfig[];
}

export const sampleGame: GameConfig = {
  players: [
    {
      name: "Player1",
      cashInHand: 1500,
      propertyIds: [],
      currentPosition: 2,
      colorCode: "#ffff00",
      symbolId: 0,
    },
    {
      name: "Player1",
      cashInHand: 1500,
      propertyIds: [],
      currentPosition: 12,
      colorCode: "#ff00ff",
      symbolId: 2,
    },
    {
      name: "Player1",
      cashInHand: 1500,
      propertyIds: [],
      currentPosition: 22,
      colorCode: "#ff0000",
      symbolId: 1,
    },
    {
      name: "Player1",
      cashInHand: 1500,
      propertyIds: [],
      currentPosition: 24,
      colorCode: "#0000ff",
      symbolId: 3,
    },
  ],
  properties: [
    { id: 6, houses: 4, hotels: 0, boughtByPlayerId: 0 },
    { id: 14, houses: 3, hotels: 0, boughtByPlayerId: 1 },
    { id: 26, houses: 0, hotels: 1, boughtByPlayerId: 1 },
    { id: 34, houses: 2, hotels: 0, boughtByPlayerId: 1 },
    { id: 9, houses: 1, hotels: 0, boughtByPlayerId: 2 },
  ],
};
