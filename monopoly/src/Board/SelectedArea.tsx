import * as React from "react";
import { ReactComponent as CarICON } from "../userIcons/car.svg";
import { ReactComponent as CapICON } from "../userIcons/cap.svg";
import { ReactComponent as DogICON } from "../userIcons/dog.svg";
import { ReactComponent as DragonICON } from "../userIcons/dragon.svg";
import { isHorizontalSelection } from "../Config/helpers";
import { sizesTheme } from "../Config/theme";

type Props = {
  cellNum: number;
  ownerColor: string;
  usersToShow: number[] | null;
};

export const SelectedArea = (props: Props) => {
  const { cellNum, usersToShow, ownerColor } = props;

  function getUserIconsToShow() {
    var userIcons: any[] = [];
    if (usersToShow && usersToShow.length > 0) {
      userIcons = usersToShow.map((userId) => {
        if (userId === 0) return <CarICON key={userId} style={styles.svg} />;
        if (userId === 1) return <CapICON key={userId} style={styles.svg} />;
        if (userId === 2) return <DogICON key={userId} style={styles.svg} />;
        if (userId === 3) return <DragonICON key={userId} style={styles.svg} />;
      });
    }
    return userIcons;
  }

  const styleBackgroundContainer = isHorizontalSelection(cellNum)
    ? styles.logoHorizontal
    : styles.logoVertical;
  const stylesConfig = {
    ...styleBackgroundContainer,
    backgroundColor: ownerColor,
    borderColor: ownerColor,
  };

  return (
    <div id={cellNum.toString()} style={stylesConfig}>
      {getUserIconsToShow()}
    </div>
  );
};

const styles = {
  logoVertical: {
    height: sizesTheme.cellWidth,
    width: sizesTheme.selectionHeight,
    border: "1px solid white",
  },

  logoHorizontal: {
    width: sizesTheme.cellWidth,
    height: sizesTheme.selectionHeight,
    border: "1px solid white",
  },

  svg: {
    height: sizesTheme.iconSize,
    width: sizesTheme.iconSize,
    margin: "auto",
  },
};
