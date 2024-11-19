import './App.module.css'
import ScoreCont from '../Components/ScoreCont/ScoreCont'
import GridCont from '../Components/GridCont/GridCont'

import { useState } from 'react'
import { TURNS } from '../../../public/GlobalConst'

function App() {

  const [turn, setTurn] = useState(TURNS.X)

  const changeTurn = (newTurn)=>{
    setTurn(newTurn)
  }

  return (
    <>
     <h1>Tic-tac-toe</h1>
     <GridCont sendChangeTurn = {changeTurn} turn = {turn}/>
     <ScoreCont sendTurn = {turn}/>
    </>
  )
}

export default App
