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
                  <li className="mobileview"><a href="/#contact"  data-after="Contact">Contact Us</a></li>
                  <li className="mobileview" id={window.innerWidth > 768 ? "desktopview-hide" : "" }><a onClick={() => {setMore(true)}} data-after="Contact"><FontAwesomeIcon icon={faEllipsisH} style={{fontSize: '25px', margin: '0'}} /></a></li>
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
    </div>
  );
}

export default App;
