import React from 'react';
import axios from 'axios';

export default class Updatelist extends React.Component {
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

  axios.put(`https://reqres.in/api/users/2`, user )

  .then(res => {
    console.log(res);
    console.log(res.data);
  });
   this.props.history.push('/getlist');
}

  render() {
    return (
      <div className = "container">
        <center>
        <form onSubmit = {this.handleSubmit}>
        <label>
         Name:<br/>
         <input type = "text" name = "name" value = {this.state.name} onChange = {this.handleChange} />
         </label><br/>
         <label>
         Job:<br/>
         <input type = "text" name = "job" value = {this.state.job} onChange = {this.handleChange} />
         </label><br/><br/>
         <button type = "submit">Update</button>
         </form>
         </center>
      </div>
    );
  }
}