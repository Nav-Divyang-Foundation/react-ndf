import React, { useState } from 'react';
import './App.css';
import Home from './home';
import PhotoGallery from './photoGallery.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";

function App() {
  const [more, setMore] = useState(false);
  let history = useHistory();

  return (
    <div className="App">
      <Router>
      {/* {!more ?  */}
        <section id="header">
          <div class="header">
            <div class="nav-bar">
              <div class="nav-list">
                <ul className="mobileview-ul">
                  <li className="mobileview"><a href="/#homes"  data-after="Home">Home</a></li>
                  <li className="mobileview"><a href="/#ourteam"  data-after="Donor">Our Team</a></li>
                  <li className="mobileview-hide"><a href="/#hero"  data-after="Work">Our Work</a></li>
                  <li className="mobileview-hide"><a href="/#projects"  data-after="Projects">Programme and Services</a></li>
                  <li className="mobileview-hide"><Link to="/gallery">Photo Gallery</Link></li>
                  <li className="mobileview-hide"><a href="/#parent">Parent Reviews</a></li>
                  <li className="mobileview"><a href="/#contact"  data-after="Contact">Contact Us</a></li>
                  <li className="mobileview" id={window.innerWidth < 1208 ? "" : "desktopview-hide" }><a onClick={() => {setMore(true)}} data-after="Contact"><FontAwesomeIcon icon={faEllipsisH} style={{fontSize: '25px', margin: '0'}} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* : */}
        <section id={more ? "header-active" : "header-active-hide"}>
          <div className="header">
            <div className="nav-bar">
              <div className="nav-list">
                <FontAwesomeIcon icon={faTimes} style={{color: 'white', position: 'absolute', right: '10px', top: '10px'}} onClick={() => {setMore(false)}} />
                <ul>
                  <li onClick={() => {setMore(false);}}><a href="/#homes">Home</a></li>
                  <li onClick={() => {setMore(false)}}><a href="/#ourteam">Our Team</a></li>
                  <li onClick={() => {setMore(false)}}><a href="/#hero">Our Work</a></li>
                  <li onClick={() => {setMore(false)}}><a href="/#projects">Programme and Services</a></li>
                  <li onClick={() => {setMore(false);}}><Link to="/gallery">Photo Gallery</Link></li>
                  <li onClick={() => {setMore(false);}}><a href="/#parent">Parent Reviews</a></li>
                  <li onClick={() => {setMore(false)}}><a href="/#contact">Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      {/* } */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/gallery" component={PhotoGallery} />
        </Switch>
      </Router>
      <section id="footer">
        <div className="footer container">

          <div className="social-icon">
            <div className="social-item">
              <a href="https://www.facebook.com/pg/Nav-Divyang-Foundation-108355544315717/posts/"><img
                  src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
            </div>
            <div className="social-item">
              <a href="https://instagram.com/nav_divyang_foundation_2017?igshid=159p3ndgf95vt"><img
                  src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
            </div>
            <div className="social-item">
              <a href="https://www.linkedin.com/in/nav-divyang-foundation-1012b21b5"><img
                  src="https://img.icons8.com/bubbles/50/000000/linkedin.png" /></a>
            </div>
          </div>
          <p style={{textAlign: 'center'}}>Do Follow us on our Social Media Handles</p>
          <a
            style={{textDecoration: "none", color: "wheat", fontSize: "20px"}}
            href="https://navdivyangfoundation.in">https://navdivyangfoundation.in</a>
          <div style={{margin: "20px"}}>
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "25px"}}>LEGAL STATUS: </p>
            </div>
            <div style={{display: "flex"}}>
              <div style={{margin: "10px"}}>
                <p style={{fontSize: "12px"}}>Registered as ‘NAV DIVYANG FOUNDATION</p>
                <p style={{fontSize: "12px"}}>Registered under the Bombay Public Trust Act, 1950</p>
                <p style={{fontSize: "12px"}}>Under Registration Number E - 33219 (Mumbai) dated 08/06/2017</p>
              </div>
              <div style={{margin: "10px"}}>
                <p style={{fontSize: "12px"}}>PAN number -: AACTN7203Q</p>
                <p style={{fontSize: "12px"}}>12 A - : On process</p>
                <p style={{fontSize: "12px"}}>80G number -: On process</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
