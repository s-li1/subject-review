import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/FirstPage';
import SubjectsPage from './Pages/Subjects';
import Review from './Pages/Review';
function App() {


  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/IT" exact render={()=> <SubjectsPage course='IT'/>}/>
        <Route path="/engineering" exact render={()=> <SubjectsPage course='engineering'/>}/>
        <Route path="/IT/:subjectId" component={Review}/>
        <Route path="/engineering/:subjectId" component={Review}/>
      </Switch>
    </Router>
   
  );
}

export default App;