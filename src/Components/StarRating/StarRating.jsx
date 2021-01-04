import React, { useState } from 'react';
import Star from './Star';
import '../Posts.css';

export default function StarRating() {
    const totalStars = [1,2,3,4,5];
    const[starsSelected, setStarsSelected] = useState(0);
    return (
        <div className="star-rating">
            {totalStars.map((star)=> (
                <Star key={star} selected={ star < starsSelected}
                onClick={()=> setStarsSelected(star + 1)}/>
            ))}
        </div>

    )
}