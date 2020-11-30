import React, { useState } from 'react'

export default function SearchBar(props) {

    const[input, setInput] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    };

    if (input.length > 0) {
        props.data.filter((index)=> {
            console.log(index.name.match(input));
            return index.name.match(input);
        });
    }
    return (
        <>
            <input type="text" placeholder="Search Subject" onChange={handleSearch} value={input}/>
        </>
    )
}
