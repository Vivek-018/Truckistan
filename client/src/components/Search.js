import React from 'react'
import '../style/search.css'

const Search = () => {
  return (
    <>
          <div className="searchbar">
            <div className="search-input">
                <input type="text" className="form-control"  placeholder="Search..." />
                <button  className="btn">Search</button>
            </div>
        </div>
    </>
  )
}

export default Search
