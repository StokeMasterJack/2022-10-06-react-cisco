import React, {useState} from "react";
import "./App.css";
import {Header} from "./Header";
import {useAsync} from "./ss-react-utils";
import {fetchTheme, Theme} from "./Theme";
import {fetchUser, User, UserCtx} from "./User";


type AppLoadedProps = {
    theme: Theme;
};


const AppLoaded = ({theme}: AppLoadedProps) => {

    return <div className="App">
        <Header theme={theme}/>
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

    //  <TContext.Provider value={t}>
    if (user !== null && theme !== null) {
        return <UserCtx.Provider value={user}>
            <AppLoaded theme={theme}/>;
        </UserCtx.Provider>;
    } else {
        return <AppLoading/>;
    }

};

export default App;
