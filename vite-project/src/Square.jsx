export default function Square({value, onSquareClick}){
    return (
        <>
        <button className="square border-2 items-center " onClick={onSquareClick}>{value}</button>
        </>
    )
}