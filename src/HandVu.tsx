import React from "react";
import {Card, Hand} from "./blackjack";
import {Co, Ro} from "./ss-react-utils";
import {useTheme} from "./Theme";

function cardToRo(c: Card) {
    return <Ro>
        {c.name}
    </Ro>;
}

export const HandVu = ({h}: { h: Hand }) => {

    const {backgroundColor} = useTheme();

    return <Co style={{padding: "1rem", backgroundColor,margin:'1rem'}}>
        <Ro style={{fontWeight:'bold'}}>{h.name} Hand</Ro>
        <Co>
            {h.cards.map(cardToRo)}
        </Co>
        <Ro style={{fontWeight:'bold'}}>
            {h.msg}
        </Ro>
    </Co>;
};