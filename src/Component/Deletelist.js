import React from 'react';
import axios from 'axios';

export default class Deletelist extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.delete(`https://reqres.in/api/users/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
        this.props.history.push('/Getlist');
        //eslint-disable-next-line
        confirm('delete');
  }

  render() {
    return (
      <div className = "container">
        <center>
        <form onSubmit = {this.handleSubmit}>
          <label>
          User ID:<br/>
          <input type = "text" name = "id" onChange = {this.handleChange} />
          </label><br/>
          <button type = "submit">Delete</button>
        </form>
        </center>
      </div>
    );
  }
}