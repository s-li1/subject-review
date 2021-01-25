import React, { useContext } from 'react'
import Post from './Post/Post';
import AddPost from './AddPost';
import { UserContext } from '../../Providers/UserProvider';


export default function Posts({posts, onCreate}) {
    const user = useContext(UserContext);
    return (
        <div>
            <section className = "posts">
                {user ? <AddPost onCreate={onCreate}/> : <p>Sign in with your UTS email via Google to write a review</p>}
                <h1>Recent Reviews</h1>
                {posts.map( post => <Post {...post} key={post.id} />)}
            </section>
        </div>
    )
}
