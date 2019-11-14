import React from "react";
import {Game} from "./blackjack";
import {Dispatch} from "./BlackjackGame";
import {HandVu} from "./HandVu";


export const BlackjackGameVu = ({state, dispatch}: { state: Game, dispatch: Dispatch }) => {

    return <div style={{display: "flex", flexDirection: "column"}}>
        <h1>Blackjack</h1>
        <div style={{display: "flex", flexDirection: "row"}}>
            <HandVu h={state.ph}/>
            <HandVu h={state.dh}/>
        </div>
        <div>
            {state.msg}
        </div>
        <div>
            {/*<BlackjackButtons isGameActive={state.isActive} dispatch={dispatch} />*/}
        </div>
    </div>;

};