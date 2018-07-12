import React, { Component } from "react";
import axios from 'axios';

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    };
  }

  componentDidMount() {
    this.getUsersPage();
  }
    getUsersPage = (event) => {
    axios.get('https://reqres.in/api/users?page=' + this.state.page)
     .then (res => {
      console.log (res);
      this.setState({data : res.data.data});
     }); 
    }

  sendPaginationPrev = event => {
    const { page } = this.state;
    if(page > 1) {
      this.setState({
        page: page - 1
      },
        this.getUsersPage(page)
      );
    }
  }

  sendPaginationNext = event => {
    const { page } = this.state;
    if(page < 4) {
    this.setState({
      page: page + 1
    },
      this.getUsersPage(page)
     );
   }
  }

  render() {
    return (
      <div className="pagination">
          <button onClick={this.sendPaginationPrev}>Prev</button>
          <button onClick={this.sendPaginationNext}>Next</button>
        </div>
    );
  }
}
export default Pagination;