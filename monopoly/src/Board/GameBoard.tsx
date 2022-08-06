import React from 'react';
import GameCell from './GameCell';

function GameBoard() {

    function getTopRow() {
        var chosen = [<th className="cell-inner-chosen-edge"></th>];
        var cells = [<th className="cell-inner-chosen-edge"></th>];
        for(var i=20; i<=30; i++) {
            chosen.push(<th className="cell-inner-chosen"></th>)
            cells.push(<th className="cell-inner"><GameCell num={i}/></th>);
        }
        chosen.push(<th className="cell-inner-chosen-edge"></th>);
        cells.push(<th className="cell-inner-chosen-edge"></th>);
        return <>
            <tr className="cell-container row"> {chosen}</tr>
            <tr className="cell-container row"> {cells}</tr>
        </>
    }

    function getBottomRow() {
        var chosen = [<th className="cell-inner-chosen-edge"></th>];
        var cells = [<th className="cell-inner-chosen-edge"></th>];
        for(var i=10; i>=0; i--) {
            chosen.push(<th className="cell-inner-chosen"></th>)
            cells.push(<th className="cell-inner"><GameCell num={i}/></th>);
        }
        chosen.push(<th className="cell-inner-chosen-edge"></th>);
        cells.push(<th className="cell-inner-chosen-edge"></th>);
        return <><tr className="cell-container row"> {cells}</tr>  <tr className="cell-container row"> {chosen}</tr></>
    }

    function getMiddleRow(rowNum: number) {
        const centerPieces = [];
        for(var i=0; i<9; i++) {
            centerPieces.push(<th><div> </div></th>)
        }
        return <tr className="cell-container-middle row">
             <th className="cell-inner-chosen-edge"></th>
            <th><GameCell num={20 - rowNum}/></th>
            {centerPieces}
            <th><GameCell num={30 + rowNum}/></th>
            <th className="cell-inner-chosen-edge"></th>
        </tr>
    }

    function getMiddleRows() {
        var rows = [];
        for(var i=1; i<=9; i++) {
            rows.push(getMiddleRow(i))
        }
        return rows
    }

    function getRowChosenColor() {

    }

    return (
        <div className="game-board">
            <table>
            {getTopRow()}
            {getMiddleRows()}
            {getBottomRow()}
            </table>
        </div>
    );
}

export default GameBoard;