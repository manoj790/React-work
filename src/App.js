import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Component/Header.js';
import Login from './Component/Login.js';
import Register from './Component/Register.js';
import Getlist from './Component/Getlist.js';
import Postlist from './Component/Postlist.js';
import Deletelist from './Component/Deletelist.js';
import Updatelist from './Component/Updatelist.js';
//import Pagination from './Component/Pagination.js';
const Home = () => (
  <div>
     <ul></ul>
  </div>
);

export default class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path = "/Login" component={Login} />
      <Route path = "/Register" component={Register} />
      <Route path = "/Getlist" component={Getlist} />
      <Route path = "/Postlist" component={Postlist} />
      <Route path = "/Deletelist" component={Deletelist} />
      <Route path = "/Updatelist" component={Updatelist} />
      </div>
      </Router>
    );
  }
}