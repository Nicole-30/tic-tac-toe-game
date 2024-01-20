import { useEffect, useState } from 'react';
import Board from './Board';


const Game = () => {

    const [placements, setPlacements] = useState(Array(9).fill(null))
    const [player, setPlayer] = useState('X')
    const [count, setCount] = useState(0)
    const [winner, setWinner] = useState('')
    // console.log(placements);

    useEffect(() => {
        if (count < 5) return;
        const winner =
            checkWinner();
        if (winner) {
            setWinner(winner)
        }
    }, [count]);


    const played = (index) => {
        //check if the place has been occupied
        //or there is a winner
        //in the placement array
        //if there is, then we stop the playing by returning
        if (placements[index] || winner) return

        const updatedPlacements = [...placements]
        updatedPlacements[index] = player;
        setPlacements(updatedPlacements)

        // console.log('played index: ', index);

        //procedure to track our plays
        // placements[index] = player
        // setPlacements(placements)

        //switch players

        if (player === 'X') {
            setPlayer('O')
        } else {
            setPlayer('X')
        }

        //or
        //setPlayer(player == 'X'? '0': 'X')

        //update the count
        setCount(count + 1)
    }

    const checkWinner = () => {
        console.log(count);
        const winningLines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let line of winningLines) {
            const [a, b, c] = line;

            if (placements[a] === placements[b] &&
                placements[b] === placements[c] &&
                placements[a] !== null) {
                setWinner(placements[a]);
                console.log(placements[a]);
                return placements[a]; // Return the winning player
            }
        }
        return null; // No winner, return null
    };


    const resetPlay = () => {
        //reset the winner to the default value
        setWinner('')

        //reset the placement to the default value
        setPlacements(Array(9).fill(null))

        //reset the player to the default player
        setPlayer('X')
    }

    const revertPlay = () => {
        if (count === 0) return; // No plays to revert
    
        const updatedPlacements = [...placements];
        updatedPlacements[updatedPlacements.lastIndexOf(player)] = null; // Revert the last player's placement
        setPlacements(updatedPlacements);
    
        setPlayer(player === 'X' ? 'O' : 'X');
        setCount(count - 1);
    };

    return (
        <div className='game'>
            <div className='stats'>
                Game winner: {winner}<br />
                Current player: {player}
            </div>

            <Board placements={placements} onClick={played} />

            <div className='actions'>
                <button className='revert-but' onClick={() => revertPlay()}>
                    Back
                </button>
                <button className='reset-but' onClick={() => resetPlay()}>
                    Reset
                </button>
            </div>
        </div>
    )
}
export default Game