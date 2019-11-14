import React, {FC, useReducer} from 'react';
import {BjAction, Game} from './blackjack';
import {BlackjackGameVu} from './BlackjackGameVu';

const mkInitState = (): Game => {
    return Game.mk({shuffle: true});
};

const reducer = (oldGame: Game, action: BjAction): Game => {
    return oldGame.update(action);
};

export type BjDispatch = (action: BjAction) => void;

const initGame: Game = mkInitState();

export const BlackjackGame: FC = () => {

    const [state, dispatch] = useReducer(reducer, initGame);

    return <BlackjackGameVu state={state} dispatch={dispatch}/>;
};