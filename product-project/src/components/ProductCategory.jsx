export default function ProductCategory({p}){
    return(
        <>
            <tr>
                <th colSpan={2}>
                    {p.category}
                 </th>
            </tr>
        </>
    )
}