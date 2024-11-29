import style from './Square.module.css';
import PropTypes from "prop-types";


const Square = ({children, index, updateBoard, isSelected})=>{

    const handleClick = ()=>{
        if (!index && index != 0) return

        updateBoard(index);
    }

    return (

        <>
            <div 
            className= {`${style.squareCont} ${isSelected ? style.active : null}` } 
            onClick = {handleClick}>
                {children}
            </div>
        </>

    )

}

Square.displayName = "Square"

Square.propTypes = {
    children : PropTypes.isRequired,
    index : PropTypes.isRequired,
    updateBoard : PropTypes.isRequired,
    isSelected : PropTypes.isRequired,
}

export default Square;