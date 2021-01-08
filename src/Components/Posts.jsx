import React from 'react'
import Post from './Post';
import AddPost from './AddPost';

export default function Posts({posts, onCreate}) {
    return (
        <div>
            <section className = "posts">
                <AddPost onCreate={onCreate}/>
                {posts.map( post => <Post {...post} key={post.id} />)}
            </section>
        </div>
    )
}
