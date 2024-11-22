import style from './Square.module.css';

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

export default Square;