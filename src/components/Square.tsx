import React from "react";
import {ISquare} from "../interface";

// type層
// リテラル型
interface SquareProps {
    value: ISquare
    onClick: () => void
}

function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square