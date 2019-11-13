import React, {useState} from "react";
import "./App.css";
import {Header} from "./Header";
import {useAsync} from "./ss-react-utils";
import {ensure} from "./ss-util";
import {fetchTheme, Theme} from "./Theme";
import {fetchUser, User} from "./User";

type AppLoadedProps = {
    theme: Theme;
    user: User;
};

const AppLoaded = ({theme, user}: AppLoadedProps) => {
    return <div className="App">
        <Header theme={theme} user={user}/>
    </div>;
};

const AppLoading = () => {
    return <div>Loading</div>;
};

const App: React.FC = () => {

    const [theme, setTheme] = useState<Theme | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useAsync({
        op: fetchTheme,
        onSuccess: setTheme,
        deps: []
    });

    useAsync({
        op: fetchUser,
        onSuccess: setUser,
        deps: []
    });

    if (user !== null && theme !== null) {
        return <AppLoaded theme={theme} user={ensure(user)}/>;
    } else {
        return <AppLoading/>;
    }

};

export default App;
