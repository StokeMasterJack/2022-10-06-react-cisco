import React from "react";
import {BjAction} from "./blackjack";
import {Dispatch} from "./BlackjackGame";
import {Ro} from "./ss-react-utils";
import {useTheme} from "./Theme";


export const BlackjackButtons = ({isGameActive, dispatch}: { isGameActive: boolean, dispatch: Dispatch }) => {

    const {backgroundColor} = useTheme();

    const onClick = (event: any) => {
        const name = event.target.name;
        const action: BjAction = {
            type: name
        };
        dispatch(action);
    };

    return <Ro style={{padding: "1rem", backgroundColor, margin: "1rem", width: "10rem", height: "2rem"}}>

        <button name='deal' onClick={onClick} disabled={isGameActive}>Deal</button>
        <button name='hit' onClick={onClick} disabled={!isGameActive}>Hit</button>
        <button name='stay' onClick={onClick} disabled={!isGameActive}>Stay</button>

    </Ro>;
};