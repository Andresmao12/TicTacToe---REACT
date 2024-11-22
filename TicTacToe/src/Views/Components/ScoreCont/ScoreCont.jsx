import style from "../ScoreCont/ScoreCont.module.css";
import Square from "../Square/Square";
import { TURNS } from "../../../../public/GlobalConst";


const ScoreCont = ({turn, resetGame}) => {

  const handleResetGame = ()=>{
    resetGame()
  }

  return (
    <div className={style.container}>
      <Square
        isSelected={turn == TURNS.X ? true : false}
      > {TURNS.X} </Square>
      <Square
        isSelected={turn == TURNS.O ? true : false}
      > {TURNS.O} </Square>
      <button className={style.btnReset} onClick={handleResetGame}>Reset game</button>
    </div>
  );
};

export default ScoreCont;
