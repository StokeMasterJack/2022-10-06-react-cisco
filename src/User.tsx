export type User = {
    userName: string;
}

export const mkUser = async (): Promise<User> => {
    return Promise.resolve({
        userName: "dave"
    });
};