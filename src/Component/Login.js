import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email:'',
			password:'',
    };
  }
  change = (e) => {
	  this.setState({
	   [e.target.name]: e.target.value
	});
}

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
    email: this.state.email,
    password:this.state.password
};
  axios.post(`https://reqres.in/api/login`, data) 
   .then(respone => {
    console.log(respone.data);
  });
	  this.props.history.push('/Getlist');
}
     
	render() {
	  return (
     <div>
     <center>
     <form className = "form" onSubmit = {this.handleSubmit}>
     <div className = "div1">

     Email:<br/>
     <input type = 'email' name = 'email' value = {this.state.email} onChange = {e =>this.change(e)} required /><br/>

     Password:<br/>
     <input type = 'password' name = 'password' value = {this.state.password} onChange = {e =>this.change(e)} required/><br/><br/>

     <button>Login </button>

     <Link to = "/Register"> /Register here ! </Link>

     </div>
     </form>
     </center>
     </div>
	);
 }
}

  export default Login;