import GameConfig, { PropertyConfig, PlayerConfig } from "../Config/GameConfig";
import { sizesTheme } from "../Config/theme";
import Cell from "./Cell";
import { SelectedArea } from "./SelectedArea";

interface PlayAreaProps {
  players: PlayerConfig[];
  properties: PropertyConfig[];
}

function PlayArea(props: PlayAreaProps) {
  const { players, properties } = props;

  function getTopRow() {
    var chosen = [<th key="-2"></th>];
    var cells = [<th key="-1"></th>];
    for (var i = 20; i <= 30; i++) {
      chosen.push(
        <th key={i}>
          <SelectedArea
            cellNum={i}
            usersToShow={getSelectedUsers(i)}
            ownerColor={getOwnerIdColor(i)}
          />
        </th>
      );
      cells.push(
        <th key={i}>
          <Cell num={i} cellConfig={getCellConfig(i)} />
        </th>
      );
    }
    chosen.push(<th key={100}></th>);
    cells.push(<th key={100}></th>);
    return (
      <>
        <tr key="topChosen">{chosen}</tr>
        <tr key="topRow">{cells}</tr>
      </>
    );
  }

  function getMiddleRow(rowNum: number) {
    const centerPieces = [];
    for (var i = 0; i < 9; i++) {
      centerPieces.push(<th key={i}></th>);
    }
    const topI = 20 - rowNum;
    const bottomI = 30 + rowNum;
    return (
      <tr key={rowNum}>
        <th key="-2">
          <SelectedArea
            cellNum={topI}
            usersToShow={getSelectedUsers(topI)}
            ownerColor={getOwnerIdColor(topI)}
          />
        </th>
        <th key="-1">
          <Cell num={topI} cellConfig={getCellConfig(topI)} />
        </th>
        {centerPieces}
        <th key="100">
          <Cell num={bottomI} cellConfig={getCellConfig(bottomI)} />
        </th>
        <th key="101">
          <SelectedArea
            cellNum={bottomI}
            ownerColor={getOwnerIdColor(bottomI)}
            usersToShow={getSelectedUsers(bottomI)}
          />
        </th>
      </tr>
    );
  }

  function getBottomRow() {
    var chosen = [<th key="-2"></th>];
    var cells = [<th key="-1"></th>];
    for (var i = 10; i >= 0; i--) {
      chosen.push(
        <th key={i}>
          <SelectedArea
            cellNum={i}
            usersToShow={getSelectedUsers(i)}
            ownerColor={getOwnerIdColor(i)}
          />
        </th>
      );
      cells.push(
        <th key={i}>
          <Cell num={i} cellConfig={getCellConfig(i)} />
        </th>
      );
    }
    chosen.push(<th key={100}></th>);
    cells.push(<th key={100}></th>);
    return (
      <>
        <tr key="bottomRow">{cells}</tr>
        <tr key="bottomChosen">{chosen}</tr>
      </>
    );
  }

  function getMiddleSection() {
    var rows = [];
    for (var i = 1; i <= 9; i++) {
      rows.push(getMiddleRow(i));
    }
    return rows;
  }

  function getCellConfig(i: number) {
    const configs = properties.filter((p: PropertyConfig) => p.id === i);
    const config = configs && configs.length > 0 ? configs[0] : null;
    return config;
  }

  function getSelectedUsers(cellNum: number) {
    const configs = players.filter(
      (p: PlayerConfig) => p.currentPosition === cellNum
    );
    const config =
      configs && configs.length > 0 ? configs.map((c) => c.symbolId) : null;
    return config;
  }

  function getOwnerIdColor(cellNum: number) {
    const props = properties.filter((p: PropertyConfig) => p.id === cellNum);
    return props && props.length > 0
      ? players[props[0].boughtByPlayerId].colorCode
      : "ffffff";
  }

  return (
    <div style={styles.gameBoard}>
      <table cellSpacing={0}>
        <tbody>
          {getTopRow()}
          {getMiddleSection()}
          {getBottomRow()}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  gameBoard: {
    margin: "auto",
    width: "calc(100% - 1em)",
    maxWidth: sizesTheme.overallBoardWidth,
    height: "auto",
    display: "flex",
    flexDirection: "column" as const,
    fontSize: sizesTheme.boardFontSize,
  },
};

export default PlayArea;
