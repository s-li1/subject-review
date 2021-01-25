import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Home from './Pages/FirstPage';
import SubjectsPage from './Pages/Subjects';
import Review from './Pages/Review';
import NoMatchPage from './Pages/NoMatchPage';
import UserProvider from './Providers/UserProvider';
function App() {

  const NoMatchRedirect = () => <Redirect to='/not-found'/>

  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/IT" exact render={()=> <SubjectsPage course='IT'/>}/>
          <Route path="/engineering" exact render={()=> <SubjectsPage course='engineering'/>}/>
          <Route path="/business" exact render={()=> <SubjectsPage course='business'/>}/>
          <Route path="/IT/:subjectId" component={Review}/>
          <Route path="/engineering/:subjectId" component={Review}/>
          <Route path="/business/:subjectId" component={Review}/>
          <Route path="/not-found" component={NoMatchPage}/>
          <Route component={NoMatchRedirect}/>
        </Switch>
      </Router>
    </UserProvider>
   
  );
}

export default App;