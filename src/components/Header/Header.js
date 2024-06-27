import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Header.css';
import heropng from './Dashboard.png';
import './Hero.css';


const Header = () => {
  const [isProductsDropdownVisible, setProductsDropdownVisible] = useState(false);
  const [isCompanyDropdownVisible, setCompanyDropdownVisible] = useState(false);

  const toggleProductsDropdown = () => {
    setProductsDropdownVisible(!isProductsDropdownVisible);
  };

  const toggleCompanyDropdown = () => {
    setCompanyDropdownVisible(!isCompanyDropdownVisible);
  };

  return (
    <div className='head'>
    <div className="header">
      <div className="logo">
        <svg width="21" height="28" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5386 21.4366C13.3904 21.5849 13.2144 21.7025 13.0208 21.7828C12.8271 21.863 12.6195 21.9043 12.4099 21.9043C12.2003 21.9043 11.9927 21.863 11.799 21.7828C11.6053 21.7025 11.4294 21.5849 11.2812 21.4366L2.09921 12.2561C0.774913 10.9048 0.0374108 9.08544 0.0469667 7.19342C0.0565226 5.30139 0.812364 3.48959 2.15024 2.15171C3.48812 0.813829 5.29993 0.0579875 7.19195 0.0484316C9.08398 0.0388756 10.9033 0.776377 12.2547 2.10067L18.0578 7.90378C18.3563 8.2039 18.5235 8.61034 18.5224 9.03369C18.5213 9.45704 18.3521 9.86261 18.052 10.1612C17.7518 10.4598 17.3454 10.6269 16.9221 10.6258C16.4987 10.6247 16.0931 10.4555 15.7945 10.1554L9.99869 4.35228C9.24993 3.60352 8.23439 3.18287 7.17548 3.18287C6.11657 3.18287 5.10103 3.60352 4.35227 4.35228C3.6035 5.10104 3.18285 6.11658 3.18285 7.17549C3.18285 8.2344 3.6035 9.24994 4.35227 9.99871L13.5342 19.1807C13.8338 19.4793 14.0026 19.8847 14.0034 20.3078C14.0042 20.7308 13.837 21.1368 13.5386 21.4366Z" fill="#E7DEFE"/>
          <path d="M18.0012 25.8992C16.6533 27.2436 14.8272 27.9987 12.9234 27.9987C11.0197 27.9987 9.19358 27.2436 7.84571 25.8992L2.04986 20.0961C1.88902 19.951 1.75941 19.7747 1.66891 19.5779C1.57841 19.3811 1.52892 19.1679 1.52346 18.9514C1.51799 18.7348 1.55667 18.5194 1.63713 18.3183C1.71758 18.1172 1.83814 17.9346 1.99145 17.7816C2.14477 17.6286 2.32762 17.5084 2.52889 17.4283C2.73015 17.3482 2.94561 17.31 3.16214 17.3158C3.37867 17.3217 3.59173 17.3716 3.78835 17.4625C3.98497 17.5534 4.16104 17.6833 4.30582 17.8445L10.1017 23.6476C10.8516 24.3875 11.8637 24.8008 12.9172 24.7972C13.9707 24.7937 14.98 24.3737 15.7249 23.6287C16.4698 22.8838 16.8899 21.8745 16.8934 20.821C16.8969 19.7675 16.4837 18.7554 15.7437 18.0055L6.56177 8.81917C6.26242 8.51982 6.09425 8.11381 6.09425 7.69047C6.09425 7.26712 6.26242 6.86111 6.56177 6.56176C6.86112 6.26241 7.26713 6.09424 7.69048 6.09424C8.11382 6.09424 8.51983 6.26241 8.81918 6.56176L18.0012 15.7437C19.346 17.0914 20.1013 18.9176 20.1013 20.8215C20.1013 22.7253 19.346 24.5515 18.0012 25.8992Z" fill="#E7DEFE"/>
        </svg>
        <Link to="/"><span className="highlight">Spend.In</span></Link>
      </div>
      <nav className="nav">
        <Link to="products" smooth={true} duration={500}>Products</Link>
        <div className="menu-item" onMouseEnter={toggleProductsDropdown} onMouseLeave={toggleProductsDropdown}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9401 1.2124L8.05006 6.1024C7.47256 6.6799 6.52756 6.6799 5.95006 6.1024L1.06006 1.2124" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isProductsDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="#">Product 1</Link></li>
              <li><Link to="#">Product 2</Link></li>
            </ul>
          )}
        </div>
        <Link to="benefit" smooth={true} duration={500}>Benefit</Link>
        <Link to="howitworks" smooth={true} duration={500}>How it Works</Link>
        <Link to="pricing" smooth={true} duration={500}>Pricing</Link>
        <Link to="company" smooth={true} duration={500}>Company</Link>
        <div className="menu-item" onMouseEnter={toggleCompanyDropdown} onMouseLeave={toggleCompanyDropdown}>
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.9401 1.2124L8.05006 6.1024C7.47256 6.6799 6.52756 6.6799 5.95006 6.1024L1.06006 1.2124" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          {isCompanyDropdownVisible && (
            <ul className="dropdown-menu">
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          )}
        </div>
      </nav>
      <div className='navRight'>
        <Link to="/">Login</Link>
        <Link className='ButtonDemo' to="/">Get Demo</Link>
      </div>
      </div>
      <div className="main-content">
        <div className="hero-section">
            <div className='hero-header'>
            <h1>All your business expenses in one place.</h1>
            <p>Your one-stop finance empower platform. <br></br>Manage all your business expenses with our supafast app.</p>
            </div>
            <div className="buttons">
            <button to="/" className="demo-button">Get a Free Demo</button>
            <button to="/" className="pricing-button">See Pricing</button>
            </div>
        </div>
        <div className="dashboard-section">
        <img src={heropng} alt="" className="img" />
            
        </div>
    </div>
    </div>
    
  );
}

export default Header;