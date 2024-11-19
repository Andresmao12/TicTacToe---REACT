import styles from "./GridCont.module.css";
import Square from "../Square/Square";
import {TURNS} from '../../../../public/GlobalConst'

import { useState } from "react";

const GridCont = ({turn, sendChangeTurn}) => {
    const [board, setBoard] = useState(Array(9).fill(""))

    const updateBoard = ()=>{
        const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
        sendChangeTurn(newTurn)
    }

    return (
        <div className={styles.gridCont}>
            {board.map((element, index) => {
                return (
                    <Square
                        key={index}
                        content={index}
                        updateBoard = {updateBoard}
                    ></Square>
                );
            })}
        </div>
    );
};

export default GridCont;
