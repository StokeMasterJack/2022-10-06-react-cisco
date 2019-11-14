import React from "react";
import {Card, Hand} from "./blackjack";
import {Co, Ro} from "./ss-react-utils";

function cardToRo(c: Card) {
    return <Ro>
        {c.name}
    </Ro>;
}

export const HandVu = ({h}: { h: Hand }) => {
    return <Co>
        <Ro>{h.name} Hand</Ro>
        <Co>
            {h.cards.map(cardToRo)}
        </Co>
        <Ro>
            {h.msg}
        </Ro>
    </Co>;
};