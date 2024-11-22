import styles from "./GridCont.module.css";
import Square from "../Square/Square";
import {TURNS, FinallyStates} from '../../../../public/GlobalConst'

import { useState } from "react";

const GridCont = ({turn, sendNewTurn, winner, sendWinner}) => {
    const [board, setBoard] = useState(Array(9).fill(null))

    const updateBoard = (index)=>{

        //Validamos que no tenga valor y que no haya ganador o empate
        if (board[index] || winner != FinallyStates.CURRENT) return;

        //Actualizamos el tablero
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard)

        //Validamos si hay ganador y almacenamos
        const winnerResult = winnerValidation(newBoard)

        if (!winnerResult) { //No hay ganador

            //Validamos si hay empate
            if(tiedValidation(newBoard)) sendWinner(FinallyStates.TIE)

            //Cambiamos el turno
            sendNewTurn(turn == TURNS.X ? TURNS.O : TURNS.X)

        }else if(winnerResult){ //Hay ganador
            sendWinner(winnerResult)
        }

        
    }

    const winnerValidation = (board)=>{

        const patterns = [
             // Filas
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            // Columnas
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            // Diagonales
            [0, 4, 8], [2, 4, 6]
        ]

        for (const [a, b, c] of patterns) {
            if (board[a] && board[a] == board[b] && board[a] == board[c]) {
                return board[a]
            }
        }
        return false
    }

    const tiedValidation = (board)=>{
        return board.every(element => element != null)
    }

    const resetGame = ()=>{
        setBoard(Array(9).fill(null))
    }

    return (
        <div className={styles.gridCont}>
            {board.map((element, index) => {
                return (
                    <Square
                        key={index}
                        index = {index}
                        updateBoard = {updateBoard}
                    > {board[index]} </Square>
                );
            })}
        </div>
    );
};

export default GridCont;
