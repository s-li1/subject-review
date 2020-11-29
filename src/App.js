import React, { useState, useEffect } from 'react';
import Posts from './Components/Posts';
import { firestore } from './Config/Firebase/db_config';
import { collectionofIdsAndDocs } from './utilities';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/FirstPage';
import Second from './Pages/SecondPage';
function App() {


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
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/second" exact component={Second}/>
      
        <Posts posts = {posts} onCreate={handleCreate}/>
      </Switch>
    </Router>
   
  );
}

export default App;
