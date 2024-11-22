import style from './App.module.css'
import ScoreCont from '../Components/ScoreCont/ScoreCont'
import GridCont from '../Components/GridCont/GridCont'
import Square from '../Components/Square/Square'

import { useState } from 'react'
import { TURNS, FinallyStates } from '../../../public/GlobalConst'

function App() {

  const [turn, setTurn] = useState(TURNS.X)
  const [isWinner, setIsWinner] = useState(FinallyStates.CURRENT)

  const changeTurn = (newTurn)=>{
    setTurn(newTurn)
  }

  const handleIsWinner = (winner)=>{
    setIsWinner(winner)
  }

  const ResetGame = ()=>{
    setTurn(TURNS.X)
    setIsWinner(FinallyStates.CURRENT)
  }

  return (
    <>
     <h1>Tic-tac-toe</h1>
     <GridCont sendNewTurn = {changeTurn} turn = {turn} sendWinner={handleIsWinner} winner = {isWinner}/>
     <ScoreCont turn = {turn}/>

    {(isWinner !== FinallyStates.CURRENT && isWinner !== FinallyStates.TIE) && (
      <div className={style.capa}>

        <div className={style.modal}>
          {isWinner !== null && 
            <>
              <span>Winner is</span>
              <Square>{isWinner}</Square>
            </>}
          {isWinner == FinallyStates.TIE && <span>Game is TIED</span>}

          <button className={style.btnReset}>Reset game</button>

        </div>

      </div>
    )}

    </>
  )
}

export default App
