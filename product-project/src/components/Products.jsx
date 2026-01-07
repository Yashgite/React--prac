export default function Products({p}){
    const names=(p.stocked)?p.name:<span style={{color:'red'}}>{p.name}</span>;
    return(
        <>
           <tr>{names}</tr>
        </>
    )
}