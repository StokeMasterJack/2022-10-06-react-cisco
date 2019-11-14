import React, {FC, useCallback, useState} from "react";
import {BjAction, Game} from "./blackjack";
import {BlackjackGameVu} from "./BlackjackGameVu";

const mkInitState = (): Game => {
    return Game.mk({shuffle: true});
};

const reducer = (oldGame: Game, action: BjAction): Game => {
    const newGame = oldGame.update(action);
    return newGame;
};

export type Dispatch = (action: BjAction) => void;

export const BlackjackGame: FC = () => {

    const [state, setState] = useState<Game>(mkInitState);

    const dispatchInner = (action: BjAction) => {
        setState((oldState: Game) => reducer(oldState, action));
    };

    const dispatch = useCallback(dispatchInner, []);

    return <BlackjackGameVu state={state} dispatch={dispatch}/>;
};