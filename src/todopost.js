import React from 'react';
import axios from 'axios';

export default class Todopost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    employee_name: '',
    employee_salary: '',
    employee_age: ''
  };
}
  handleChange = event => {
    let target = event.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const employee = {
      employee_name: this.state.employee_name,
      employee_salary: this.state.employee_salary,
      employee_age: this.state.employee_age
    };

    axios.post(`http://dummy.restapiexample.com/api/v1/create`, { employee })

      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div className="container">
       <center><form onSubmit={this.handleSubmit}>
          <label>
            Employee Name:<br/>
            <input type="text" name="EmpName" value = {this.state.value} onChange={this.handleChange} />
          </label><br/>
          
          <label>
            Employee Salary:<br/>
            <input type="text" name="EmpSal" value = {this.state.value} onChange={this.handleChange} />
          </label><br/>
          <label>
            Employee age:<br/>
            <input type="text" name="EmpAge" value = {this.state.value} onChange={this.handleChange} />
          </label><br/>
          <button type="submit">Add</button>
        </form></center>
      </div>
    )
  }
}