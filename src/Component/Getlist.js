import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Getlist extends React.Component {
  state = {
    mydata: [],
    page: 1
  };

  componentDidMount() {
    this.getUsersPage();
  }
    getUsersPage = (event) => {
    axios.get('https://reqres.in/api/users?page=' + this.state.page)
      .then(res => {
        const mydata = res.data.data;
        this.setState({mydata: mydata});
      });
    }

  sendPaginationPrev = (event) => {
    const { page } = this.state;
    if(page > 1) {
      this.setState({
        page: page-1
      },
        this.getUsersPage(page)
      );
    }
    else {
      this.getUsersPage(page)
    };
  }

  sendPaginationNext = (event) => {
    const { page } = this.state;
    if(page < 4) {
      this.setState({
        page: page+1
      },
        this.getUsersPage(page)
      );
    }
    else {
      this.getUsersPage(page)
    };
  }
  
  render() {
    const child = this.state.mydata.map((element, index) => {
      return <div key = {index}>
      <ul className = "list">
      <li> fname={element.first_name} lname={element.last_name}<img src = {element.avatar} alt = "" /></li>
      </ul> 
      </div>
    });
    return (
      <div className = "listItem">
        <h1>List User</h1>
        <div>{ child }</div>
        <div className = "get">
        <button><Link to = "/Postlist">Create</Link></button>
        <button><Link to = "/Deletelist">Delete</Link></button>
        <button><Link to = "/Updatelist">Update</Link></button>
        </div>
        <div className="pagination">
        <button onClick={this.sendPaginationPrev}>Prev</button>
        <button onClick={this.sendPaginationNext}>Next</button>
        </div>
      </div>
    );
  }
}