import React, {CSSProperties, DependencyList, useEffect} from "react";

export type Op<T> = () => Promise<T>;
export type OnSuccess<T> = (date: T) => void;


export function useAsync<T>({op, onSuccess, deps}: { op: Op<T>, onSuccess: OnSuccess<T>, deps?: DependencyList }) {

    useEffect(() => {
        const doOp = async () => {
            const data: T = await op();
            onSuccess(data);
        };
        doOp();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}


type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
const roStyle: CSSProperties = {display: "flex", flexDirection: "row"};
const coStyle: CSSProperties = {display: "flex", flexDirection: "column"};

export const Ro = (props: DivProps) => {

    const pStyle: CSSProperties | undefined = props.style;

    const newStyle: CSSProperties = pStyle === undefined ? roStyle : {...pStyle, ...roStyle};

    const p = {...props, style: newStyle};

    return <div {...p} >
        {props.children}
    </div>;
};

export const Co = (props: DivProps) => {

    const pStyle: CSSProperties | undefined = props.style;

    const newStyle: CSSProperties = pStyle === undefined ? coStyle : {...pStyle, ...coStyle};

    const p = {...props, style: newStyle};

    return <div {...p} >
        {props.children}
    </div>;
};