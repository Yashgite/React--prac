export default function SearchBar({filterText, setFilterText}){

    return(
        <>
            <form>
                <input type="text" placeholder="Enter..." value={filterText} onChange={(e)=> setFilterText(e.target.value)}/>
            </form>
        </>
    )
}