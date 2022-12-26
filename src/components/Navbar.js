import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "./images/DesignAGENCY.png";
import dropdown from "./images/dropdown-icon.png";

function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo'>
            <img src={logo} alt="DesignAGENCY"/>
          </Link>

          <ul className='nav-menu'>
            <li className='nav-item'>
              <div className='nav-links'>
                <Link
                  to='/'
                  className='service'>
                  Services
                  <img src={dropdown} alt = "options" />
                </Link>
              </div>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                About Us
              </Link>
            </li>
            
            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'>
                Contact Us
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'>
                <p className='login'>Login</p>
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/'
                className='nav-links'>
                <p className='register'>Register</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
