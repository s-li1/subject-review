import React, { useState } from 'react';
import Star from './Star';
import '../Posts.css';

export default function FixedStarRating({rating}) {
    const totalStars = [0,1,2,3,4];
    const[starsSelected] = useState(rating);
    return (
        <div className="star-rating">
            {totalStars.map((star)=> (
                <Star key={star} selected={ star < starsSelected}/>
            ))}
        </div>

    )
}