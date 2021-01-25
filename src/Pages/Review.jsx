import React, { useState, useEffect } from 'react'
import Posts from '../Components/Posts/Posts';
import { firestore } from '../Config/Firebase/firebase';
import { collectionofIdsAndDocs } from '../utilities';
import Main from '../Components/MainView/MainView';
import Modal from '../Components/Modal/Modal';
import { Redirect } from 'react-router-dom';
export default function Review({match}) {

const getCourseName = match.path.replace("/:subjectId", "").replace("/", "");
const [posts, setPosts] = useState([
]);

let allSubjects = require(`../Data/${getCourseName}.json`);
useEffect(()=> {
    const unsubscribe = firestore.collection(`${match.params.subjectId}`).orderBy("date", "desc").onSnapshot( snapshot => {
    const posts = snapshot.docs.map(collectionofIdsAndDocs);
    setPosts (posts);
  });
    return unsubscribe;
}, []);

const handleCreate = async (post) => {
    post.date = new Date();
    const documentRef = await firestore.collection(`${match.params.subjectId}`).add(post);
    
    const document = await documentRef.get();

    const newPost = collectionofIdsAndDocs(document);

    setPosts([newPost, ...posts])
    
};

const [modal, setModalOpen] = useState(false);

const openModalHandler = ()=> {
    setModalOpen(true);
}

const closeModalHandler = ()=> {
    setModalOpen(!modal);
}



const subject = allSubjects.find((subject)=> subject.id===match.params.subjectId);
if(!subject) {
    return <Redirect to='/not-found'/>
}
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
                <div className="header-guidelines-container">
                <h1>Recent Reviews</h1>
                <button className="modal-opener" onClick={openModalHandler}>Read our guidelines</button>
                </div>
                <Modal show={modal} close={closeModalHandler}/>
                <div className={ modal ? "overlay active" : "overlay"}></div>
                <div className="review-section">
                    <Posts posts = {posts} onCreate={handleCreate}/>
                    
                </div>
            </div>
        </Main>
       
    )
}
