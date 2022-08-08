import { ReactComponent as HouseICON } from "../userIcons/house.svg";
import { ReactComponent as HotelICON } from "../userIcons/hotel.svg";
import { gameConfig } from "../Config/config";

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
    height: "8em",
    width: "8em",
    border: "1px solid black",
  },
  headerSection: {
    height: "2em",
    padding: "0.5em 0",
  },
  svg: {
    height: "1.8em",
    width: "1.8em",
  },
};

export default Cell;
