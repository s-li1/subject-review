import React, { useState } from 'react';
import './Posts.css';

export default function AddPost({onCreate}) {

    const initialPostState = {
        username: '',
        review: '',
    }

    const [post, setPost] = useState(initialPostState);

    const [cancelButton, setCancelButton] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if(post.review.length > 0 ) {
            setCancelButton(true);
        }
        setPost ({...post, [name]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (!post.review) {
            return;
        }
        if (post.username === null || post.username === '') {
            post.username = "Anonymous";
        }
        onCreate(post);
        setPost(initialPostState);
        setCancelButton(!cancelButton);
    }

    const handleResetFields = ()=> {
        setPost(initialPostState);
        setCancelButton(!cancelButton);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="addPost">
                <input
                    type="text"
                    name="username"
                    placeholder="Write your name (or leave as anonymous)"
                    value={post.username}
                    onChange={handleInputChange}/>

                    <textarea id="reviewBox" name="review" rows="4" cols="50" placeholder="Share your thoughts..." value={post.review} onChange={handleInputChange}/>
                    <div className="options">
                        <button className="blue submit button">Submit</button>
                        <input type="button" className={cancelButton ? "button" : "button none"} value="Cancel" onClick={handleResetFields}/>
                    </div>
            </form>
        </div>
    )
}
