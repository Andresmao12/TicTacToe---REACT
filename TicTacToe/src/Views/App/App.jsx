import style from './App.module.css'
import ScoreCont from '../Components/ScoreCont/ScoreCont'
import GridCont from '../Components/GridCont/GridCont'
import Square from '../Components/Square/Square'

import { useState,  useRef } from 'react'
import { TURNS, FinallyStates } from '../../../public/GlobalConst'

function App() {

  const [turn, setTurn] = useState(()=>{
    const gameState = JSON.parse(window.localStorage.getItem("gameState"))
    return gameState?.turnState ?? TURNS.X
  })

  const [isWinner, setIsWinner] = useState(FinallyStates.CURRENT)
  const gridRef = useRef(null);


  const changeTurn = (newTurn)=>{
    setTurn(newTurn)
  }

  const handleIsWinner = (winner)=>{
    setIsWinner(winner)
  }

  const ResetGame = ()=>{
    setTurn(TURNS.X)
    setIsWinner(FinallyStates.CURRENT)

    if(gridRef.current){
      gridRef.current.resetBoard();
      window.localStorage.removeItem("gameState")
    }
  }


  return (
    <>
     <h1>Tic-tac-toe</h1>
     <GridCont sendNewTurn = {changeTurn} turn = {turn} sendWinner={handleIsWinner} winner = {isWinner} ref={gridRef}/>
     <ScoreCont turn = {turn} resetGame={ResetGame}/>

    {(isWinner !== FinallyStates.CURRENT) && (
      <div className={style.capa}>

        <div className={style.modal}>
          {isWinner == FinallyStates.TIE? (
              <>
                <span>Game is TIED</span>
                <Square>{'😥'}</Square>
              </>
            ) : (
              <>
                <span>Winner is</span>
                <Square>{isWinner}</Square>
              </>
            )}

          <button className={style.btnReset} onClick={ResetGame}>Reset game</button>

        </div>

      </div>
    )}

    </>
  )
}

export default App
