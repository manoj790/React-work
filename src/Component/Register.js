import React from 'react';
import axios from 'axios';
class Register extends React.Component {

  constructor () {
    super ();
      this.state = {
        email:'',
        password:'',
      };
  }   
    change = (e) => {
      this.setState ({
        [e.target.name]: e.target.value
      });
    }

  handleSubmit = (e) => {
    e.preventDefault();
      const data = {
      email: this.state.email,
      password: this.state.password
      };

    axios.post(`https://reqres.in/api/register`, data)
      .then(response => {
        console.log(response)
        console.log(response.data);
        if(response.status === 201) {
          this.props.history.push('/Login'); 
        }
        else {
          alert('Not registered');
        }
      });    
  }
                    
  render() {
    return (
      <div>
        <center>
        <form className = "form" onSubmit = {this.handleSubmit}>
        <div className = "Register">
         Email:<br/>
         <input type = 'email' name = 'email' value = {this.state.email} onChange = {e =>this.change(e)} required /><br/>

         Password:<br/>
         <input type = 'password' name = 'password' value = {this.state.password} onChange = {e =>this.change(e)} required/><br/><br/>

         <button>Register</button>
         </div>
         </form>
         </center>
        </div>
    );
  }
}

 export default Register;
