import * as React from "react";
import { ReactComponent as CarICON } from "../userIcons/car.svg";
import { ReactComponent as CapICON } from "../userIcons/cap.svg";
import { ReactComponent as DogICON } from "../userIcons/dog.svg";
import { ReactComponent as DragonICON } from "../userIcons/dragon.svg";
import { isHorizontalSelection } from "../Config/helpers";

type Props = {
  cellNum: number;
};

export const SelectedArea = (props: Props) => {
  const { cellNum } = props;

  return (
    <div
      id={"" + cellNum}
      style={
        isHorizontalSelection(cellNum)
          ? styles.logoHorizontal
          : styles.logoVertical
      }
    >
      <CarICON style={styles.svg} />
      <CapICON style={styles.svg} />
      <DogICON style={styles.svg} />
      <DragonICON style={styles.svg} />
    </div>
  );
};

const styles = {
  logoVertical: {
    height: "8em",
    width: "2em",
    "background-color": "green",
    border: "1px solid green",
  },

  logoHorizontal: {
    width: "8em",
    height: "2em",
    "background-color": "green",
    border: "1px solid green",
  },

  svg: {
    height: "1.8em",
    width: "1.8em",
  },
};
