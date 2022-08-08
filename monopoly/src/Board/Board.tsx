import * as React from 'react';
import Controls from './Controls';
import PlayArea from './PlayArea';

type Props = {

};

export const Board = (props: Props) => {
    return (
        <div>
            <Controls />
            <PlayArea />
        </div>
    );
};