import React from 'react'

export default function SearchBar(props) {

  
    return (
        <input type="text" placeholder="Search Subject" onChange={props.handleChange} />
    )
}
