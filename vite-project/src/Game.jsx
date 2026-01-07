import { useState } from "react";
import Board from "./Board";

export default function Game(){
    const[history,setHistory] = useState([Array(9).fill(null)]);
    const[currentMove, setCurrentMove] = useState(0);
    const xisNext = currentMove%2 === 0;
    const currentSquares = history[currentMove];

    function jumpTo(nextMove){
        setCurrentMove(nextMove);
        // adding the logic of reset game
        // if(nextMove==0){
        //     setHistory([Array(9).fill(null)]);
        //     setCurrentMove(0);
        // }
    }

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    const moves = history.map((squares, move)=>{
        let description ;

        // make the go to start game button after one turn , it checks if move === 0 and length of history is 1 then return null 
        if(move === 0 && history.length === 1) return;


        if(move>0){
            description = "Go to "+move;
        }
        else{
            description = "Go to start game"
        }
        return(
                       
                    <li key={move}>
                    <button  onClick={()=>jumpTo(move)}>{description}</button>
                    </li>
                      
        )
    })

    function handleReset(){
        setHistory([Array(9).fill(null)]);
        setCurrentMove(0);
    }

    return(
    <>
    <div>
        <Board xisNext={xisNext} squares ={currentSquares} onPlay ={handlePlay}/>
    </div>
    
    <div>
        <button style={{color:'red', padding:'10px', margin:'20px'}} onClick={handleReset}>Reset Game</button>
    </div>
    <div>
        <ol>{moves}</ol>
    </div>
    </>)
}