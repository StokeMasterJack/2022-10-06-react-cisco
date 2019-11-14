import React, {CSSProperties} from 'react';
import {BjAction} from './blackjack';
import {BjDispatch} from './BlackjackGame';
import {Ro} from './ss-react-utils';
import {useTheme} from './Theme';

const buttonStyle: CSSProperties = {
    margin: '.5rem'
};

const BlackjackButtonsInner = ({isGameActive, dispatch}: { isGameActive: boolean, dispatch: BjDispatch }) => {

    const {backgroundColor} = useTheme();

    const onClick = (event: any) => {
        const name = event.target.name;
        const action: BjAction = {
            type: name
        };
        dispatch(action);
    };

    return <Ro style={{backgroundColor}}>

        <button name='deal' style={buttonStyle} onClick={onClick} disabled={isGameActive}>Deal</button>
        <button name='hit' style={buttonStyle} onClick={onClick} disabled={!isGameActive}>Hit</button>
        <button name='stay' style={buttonStyle} onClick={onClick} disabled={!isGameActive}>Stay</button>

    </Ro>;
};

export const BlackjackButtons = React.memo(BlackjackButtonsInner);