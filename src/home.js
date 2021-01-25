import React, { useState } from 'react';
import './App.css';
import logo from './images/ngo-logo-full-high.jpg'
import mission from "./images/mission.png";
import vision from "./images/vision.png";
import sanjayMutha from "./images/Sanjay mutha.jpeg";
import gopalBhagwat from "./images/Gopal Bhagwat.jpeg";
import sagarKamble from "./images/Sagar kamble.jpeg";
import collage from "./images/collage.jpeg";
import collage2 from "./images/collage.png";
import kid1 from "./images/kid1.jpeg"
import kid2 from "./images/kid2.jpeg"
import kid3 from "./images/kid3.jpeg";
import kid4 from "./images/kid4.jpeg";
import programManager from "./images/Akshata salgaonkar Program manager.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Home() {
  const [more, setMore] = useState(false);
  return (
    <div>
      <section id="homes">
        <div className="homes container">
          <div>
            <h1 style={{visibility: "hidden", position: 'absolute'}}>Nav Divyang Foundation</h1>
            <h1 className="title"><span style={{color: '#FBD125'}}>N</span><span style={{color: "#FBC725"}}>A</span><span
                style={{color: "#FBBD25"}}>V</span> <span style={{color: "#FBAD25"}}>D</span><span
                style={{color: "#FB9D25"}}>I</span><span style={{color: "#fa8b1b"}}>V</span><span style={{color: "#FB9025"}}>Y</span><span
                style={{color: "#FB8325"}}>A</span><span style={{color: "#FB6C25"}}>N</span><span
                style={{color: "#fb4525"}}>G</span> <span style={{color: "#FB2525"}}>F</span><span
                style={{color: "#FB2525"}}>O</span><span style={{color: "#FB2525"}}>U</span><span
                style={{color: "#FB2525"}}>N</span><span style={{color: "#FB2525"}}>D</span><span
                style={{color: "#FB2525"}}>A</span><span style={{color: "#FB2525"}}>T</span><span
                style={{color: "#FB2525"}}>I</span><span style={{color: "#FB2525"}}>O</span><span style={{color: "#FB2525"}}>N</span>
            </h1>
            <div className="logo">
              <img src={logo} alt="nav divyang foundation logo" />
            </div>
          </div>
          <div className="home-bottom">
            <div className="home-item">
              <h2>MISSION</h2>
              <div>
                <img src={mission} />
              </div>
              <p>To transform and empower the lives of underprivileged children with disabilities henceforth impacting the
                marginalized communities, through independent & on-field interventions in Educational, Vocational, Health
                and in all the areas of development.</p>
            </div>
            <div className="home-item">
              <h2>VISION</h2>
              <div>
                <img src={vision} />
              </div>
              <p>A Programme for the holistic development of the children with disabilities and empower their lives.</p>
            </div>
            <div className="home-item">
              <h2>ABOUT US</h2>
              <p>NAV DIVYANG foundation was started in 2017 for the Children with Special Needs, with an
                aim of empowering their lives and with an understanding that regular physical fitness
                is linked with improved cognitive, physical, and emotional ability. Nav Divyang foundation has been organizing
                sports camp every year since 2017 i.e., sports camp during Summer & Diwali vacation for 45 days and 15 days
                respectively. Home sessions are also provided. Moreover, the Nav Divyang foundation also provides free
                readers and writers to the children in need during an examination of NIOS, SSC, HSC, and Graduation.</p>
            </div>
          </div>
          <h2 style={{textAlign: "center"}} className="sub-heading">OUR TEAM</h2>
          <div id="ourteam" className="home-bottom">
            <div className="home-item-2">
              <div>
                <img src={sanjayMutha} alt="Mr. Sanjay Mutha" />
              </div>
              <div style={{padding: "20px"}}>
                <h2>Mr. Sanjay Mutha</h2>
                <p className="post">Founder/ Managing Trustee</p><br/>
                <p>Sanjay Mutha is an Engineering Graduate with 30 years of rich industrial experience. He has worked on various
                  fronts, from setting up projects and running them successfully and has ventured in the field of children with
                  disabilities from last 5 years. He is also on the advisory board of few such institutions working for the same
                  cause. Presently, he is the Managing Director/ Trustee of the foundation.</p>
              </div>
            </div>
            <div className="home-item-2">
              <div>
                <img src={gopalBhagwat} alt="Mr. Gopal Bhagwat" />
              </div>
              <div style={{padding: "20px"}}>
                <h2>Mr. Gopal Bhagwat</h2>
                <p className="post">Trustee /Founder & Director (Special Educator and Sports teacher by Profession)</p><br/>
                <p>Gopal Bhagwat is a special educator and a Physical Health Trainer for children with special needs and has
                  been working in this field from last 6 years. He has also been working as a sports consultant with different
                  organisations and also carries an experience of being a program manager in a special education centre.
                  Presently,
                  he is the Founder & Trustee of the Foundation.</p>
              </div>
            </div>
            <div className="home-item-2">
              <div>
                <img src={sagarKamble} alt="Mr. Sagar Kamble" />
              </div>
              <div style={{padding: "20px"}}>
                <h2>Mr. Sagar Kamble</h2>
                <p className="post">Trustee (Special Educator by Profession)</p><br/>
                <p>Sagar Kamble is a special educator and has been working in this field of special education from last 6 years.
                  He has 4 years of work experience with children with visual impairment at NAB and 2 years of experience with children
                  with multiple disabilities. </p>
              </div>
            </div>
          </div>
          <div className="future">
            <div>
              <h1 className="sub-heading">FUTURE GOALS</h1>
            </div>
            <div className="future-container">
              <div className="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To provide services and serve the children with special needs in different areas, under one roof</p>
              </div>
              <div className="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To enable children with special needs live independently through special education and various therapies</p>
              </div>
              <div className="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To support parents and caregivers to get a better understanding of their child and their specific individual needs</p>
              </div>
              <div className="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To spread the awareness in the community and society</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="collage">
          <img src={collage} alt="children activities at nav divyang foundation" />
        </div>
      </section>
      <section id="hero">
        <div className="hero">
          <div>
            <h2 className="sub-heading">OUR WORK</h2>
            <br/>
            <ul>
              <li>Centre for Special Need Children, is a multi-disability intervention program that offers individuals with
                disabilities, education & therapies.</li>
              <li>At present, the Centre offers special education to children with developmental and cognitive disorders
                like Intellectual impairment, Autism (ASD), ADHD, Learning Disorder, Hearing and Visual Impairment, Cerebral
                Palsy.</li>
              <li>Various therapies are provided to the children like Physio, Occupational and Speech therapy along with Art
                based therapy.</li>
              <li>Children are also provided remedial education as well as visual perception activity sessions.</li>
            </ul>
            <br/>
            <br/>
            <br/>
            <h3>ABOUT MDVI- PERSONS WITH MULTIPLE DISABILITIES </h3>
            <p style={{lineHeight: 'normal', fontSize: '18px'}}>When a person has several different disabilities, he/she is said to have a condition called Multiple
              Disabilities. For example, the person may have difficulty in learning, along with controlling movements
              and/or with hearing and vision. The effect of multiple disabilities can be more than the combination of two
              individual disabilities. Often, people may not know how much a multiple disabled person maybe comprehending,
              and his/her attempts to communicate may be unfamiliar to us and may get unnoticed. For these reasons they may
              be wrongly labelled as having intellectual disorders, which is not the case.</p><br/><br/>

            <h2>SOME EXAMPLES OF MULTIPLE DISABILITIES ARE:</h2>
            <ol>
              <li>Deaf blind (Visual Impairment + Hearing Impairment)</li>
              <li>Visual Impairment + Hearing Impairment + Mental Retardation</li>
              <li>Visual Impairment + Mental Retardation</li>
              <li>Cerebral Palsy + Mental Retardation/ Hearing/ Speech/ Visual Problems</li>
            </ol>

          </div>
        </div>
        <div className="collage-2">
          <img src={collage2} alt="diya painting at nav divyang foundation" />
          <h2 style={{paddingBottom: "20px"}}>Diya Painting</h2>
        </div>
      </section>
      <section id="projects">
        <div className="projects">
          <h1 className="sub-heading">PROGRAMME & SERVICES</h1>
          <br/>
          <div>
            <div className="programme">
              <div style={{width: "90%"}}>
                <h2>PROGRAMME MODEL</h2>
                <br/>
                <ul>
                  <li>Mother Toddlers Group</li>
                  <li>Early Intervention</li>
                  <li>Special Education</li>
                  <li>Remedial</li>
                </ul>
                <br/>
                <ul className="therapy">
                  <li>THERAPIES</li>
                  <ul>
                    <li>Occupational therapy</li>
                    <li>Speech therapy</li>
                    <li>Art based therapy</li>
                    <li>Physiotherapy</li>
                    <li>Visual perception therapy</li>
                  </ul>
                </ul>
                <br/>
                <ul>
                  <li>Sports</li>
                  <li>Caregiver & Family Strengthening</li>
                  <li>Prevocational Training</li>
                </ul>
              </div>
              <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
                <div className="kid-image"><img style={{width: "100%", "borderRadius": "20px"}} src={kid1}/></div>
                <div className="kid-image"><img style={{width: "100%", "borderRadius": "20px"}} src={kid2}/></div>
              </div>
            </div>
            <br/>
            <br/>
            <h2>OUR SERVICES</h2>
            <ol>
              <li>
                <h3>Mothers Toddlers Group (0- 3 years)-</h3>
                <p>A major goal of this service is to provide awareness to the caregivers and integrate them into the
                  initiation of building their children’s abilities.</p>
              </li>
              <li>
                <h3>Early Intervention (0 - 6 years)-</h3>
                <p>This helps support the child in starting to function on her/his own, as per their abilities, without
                  constant presence of caregivers.</p>
              </li>
              <li>
                <h3>Special Education-</h3>
                <p>Special educators practises a manner of educating students in a way that addresses their individual
                  differences and special needs.</p>
              </li>
              <li>
                <h3>Remedial-</h3>
                <p>Remedial educators basically assist students in order to achieve expected competencies in case of
                  academic skills such as numeracy and literacy.</p>
              </li>
            </ol>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap"}}>
              <div className="kid-image"><img style={{width: "100%", borderRadius: "20px"}} src={kid3}/></div>
              <div className="kid-image"><img style={{width: "100%", borderRadius: "20px"}} src={kid4}/></div>
            </div>
            <div>
              <h2>THERAPIES PROVIDED</h2>
              <ol>
                <li>
                  <h3>OCCUPATIONAL THERAPY</h3>
                  <p>Occupational therapists treat through the therapeutic use of everyday activities. 
                    They help these patients develop, recover, improve, as well as maintain the skills 
                    needed for daily living and working.</p>
                </li>
                <li>
                  <h3>SPEECH THERAPY</h3>
                  <p>Speech therapists provide treatment, support and care for individuals having difficulties with communication, or with eating, drinking and swallowing. It helps overcoming problems related to speaking and communicating.</p>
                </li>
                <li>
                  <h3>ARTS BASED THERAPY</h3>
                  <p>Art based therapist makes use of creative processes, through the various mediums of art forms to improve physical, mental and emotional well-being, and helps individual's gaining the better understanding of themselves.</p>
                </li>
                <li>
                  <h3>PHYSIOTHERAPY</h3>
                  <p>Aims to improve their orientation and mobility skills to allow them to get accustomed various environments.</p>
                </li>
                <li>
                  <h3>VISUAL PERCEPTION ACTIVITIES</h3>
                  <p>Aim is to develop or improve visual skills and abilities; improve visual comfort, ease, and efficiency; and change visual processing or interpretation of visual information.</p>
                </li>
              </ol>
            </div>
            <br/>
            <br/>
            <div>
              <h2>PRE-VOCATIONAL TRAINING</h2>
              <p>A major goal of this service is to make people with disabilities employable through development of specialized skills that are aligned to their abilities and interest. Some of the pre-vocational skill are a follow:
              </p>
              <ul style={{margin: "20px"}}>
                <li>Cutting</li>
                <li>Sticking</li>
                <li>Filing</li>
                <li>Punching</li>
                <li>Sorting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="donor">
        <div className="donor">
          <div>
            <h1 className="sub-heading" style={{fontSize: "35px"}}> OUR DONORS</h1>
            <h2>Kindly Donate to us at:</h2><br/>
            <div className="donor-details">
              <p>Account Name – Nav Divyang Foundation</p>
              <p>A/C no – 920020060668988</p>
              <p>IFSC code – UTIB0000572</p>
              <p>Bank Name & Address  – Axis bank, Thakur village, Mumbai 400101</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div className="contact container">
          <div>
            <h1 className="section-title">CONTACT <span style={{color: "#fb7325"}}>INFORMATION</span></h1>
          </div>
          <div className="contact-items">
            <div className="contact-item" style={{backgroundImage: 'linear-gradient(45deg, darkorange, yellow)', padding: "10px"}}>
              <div style={{width: "60%", margin: '0 auto'}}><img src={programManager} alt="Ms. Akshata Salgaonkar" /></div>
              <div className="contact-info">
                <p style={{fontWeight: "500", fontSize: '16px', lineHeight: 'normal'}}>Ms. AKSHATA SALGAONKAR</p>
                <p style={{fontWeight: "500", fontSize: '16px', lineHeight: 'normal'}}>Project Manager</p>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
              <div className="contact-info">
                <h1>CONTACT</h1>
                <h2>Mr.Sanjay Mutha - 9967865479/ 9022988590</h2>
                <h2>Ms.Akshata Salgaonkar - 8291153924</h2>
                <h2>Mr.Gopal Bhagwat - 9975724888</h2>
                <h2>Mr.Sagar Kamble - 7738803582</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
              <div className="contact-info">
                <h1>EMAIL</h1>
                <h2>sp_mutha@hotmail.com</h2>
                <h2>prachi.airindia@gmail.com</h2>
                <h2>navdivyangfoundation2017@gmail.com</h2>
              </div>
            </div>
            <div className="contact-item">
              <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
              <div className="contact-info">
                <h1>ADDRESS</h1>
                <h2>Reg. Office: Room No. 281, Kapil Vastu Nagar, Matoshri Ramabai Marg, Liberty Garden Malad
                  (West), Mumbai 64.<br/>
                  Location / Centre address -Kandivali & Lower Parel
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default Home;
