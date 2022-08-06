import React from 'react';
import { gameConfig } from '../Config/config';

export interface GameCellProps {
    num: number
}

function GameCell(props: GameCellProps) {
    const {num} = props;
    const config = gameConfig[num];

    return (
        <div>
            <div className="header-color" style={{"backgroundColor": config.colorCode}}></div>
            {config.name}
            { config.rentValue && <div>$ {config.rentValue}</div>}
        </div>
    );
}

export default GameCell;