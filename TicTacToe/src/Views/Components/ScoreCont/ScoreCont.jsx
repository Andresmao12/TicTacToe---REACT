import style from "../ScoreCont/ScoreCont.module.css";
import Square from "../Square/Square";
import { TURNS } from "../../../../public/GlobalConst";

//FALTA PASAR EL TURNO DEL HIJO AL PADRE

const ScoreCont = ({sendTurn}) => {

  return (
    <div className={style.container}>
      <Square
        isSelected={sendTurn == TURNS.X ? true : false}
        content={TURNS.X}
      ></Square>
      <Square
        isSelected={sendTurn == TURNS.O ? true : false}
        content={TURNS.O}
      ></Square>
    </div>
  );
};

export default ScoreCont;
