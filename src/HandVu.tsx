import React from "react";
import {Card, Hand} from "./blackjack";
import {Co, Ro} from "./ss-react-utils";
import {useTheme} from "./Theme";

function cardToRo(c: Card) {
    return <Ro key={c.name}>
        {c.name}
    </Ro>;
}

const HandVuInner = ({h}: { h: Hand }) => {
    console.log('HandVuInner.render');
    const {backgroundColor} = useTheme();

    return <Co style={{padding: "1rem", backgroundColor, margin: "1rem", width: "10rem", height: "10rem"}}>
        <Ro style={{fontWeight: "bold"}}>{h.name} Hand</Ro>
        <Co>
            {h.cards.map(cardToRo)}
        </Co>
        <Ro style={{fontWeight: "bold"}}>
            {h.msg}
        </Ro>
    </Co>;
};

export const HandVu = React.memo(HandVuInner);