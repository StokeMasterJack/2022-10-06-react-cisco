import {BackgroundColorProperty, ColorProperty} from "csstype";

export type Theme = {
    primaryColor: ColorProperty,
    backgroundColor: BackgroundColorProperty,
};

export const mkTheme = async (): Promise<Theme> => {
    return Promise.resolve({
        primaryColor: "blue",
        backgroundColor: "lightgrey"
    });
};