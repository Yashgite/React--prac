import ProductCategory from "./ProductCategory"
import Products from "./Products"
import SearchBar from "./SearchBar";
export default function ProductTable({products}){
    const rows=[];
    let lastCategory = null;
    products.forEach(p=>{
        if(lastCategory){
            rows.push(<ProductCategory key={p.name} p={p}/>);
         
        }

        rows.push(<Products p={p} key={p.name}/>)
    })
    return(
        <>
            <table>
                <thead>
                        <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Price
                        </th>
                        </tr>
                </thead>
               
                <tbody>{rows}</tbody>
            </table>
        </>
    )
}