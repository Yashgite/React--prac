export default function Square({value, onSquareClick}){
    return(
        <>
            <button className="square" onClick={onSquareClick}><h1>{value}</h1></button>
        </>
    )
}