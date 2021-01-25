import React, { useContext } from 'react'
import Post from './Post/Post';
import AddPost from './AddPost';
import { UserContext } from '../../Providers/UserProvider';


export default function Posts({posts, onCreate}) {
    const user = useContext(UserContext);

    const isSignedInWithUTSAccount = ()=> {
        if(user !=null) {
            const { email } = user;
            return email.includes("@student.uts.edu.au");
        }
    }
        
    return (
        <div>
            <section className = "posts">
                {
                    (user && isSignedInWithUTSAccount()) ? <AddPost onCreate={onCreate}/> : user ? <p>Currently signed with <b>{user.email}</b>. <br/> Sign in with your UTS student email via Google to write a review <br/> eg.12345678@student.uts.edu.au</p> : <p>Sign in with your UTS student email via Google to write a review <br/> eg.12345678@student.uts.edu.au</p>
                }
                <h1>Recent Reviews</h1>
                {posts.map( post => <Post {...post} key={post.id} />)}
            </section>
        </div>
    )
}
