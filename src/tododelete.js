import React from 'react';
import axios from 'axios';

export default class Tododel extends React.Component {
  state = {
    id: '',
  }

  handleChange = event => {
    this.setState({ id: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    axios.delete(`http://dummy.restapiexample.com/api/v1/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      prompt("do you want to delete");
  }

  render() {
    return (
      <div className="container">
        <center><form onSubmit={this.handleSubmit}>
          <label>
            Todo ID:<br/>
            <input type="text" name="id" onChange={this.handleChange} />
          </label><br/>
          <button type="submit">Delete</button>
        </form></center>
      </div>
    )
  }
}