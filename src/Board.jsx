import Box from './Box'

const Board = (props) => {
    return (
        <div className='board'>
            <div className='board-row'>
                <Box value={props.placements[0]} index={0} onClick={props.onClick} />
                <Box value={props.placements[1]} index={1} onClick={props.onClick}/>
                <Box value={props.placements[2]} index={2} onClick={props.onClick}/>
            </div>
            <div className='board-row'>
                <Box  value={props.placements[3]}index={3} onClick={props.onClick}/>
                <Box  value={props.placements[4]}index={4} onClick={props.onClick}/>
                <Box  value={props.placements[5]}index={5} onClick={props.onClick}/>
            </div>
            <div className='board-row'>
                <Box  value={props.placements[6]}index={6} onClick={props.onClick}/>
                <Box  value={props.placements[7]}index={7} onClick={props.onClick}/>
                <Box  value={props.placements[8]}index={8} onClick={props.onClick} />
            </div>

        </div>
    )
}
export default Board