import React from 'react'
import { BiSearch } from 'react-icons/bi'
export default function SearchBar({search = true, handleChange}) {

  
    return (
        <div className="searchBar">
            <BiSearch/>
            <input type="text" placeholder="Search Subject By Name" disabled={search} onChange={handleChange} />
        </div>
    )
}
