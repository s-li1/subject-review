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
    review: "I think this subject has a lot of good qualities. The teacher is pretty good too. As long as you study hard, you will do fine. Make sure you choose a good group for assignment 2 if you want that HD."
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
            <div className="review-container">
                <div className="details-section">
                    <h1>
                        <span>{subject.id}</span>
                        <br/>
                        {subject.name}
                    </h1>
                    <p>{subject.description}</p>
                </div>
                <h1>Recent Reviews</h1>
                <div className="review-section">
                    <Posts posts = {posts} onCreate={handleCreate}/>
                </div>
            </div>
        </Main>
       
    )
}
