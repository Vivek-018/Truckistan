import React from 'react'
import '../style/search.css'

const Search = ({ placeholder }) => {
  return (
    <>
      <div className="searchbar">
        <div className="search-input">
          <input type="text" className="form-control" placeholder={placeholder} />
          <button className="btn">Search</button>
        </div>
      </div>
    </>
  )
}

export default Search
