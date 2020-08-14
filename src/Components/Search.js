import React from "react";

const Search =()=>{
    return(
        <div>
            <form>
                <div className="search-bar-container">
                <div className="search-bar">
                    <input className="searchIcon" type="image" src="/Assets/icon_search.png" alt="Submit" width="19" height="19"/>
                    <input className="searchInupt" type="text" placeholder="Search" name="search"/> 
                </div>
                </div>

            </form>
        </div>
    )
}
export default Search;