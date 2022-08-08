import { sizesTheme } from "../Config/theme";
import Cell from "./Cell";
import { SelectedArea } from "./SelectedArea";

function PlayArea() {
  function getTopRow() {
    var chosen = [<th key="-2"></th>];
    var cells = [<th key="-1"></th>];
    for (var i = 20; i <= 30; i++) {
      chosen.push(
        <th key={i}>
          <SelectedArea cellNum={i} />
        </th>
      );
      cells.push(
        <th key={i}>
          <Cell num={i} />
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

  function getBottomRow() {
    var chosen = [<th key="-2"></th>];
    var cells = [<th key="-1"></th>];
    for (var i = 10; i >= 0; i--) {
      chosen.push(
        <th key={i}>
          <SelectedArea cellNum={i} />
        </th>
      );
      cells.push(
        <th key={i}>
          <Cell num={i} />
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

  function getMiddleRow(rowNum: number) {
    const centerPieces = [];
    for (var i = 0; i < 9; i++) {
      centerPieces.push(<th key={i}></th>);
    }
    return (
      <tr key={rowNum}>
        <th key="-2">
          <SelectedArea cellNum={20 - rowNum} />
        </th>
        <th key="-1">
          <Cell num={20 - rowNum} />
        </th>
        {centerPieces}
        <th key="100">
          <Cell num={30 + rowNum} />
        </th>
        <th key="101">
          <SelectedArea cellNum={30 + rowNum} />
        </th>
      </tr>
    );
  }

  function getMiddleSection() {
    var rows = [];
    for (var i = 1; i <= 9; i++) {
      rows.push(getMiddleRow(i));
    }
    return rows;
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
    "max-width": sizesTheme.overallBoardWidth,
    height: "auto",
    display: "flex",
    "flex-direction": "column",
  },
};

export default PlayArea;
