import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className='nav'>
                {/* <div>Sign up/in</div>
                <div>Post a job</div>
                <div>Croadcast</div>
                <div>Expert Support</div> */}
                <ul className="nav-list">
                    <li><a id="nav-anchor" href="#">Sign up/in</a></li>
                    <li><a id="nav-anchor" href="#">Post a job</a></li>
                    <li><a id="nav-anchor" href="#">Croadcast</a></li>
                    <li><a id="nav-anchor" href="#">Expert Support</a></li>
                </ul>
               


                <div className="search-container">
          <img
            className="search-icon"
            src="https://image.flaticon.com/icons/svg/483/483356.svg"
            alt="search-icon"
          />
          <input placeholder="Search" />

          <div className="search-results">
            <ul>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
              <li className="search-results-row">
                <img
                  src="https://image.flaticon.com/icons/svg/2154/2154651.svg"
                  alt="user-dp"
                />
                <span>John Doe</span>
              </li>
            </ul>
          </div>
        </div>
                
            </div>
        );
    }
}

export default Navbar;