import React from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import '../Posts.css';

const Star = ({ selected = false, onClick = event => event}) => (
    <div onClick={onClick}>
        {selected ? <BsStarFill className="star selected"/> : <BsStar className="star"/>}
    </div>
)

export default Star;