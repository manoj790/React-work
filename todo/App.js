import React, { Component } from 'react';
import './App.css';
import Todos from './todos.js';
//import Todopost from './todopost.js';
//import {BrowserRouter as Router, Link, Route} from 'react-router-dom';
//import Tododel from './tododelete.js';

class App extends Component {
  render() {
    return (
      <div>
      {/* <Router>
       <div>
       <Route path="/todopost" component={Todopost} />
       <div className="todopost"><Link to = "/todopost">Add</Link></div><br/>
       <Route path="/tododelete" component={Tododel} />
       <div className="todopost"><Link to = "/tododelete">Delete</Link></div>
       </div>
       </Router>*/}
       <Todos />
      </div>
    );
  }
}

export default App;
