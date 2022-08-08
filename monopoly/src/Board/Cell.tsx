import React from 'react';
import { gameConfig } from '../Config/config';

export interface CellProps {
    num: number
}

function Cell(props: CellProps) {
    const { num } = props;
    const config = gameConfig[num];

    return (
        <div>
            <div className="header-section" style={{ "backgroundColor": config.colorCode }}>
            </div>
            {config.name}
            {config.rentValue && <div>$ {config.rentValue}</div>}
        </div>
    );
}

export default Cell;