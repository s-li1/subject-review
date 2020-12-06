import React, { useState, useEffect } from 'react'
import Posts from '../Components/Posts';
import { firestore } from '../Config/Firebase/db_config';
import { collectionofIdsAndDocs } from '../utilities';
import Main from '../Components/MainView/Main';
import allSubjects from '../Data/IT.json';
export default function Review({match}) {

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
//     const unsubscribe = firestore.collection(`${match.params.subjectId}`).orderBy("date", "desc").onSnapshot( snapshot => {
//     const posts = snapshot.docs.map(collectionofIdsAndDocs);
//     console.log(posts);
//     setPosts (posts);
//   });
//     return unsubscribe;
// }, []);

const handleCreate = async (post) => {
    // console.log([post, ...posts]);
    post.date = new Date();
    //post.timestamp = firestore.FieldValue.serverTimestamp();
    // setPosts([post, ...posts]);
    //Returns promise referencing where doc is
    const documentRef = await firestore.collection(`${match.params.subjectId}`).add(post);

    //grab the document from the reference
    const document = await documentRef.get();

    const newPost = collectionofIdsAndDocs(document);

    setPosts([newPost, ...posts])
    
};

const subject = allSubjects.find((subject)=> subject.id===match.params.subjectId);
    return (
        <Main>
            <div className="details-section">
                <h1>
                    <span>{subject.id}</span>
                    <br/>
                    {subject.name}
                </h1>
                <p>{subject.description}</p>
            </div>
            <div className="review-section">
                <Posts posts = {posts} onCreate={handleCreate}/>
            </div>
        </Main>
       
    )
}
