import Square from "./Square"

export default function Board({xisNext, squares, onPlay}){
    

    function handleClick(i){
        
        const nextSquares = squares.slice();
        if(squares[i] || checkWinner(squares) || squares.every(square => square!== null)) return;
        if(xisNext){
            nextSquares[i] = 'X'
        }else{
            nextSquares[i] = 'O'
        }
        
        onPlay(nextSquares);
    }

    const winner = checkWinner(squares);
    const isDraw = !winner && squares.every(square => square!== null);
        let status;
        if(winner){
            status = "Winner is "+winner;
        }
        else if(isDraw){
            status = "its Drawwwww"
        }
        else{
            status = "Next turn : "+(xisNext?'X':'O');
        }

    function checkWinner(squares){
        const lines =[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
            [1,4,7],
            [2,5,8]
        ];
        for(let i=0;i<lines.length;i++){
            const[a,b,c] = lines[i];

            if(squares[a] && squares[a] === squares[b]&&squares[a]===squares[c]){
                return squares[a];
            }
        }
        return null;
 
    }


    return(
        <>
        <div>{status}</div>
        <div className="flex">
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)}/>
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)}/>
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)}/>
        </div>
        <div className="flex">
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)}/>
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)}/>
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)}/>
        </div>
        <div className="flex">
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)}/>
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)}/>
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)}/>
        </div>
        
        </>
    )
}