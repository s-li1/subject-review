import React from 'react'
import { BiSearch } from 'react-icons/bi'
export default function SearchBar(props) {

  
    return (
        <div className="searchBar">
            <BiSearch/>
            <input type="text" placeholder="Search Subject By Name" onChange={props.handleChange} />
        </div>
    )
}
