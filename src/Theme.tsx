import {BackgroundColorProperty, ColorProperty} from "csstype";

export type Theme = {
    primaryColor: ColorProperty,
    backgroundColor: BackgroundColorProperty,
};

export const fetchTheme = async (): Promise<Theme> => {
    return Promise.resolve({
        primaryColor: "blue",
        backgroundColor: "lightgrey"
    });
};