import React, {FC} from "react";
import logo from "./logo.svg";
import {Theme} from "./Theme";
import {User} from "./User";

type HeaderProps = { theme: Theme, user: User };

const HeaderInner: FC<HeaderProps> = ({theme, user}: HeaderProps) => {

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