import React, {useEffect, useState} from "react";
import "./App.css";
import {Header} from "./Header";
import {mkTheme, Theme} from "./Theme";
import {mkUser, User} from "./User";


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

function ensure<T>(o: T | null): T {
    if (o === undefined || o === null) {
        throw Error("Expecting a defined and non-null value");
    }
    return o;
}

const App: React.FC = () => {

    const [theme, setTheme] = useState<Theme | null>(null);
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {

        const fetchTheme = async () => {
            const theme = await mkTheme();
            setTheme(theme);
        };

        fetchTheme();


    }, []);

    useEffect(() => {

        const fetchUser = async () => {
            const user = await mkUser();
            setUser(user);
        };

        fetchUser();


    }, []);

    const fullyLoaded: boolean = theme !== null && user !== null;

    return (
        <div className="App">
            {!fullyLoaded ? <AppLoading/> : <AppLoaded theme={ensure(theme)} user={ensure(user)}/>}
        </div>
    );
};

export default App;
