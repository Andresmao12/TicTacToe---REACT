import style from "../ScoreCont/ScoreCont.module.css";
import Square from "../Square/Square";
import { TURNS } from "../../../../public/GlobalConst";
import PropTypes from "prop-types";

const ScoreCont = ({turn, validationReset}) => {

  const handleValidationReset = ()=>{
    validationReset()
  }

  const getScore = JSON.parse(localStorage.getItem("score")) || null;

  let score = {X : 0, O : 0}

  if (getScore) {

    score.X = getScore.X;
    score.O = getScore.O;
  }

  return (
    <div className={style.container}>
      <Square
        isSelected={turn == TURNS.X ? true : false}
      > {TURNS.X} - {score.X} </Square>
      <Square
        isSelected={turn == TURNS.O ? true : false}
      > {TURNS.O} - {score.O} </Square>
      <button className={style.btnReset} onClick={handleValidationReset}>Reset game</button>
    </div>
  );
};

ScoreCont.displayName = "ScoreCont";

ScoreCont.propTypes = {
  turn : PropTypes.isRequired,
  validationReset : PropTypes.isRequired
}

export default ScoreCont;
