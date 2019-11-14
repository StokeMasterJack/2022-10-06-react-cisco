import React from "react";
import {Game} from "./blackjack";
import {BlackjackButtons} from "./BlackjackButtons";
import {Dispatch} from "./BlackjackGame";
import {HandVu} from "./HandVu";
import {Co, Ro} from "./ss-react-utils";


export const BlackjackGameVu = ({state, dispatch}: { state: Game, dispatch: Dispatch }) => {

    return <Co style={{}}>
        <h1>Blackjack</h1>
        <Ro style={{backgroundColor:'#EEEEEE',justifyContent:'center'}}>
            <HandVu h={state.ph}/>
            <HandVu h={state.dh}/>
        </Ro>
        <Ro>
            {state.msg}
        </Ro>
        <Ro>
            <BlackjackButtons isGameActive={state.isActive} dispatch={dispatch} />
        </Ro>
    </Co>;

};