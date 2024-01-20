const Box = (props) => {
    
    const clickHandler = ()=>{
        props.onClick(props.index)
    }
    return(
        <>
            <div className="square" onClick={clickHandler}>{props.value}</div>
        </>
    )
}
export default Box 