import React from 'react';

import axios from 'axios';

export default class Todos extends React.Component {
  state = {
    mydata: [],
  };

  componentDidMount() {
    axios.get(`http://dummy.restapiexample.com/api/v1/employees`)
      .then(res => {
        const mydata = res.data;
        this.setState({ mydata });
      });
  }

  render() {
    const child = this.state.mydata.map((element, index) => {
      return <div key={index}>
      <ul className="list">
      <li> empname={element.employee_name} empsal={element.employee_salary} empage={ element.employee_age } </li>
      </ul> 
      </div>
    });
    return (
      <div>
      <h1>Employee Detail</h1>
      <div>{ child }</div>
      </div>
    );
  }
}