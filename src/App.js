import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/FirstPage';
import SubjectsPage from './Pages/Subjects';
function App() {


  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/it/subjects" render={()=> <SubjectsPage course='IT'/>}/>
        <Route path="/engineering/subjects" render={()=> <SubjectsPage course='engineering'/>}/>
      </Switch>
    </Router>
   
  );
}

export default App;
