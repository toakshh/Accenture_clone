import search from "../../../assets/svg/search.svg"

const Search = () => {
    return (
        <div className="d-flex">
            <img src={search} alt="search" className="w-10"/>
            <h6 className="sm:hidden">INDIA</h6>
        </div>
    )
}

export default Search