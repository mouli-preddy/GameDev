import React from 'react';
import Cell from './Cell';
import { ReactComponent as CarICON } from '../userIcons/car.svg';
import { ReactComponent as CapICON } from '../userIcons/cap.svg';
import { ReactComponent as DogICON } from '../userIcons/dog.svg';
import { ReactComponent as DragonICON } from '../userIcons/dragon.svg';

function PlayArea() {

    function getTopRow() {
        var chosen = [<th key="-2" className="cell-inner-chosen-edge"></th>];
        var cells = [<th key="-1" className="cell-inner-chosen-edge"></th>];
        for (var i = 20; i <= 30; i++) {
            chosen.push(<th key={i} className="cell-inner-chosen">
                <div className="user-logo">
                    <CarICON />
                    <CapICON />
                    <DogICON />
                    <DragonICON />
                </div>
            </th>)
            cells.push(<th key={i} className="cell-inner"><Cell num={i} /></th>);
        }
        chosen.push(<th key={100} className="cell-inner-chosen-edge"></th>);
        cells.push(<th key={100} className="cell-inner-chosen-edge"></th>);
        return (
            <>
                <tr key="chosenTop" className="cell-container row">{chosen}</tr>
                <tr key="topLayer" className="cell-container row">{cells}</tr>
            </>);
    }

    function getBottomRow() {
        var chosen = [<th key="-2" className="cell-inner-chosen-edge"></th>];
        var cells = [<th key="-1" className="cell-inner-chosen-edge"></th>];
        for (var i = 10; i >= 0; i--) {
            chosen.push(<th key={i} className="cell-inner-chosen"></th>)
            cells.push(<th key={i} className="cell-inner"><Cell num={i} /></th>);
        }
        chosen.push(<th key={100} className="cell-inner-chosen-edge"></th>);
        cells.push(<th key={100} className="cell-inner-chosen-edge"></th>);
        return (
            <>
                <tr key="bottomLayer" className="cell-container row">{cells}</tr>
                <tr key="chosenBottom" className="cell-container row">{chosen}</tr>
            </>);
    }

    function getMiddleRow(rowNum: number) {
        const centerPieces = [];
        for (var i = 0; i < 9; i++) {
            centerPieces.push(<th key={i}></th>)
        }
        return (
            <tr key={rowNum} className="cell-container-middle row">
                <th key="-2" className="cell-inner-chosen-edge">
                    <div className="user-logo">
                        <CarICON />
                        <CapICON />
                        <DogICON />
                        <DragonICON />
                    </div>
                </th>
                <th key="-1"><Cell num={20 - rowNum} /></th>
                {centerPieces}
                <th key="100"><Cell num={30 + rowNum} /></th>
                <th key="101" className="cell-inner-chosen-edge">
                    <div className="user-logo">
                        <CarICON />
                        <CapICON />
                        <DogICON />
                        <DragonICON />
                    </div>
                </th>
            </tr>
        )
    }

    function getMiddleRows() {
        var rows = [];
        for (var i = 1; i <= 9; i++) {
            rows.push(getMiddleRow(i))
        }
        return rows
    }

    return (
        <div className="game-board">
            <table>
                <tbody>
                    {getTopRow()}
                    {getMiddleRows()}
                    {getBottomRow()}
                </tbody>
            </table>
        </div>
    );
}

export default PlayArea;