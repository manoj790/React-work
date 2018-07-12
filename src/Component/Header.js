import React from 'react';
import { Link } from 'react-router-dom'
 class Header extends React.Component {
	 render() {
	 	return(
        <div>
          <ul className="Container">
          <li><Link to = "/">Home</Link></li>
          <li><Link to = "/Login">Login</Link></li>
          </ul>
        </div>
	 	 );
	 }
}
export default Header;