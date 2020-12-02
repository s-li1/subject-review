import React, { useState } from 'react'
import Posts from '../Components/Posts';
import { firestore } from '../Config/Firebase/db_config';
import { collectionofIdsAndDocs } from '../utilities';
import Main from '../Components/MainView/Main';
export default function Review(props, data) {



const [posts, setPosts] = useState([
    {
    id: 1,
    username: "Steven",
    review: "10/10"
    },
    {
    id: 2,
    username: "Emily",
    review: "This is my comment"
    }
]);


// useEffect( ()=> {
//   const unsubscribe = firestore.collection('posts').orderBy("date", "desc").onSnapshot( snapshot => {
//     const posts = snapshot.docs.map(collectionofIdsAndDocs);
//     console.log(posts);
//     setPosts (posts);
//   });
//   return unsubscribe;
// }, []);

const handleCreate = async (post) => {
    // console.log([post, ...posts]);
    post.date = new Date();
    //post.timestamp = firestore.FieldValue.serverTimestamp();
    // setPosts([post, ...posts]);
    //Returns promise referencing where doc is
    const documentRef = await firestore.collection('posts').add(post);

    //grab the document from the reference
    const document = await documentRef.get();

    const newPost = collectionofIdsAndDocs(document);

    setPosts([newPost, ...posts])
    
};

    return (
        <Main>
            <div>
                <Posts posts = {posts} onCreate={handleCreate}/>
            </div>
        </Main>
       
    )
}
