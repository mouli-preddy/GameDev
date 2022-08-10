import { ReactComponent as HouseICON } from "../userIcons/house.svg";
import { ReactComponent as HotelICON } from "../userIcons/hotel.svg";
import { gameConfig } from "../Config/config";
import { sizesTheme } from "../Config/theme";
import { PropertyConfig } from "../Config/GameConfig";

export interface CellProps {
  num: number;
  cellConfig?: PropertyConfig | null;
}

function Cell(props: CellProps) {
  const { num, cellConfig } = props;
  const config = gameConfig[num];
  const { houses = null, hotels = null } = cellConfig || {};
  const houseSymbols =
    houses && houses > 0
      ? Array.from(Array(houses).keys()).map((i) => (
          <HouseICON key={i} style={styles.svg} />
        ))
      : null;
  const hotelSymbols =
    hotels && hotels > 0
      ? Array.from(Array(hotels).keys()).map((i) => (
          <HotelICON key={i} style={styles.svg} />
        ))
      : null;

  return (
    <div style={styles.cell}>
      <div
        style={{ ...styles.headerSection, backgroundColor: config.colorCode }}
      >
        {houseSymbols}
        {hotelSymbols}
      </div>
      {config.name.toUpperCase()}
      {config.rentValue && <div>$ {config.rentValue}</div>}
    </div>
  );
}

const styles = {
  cell: {
    height: sizesTheme.cellWidth,
    width: sizesTheme.cellWidth,
    border: "1px solid black",
  },
  headerSection: {
    height: sizesTheme.selectionHeight,
    padding: "0.5em 0",
  },
  svg: {
    height: sizesTheme.iconSize,
    width: sizesTheme.iconSize,
  },
};

export default Cell;
