export type User = {
    userName: string;
}

export const fetchUser = async (): Promise<User> => {
    return Promise.resolve({
        userName: "dave"
    });
};