import { ReactComponent as HouseICON } from "../userIcons/house.svg";
import { ReactComponent as HotelICON } from "../userIcons/hotel.svg";
import { gameConfig } from "../Config/config";
import { sizesTheme } from "../Config/theme";

export interface CellProps {
  num: number;
}

function Cell(props: CellProps) {
  const { num } = props;
  const config = gameConfig[num];

  return (
    <div style={styles.cell}>
      <div
        style={{ ...styles.headerSection, backgroundColor: config.colorCode }}
      >
        <HouseICON style={styles.svg} />
        <HouseICON style={styles.svg} />
        <HouseICON style={styles.svg} />
        <HotelICON style={styles.svg} />
      </div>
      {config.name}
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
