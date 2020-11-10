import React from 'react'
import { NavLink } from 'react-router-dom';
import './nav.css';
import './components/icons/mainLogo1.png';
// import './components/icons/';


const pic = require('./components/icons/mainLogo1.png');
// const prof = require('./components/icons/');

class Navbar extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div >
        <ul className='body'>
          {/* <form>
            <input/>
            </form> */}
          <NavLink
            to="/home"
            /* set exact so it knows to only set activeStyle when route is deeply equal to link */
            exact
          /* add styling to Navlink */
          // style={link}
          /* add prop for activeStyle */
          // activeStyle={{
          //   background: '#185227'
          // }}
          >
          
              <li className='home'> <img src={pic} alt="Hulite Logo" /> </li>
            </NavLink>

            <div className='shift'>
              <NavLink className="link"
                to="/movies"
                exact >
              <li  > Movies </li></NavLink>


              <NavLink className='link'
                to="/tvshows"
                exact >
              <li> TV Shows </li></NavLink>


              <NavLink className='link'
                to="/mystuff"
                exact >
                <li> My Stuff </li> </NavLink>

            <div class="dropdown">
            <li className='dropdown fa fa-user-circle fa-2x'>
              <div class="dropdown-content">
                <h5 className="use">User: {this.props.username}</h5>
                <h5 className="email-text">Email: {this.props.email}</h5>
                <h4 onClick={() => this.props.logout()}>Logout</h4> 
                <h4 onClick={() => this.props.deleteUser()}>Delete Account</h4>
              </div>
             
              </li>
            </div>
          </div>
        </ul>
      </div>
    )
  }
}

export default Navbar;

// onClick={() => this.props.logout()}