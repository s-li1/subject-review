import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './Pages/FirstPage';
import Second from './Pages/Subjects';
import Review from './Pages/Review';
function App() {


  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/subjects" exact component={Second}/>
        <Route path="/subjects/:subjectId" component={Review}/>
      </Switch>
    </Router>
   
  );
}

export default App;
