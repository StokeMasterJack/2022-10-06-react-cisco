import React, {FC, useState} from "react";
import {BjAction, Game} from "./blackjack";
import {BlackjackGameVu} from "./BlackjackGameVu";

const mkInitState = (): Game => {
    return Game.mk({shuffle: true});
};

export type Dispatch = (action: BjAction) => void;

export const BlackjackGame: FC = () => {

    const [state, setState] = useState<Game>(mkInitState);

    const reducer = (oldGame: Game, action: BjAction): Game => {
        const newGame = oldGame.update(action);
        return newGame;
    };

    const dispatch = (action: BjAction) => {
        const newState = reducer(state, action);
        setState(newState);
    };


    return <BlackjackGameVu state={state} dispatch={dispatch}/> ;
};