import { useState, useEffect } from "react"
import Square from "./square"

const Board = () => {
    const [game, setGame] = useState([null, null, null, null, null, null, null, null, null])
    const [player, setPlayer] = useState(true)
    const [time, setTime] = useState(3)
    // const[play,replay] = useState(true)

    const handlePlay = (position) => {
        const newGame = game.map((games, index) => {
            if (index === position) {
                return player ? "X" : "O"
            }
          
            return games
            
        })
        setGame(newGame)
        setPlayer(!player)
        setTime(3)
       

    }
    
    const listWinner = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    const checkerWiner = () => {
        for (let i = 0; i < listWinner.length; i++) {
            const [p1, p2, p3] = listWinner[i]
            if (game[p1] === game[p2] && game[p2] === game[p3]) {
                return game[p1]
            }
        }
        return null
    }

    const win = checkerWiner()
    let check = "";
    let next = ""
    if (win) {
        check = ` Winner is :${win}`;
    } else if (!game.includes(null)) {//kiểm tra xem tồn tại ng thắng hay k
        console.log(!game.includes(null));
        check = "DRAW";
    } else {
        next = `Next Player: ${player ? "X" : "O"}`;
    }


    const reloadGame = () => {
        setGame(Array(9).fill(null))
        return; 
    }
    return <>
        <h2 className="text-2xl text-black-500 mb-4">{next}</h2>
        <h2 className="animate-bounce text-3xl text-pink-700 mb-5">{check}</h2>
        {/* <h2 className="text-1.5xl my-5">Game start :{time}</h2> */}
        <div className="grid grid-cols-3 gap-2 w-[240px] ">
            <Square value={game[0]} position={0} handlePlay={handlePlay} />
            <Square value={game[1]} position={1} handlePlay={handlePlay} />
            <Square value={game[2]} position={2} handlePlay={handlePlay} />
            <Square value={game[3]} position={3} handlePlay={handlePlay} />
            <Square value={game[4]} position={4} handlePlay={handlePlay} />
            <Square value={game[5]} position={5} handlePlay={handlePlay} />
            <Square value={game[6]} position={6} handlePlay={handlePlay} />
            <Square value={game[7]} position={7} handlePlay={handlePlay} />
            <Square value={game[8]} position={8} handlePlay={handlePlay} />
        </div>
        <div className="">
            {/* <button onClick={play}>Undo</button> */}
            <button onClick={reloadGame} className="h-10 px-6 font-semibold rounded-md bg-sky-500 hover:bg-sky-700  text-white my-5">Reset</button>
        </div>

    </>
}
export default Board