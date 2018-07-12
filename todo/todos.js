import React from 'react';

import axios from 'axios';

export default class Todos extends React.Component {
  state = {
    mydata: [],
  };

  componentWillMount() {
    axios.get(`https://reqres.in/api/users?page=4`)
      .then(res => {
        console.log(res);
        let mydata = res.data.data;
        this.setState({ mydata:mydata });
      });
  }

  render() {
    const child = this.state.mydata.map((data, index) => {
      return <div key={index}>
      <ul className="list">
      <li>fname={data.first_name} lname={data.last_name} {data.avatar} </li>
      </ul> 
      </div>
    });
    return (
      <div>
      <h1>User Details</h1>
      <div>{ child }</div>
      </div>
    );
  }
}