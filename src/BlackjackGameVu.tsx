import React from "react";
import {Game} from "./blackjack";
import {BlackjackButtons} from "./BlackjackButtons";
import {BjDispatch} from "./BlackjackGame";
import {HandVu} from "./HandVu";
import {Co, Ro} from "./ss-react-utils";

export const BlackjackGameVu = ({state, dispatch}: { state: Game, dispatch: BjDispatch }) => {

    return <Co>
        <h1>Blackjack</h1>
        <Ro style={{justifyContent:'center'}}>
            <HandVu h={state.ph}/>
            <HandVu h={state.dh}/>
        </Ro>

        <Ro style={{fontWeight:'bold',fontSize:'18pt',color:'darkcyan',justifyContent:'center',margin:'1rem'}}>
            {state.msg}
        </Ro>

        <Ro style={{justifyContent:'center',margin:'1rem'}}>
            <BlackjackButtons isGameActive={state.isActive} dispatch={dispatch} />
        </Ro>

    </Co>;

};