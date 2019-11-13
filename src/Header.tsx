import React, {FC} from "react";
import logo from "./logo.svg";
import {useTheme} from "./Theme";
import {useUser} from "./User";

const HeaderInner: FC = () => {

    const user = useUser();
    const theme = useTheme();

    const {backgroundColor} = theme;

    return <div
        style={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor,
            padding: "1rem",
            alignItems: "center"
        }}>
        <img src={logo} style={{color: "blue"}} alt='logo' height={30} width={30}/>

        <div>
            Blackjack
        </div>

        <div>
            {user.userName}
        </div>

    </div>;
};

export const Header = React.memo(HeaderInner);