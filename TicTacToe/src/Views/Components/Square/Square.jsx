import style from './Square.module.css';

const Square = ({content,isSelected, updateBoard})=>{

    const handleClick = ()=>{
        updateBoard();
    }

    return (

        <>
            <div 
            className= {`${style.squareCont} ${isSelected ? style.active : null}` } 
            onClick = {handleClick}>
                {content}
            </div>
        </>

    )

}

export default Square;