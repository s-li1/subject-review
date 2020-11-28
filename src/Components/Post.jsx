import React from 'react';

export default function Post({ username = "Steven", review = "Hello this is my comment", createdAt, stars}) {
    return (
        <div>
            <article className="post">
                <div className="content">
                    <h3>{username}</h3>
                    <div>{review}</div>
                </div>
                <div className="info">
                </div>
            </article>
            
        </div>
    )
}
