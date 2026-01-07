import { useState } from "react";
import Square from "./Square";

export default function Board(){
    const[squares, setSquares]=useState(Array(9).fill(null));
    const[xisNext, setXisNext] = useState(true);

    let status;
    const winner = checkWinner(squares);
    if(winner){
        status = "Winner is "+winner;
    }
    else{
        status ="Next turn : "+(xisNext?'X':'O');
    }

    function resetBtn(){
        setSquares(Array(9).fill(null));
    }
    

    function handleClick(i){

        if(squares[i] || checkWinner(squares)) return;
        const nxtSquares = squares.slice();
        
        if(xisNext){
            nxtSquares[i]= 'X';
        }else{
            nxtSquares[i]= 'O';
        }
        setSquares(nxtSquares);
        setXisNext(!xisNext);
    }

    function checkWinner(squares){
        const lines=[
            [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
        ]
        for(let i=0;i<lines.length;i++){
            const [a,b,c] = lines[i];
            if(squares[a]&&squares[a] === squares[b]&&squares[a]===squares[c]){
                return squares[a];
            }
        }
        return null;
    }

    return(
        <>
            <div>
                <h1>
                {status}
                </h1>
            </div>
            <div className="rows">
                <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
                <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
            </div>
            <div className="rows">
                <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
                <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
            </div>
            <div className="rows">
                <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
                <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
            </div>
            <br />
            <button className="btn" onClick={()=>resetBtn()}>reset</button>
        </>
    )
}