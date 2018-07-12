import React from 'react';
import axios from 'axios';

export default class Postlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      job:''
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

    const user = {
      name: this.state.name,
      job: this.state.job
    };

    axios.post(`https://reqres.in/api/users`,  user )

      .then(res => {
        console.log(res);
        console.log(res.data);
      });
      this.props.history.push('/Getlist'); 
  }

  render() {
    return (
      <div className = "container">
       <center>
       <form onSubmit = {this.handleSubmit}>
          <label>
          Name:<br/>
          <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange} required />
          </label><br/>
          
          <label>
          Job:<br/>
          <input type = "text" name = "job" value = {this.state.job} onChange = {this.handleChange} required />
          </label><br/><br/>
          <button type = "submit">Create</button>
        </form>
        </center>
      </div>
    );
  }
}