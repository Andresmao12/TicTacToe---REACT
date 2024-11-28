import styles from "./GridCont.module.css";
import Square from "../Square/Square";
import {TURNS, FinallyStates} from '../../../../public/GlobalConst'
import confetti from 'canvas-confetti'

import { useState, useEffect, forwardRef, useImperativeHandle} from "react";

const GridCont = forwardRef(({turn, sendNewTurn, winner, sendWinner}, ref) => {
    const [board, setBoard] = useState(Array(9).fill(null))

    useEffect(()=>{

        const gameState = JSON.parse(window.localStorage.getItem("gameState"));

        if(!gameState?.boardState?.every(element => element == null) && gameState != null) setBoard(gameState?.boardState)

    }, [])

    const updateBoard = (index)=>{

        //Validamos que no tenga valor y que no haya ganador o empate
        if (board[index] || winner != FinallyStates.CURRENT) return;

        //Actualizamos el tablero
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard)

        const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;

        window.localStorage.setItem("gameState", JSON.stringify({boardState : newBoard, turnState : newTurn}))

        //Validamos si hay ganador y almacenamos
        const winnerResult = winnerValidation(newBoard)

        if (winnerResult) { //Hay ganador
            sendWinner(winnerResult)
            confetti()

            // winnerResult == TURNS.X ?? 

            const getScore = JSON.parse(localStorage.getItem("score")) || null;

            if (getScore){

                let scoreX = getScore.X;
                let scoreO = getScore.O;

                winnerResult == TURNS.X ? scoreX++ : scoreO++;

                const score = {X : scoreX, O : scoreO}
                window.localStorage.setItem("score", JSON.stringify(score))

            }else {

                window.localStorage.setItem("score", JSON.stringify({X : 0, O : 0}))
            }

            
            window.localStorage.removeItem("gameState")
        
        }else if(tiedValidation(newBoard)){ //Hay empate
            sendWinner(FinallyStates.TIE)

        }else { //Cambiamos de turno
            sendNewTurn(newTurn)
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

    useImperativeHandle(ref, ()=>({
        resetBoard : ()=> setBoard(Array(9).fill(null)),
        getBoard : ()=> board,
        setBoard : (newBoard) => setBoard(newBoard),
    }))

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
});

export default GridCont;
