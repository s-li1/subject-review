import React from 'react';
import FixedStarRating from '../../StarRating/StarRating';

export default function Post({ username = "Steven", review = "Hello this is my comment", createdAt, rating = 5}) {
    return (
        <div>
            <article className="post">
                <div className="content">
                    <FixedStarRating rating={rating} />
                    <h3>{username}</h3>
                    <div>{review}</div>
                </div>
                <div className="info">
                </div>
            </article>
            
        </div>
    )
}
