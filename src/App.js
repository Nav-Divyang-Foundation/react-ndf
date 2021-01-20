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

function App() {
  return (
    <div className="App">
      <section id="header">
        <div class="header">
          <div class="nav-bar">
            <div class="nav-list">
              <ul>
                <li><a href="#homes" data-after="Home">Home</a></li>
                <li><a href="#ourteam" data-after="Donor">Our Team</a></li>
                <li><a href="#hero" data-after="Work">Our Work</a></li>
                <li><a href="#projects" data-after="Projects">Programme and Services</a></li>
                <li><a href="#contact" data-after="Contact">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="homes">
        <div class="homes container">
          <div>
            <div class="logo">
              <img src={logo} />
            </div>
            <h1 style={{visibility: "hidden"}}>Nav Divyang Foundation</h1>
            <h1 style={{fontSize: '40px'}}><span style={{color: '#FBD125'}}>N</span><span style={{color: "#FBC725"}}>A</span><span
                style={{color: "#FBBD25"}}>V</span> <span style={{color: "#FBAD25"}}>D</span><span
                style={{color: "#FB9D25"}}>I</span><span style={{color: "#fa8b1b"}}>V</span><span style={{color: "#FB9025"}}>Y</span><span
                style={{color: "#FB8325"}}>A</span><span style={{color: "#FB6C25"}}>N</span><span
                style={{color: "#fb4525"}}>G</span> <span style={{color: "#FB2525"}}>F</span><span
                style={{color: "#FB2525"}}>O</span><span style={{color: "#FB2525"}}>U</span><span
                style={{color: "#FB2525"}}>N</span><span style={{color: "#FB2525"}}>D</span><span
                style={{color: "#FB2525"}}>A</span><span style={{color: "#FB2525"}}>T</span><span
                style={{color: "#FB2525"}}>I</span><span style={{color: "#FB2525"}}>O</span><span style={{color: "#FB2525"}}>N</span>
            </h1>
          </div>
          <div class="home-bottom">
            <div class="home-item">
              <h2>MISSION</h2>
              <div style={{margin: "80px auto"}}>
                <img src={mission} />
              </div>
              <p>To transform and empower the lives of underprivileged children with disabilities henceforth impacting the
                marginalized communities, through independent & on-field interventions in Educational, Vocational, Health
                and in all the areas of development.</p>
            </div>
            <div class="home-item">
              <h2>VISION</h2>
              <div style={{margin: "80px auto"}}>
                <img src={vision} />
              </div>
              <p>A Programme for the holistic development of the children with disabilities and empower their lives.</p>
            </div>
            <div class="home-item">
              <h2>ABOUT US</h2>
              <p>NAV DIVYANG foundation was started in 2017 for the Children with Special Needs, with an
                aim of empowering their lives and with an understanding that regular physical fitness
                is linked with improved cognitive, physical, and emotional ability. Nav Divyang foundation has been organizing
                sports camp every year since 2017 i.e., sports camp during Summer & Diwali vacation for 45 days and 15 days
                respectively. Home sessions are also provided. Moreover, the Nav Divyang foundation also provides free
                readers and writers to the children in need during an examination of NIOS, SSC, HSC, and Graduation.</p>
            </div>
          </div>
          <h2 style={{textAlign: "center"}} class="sub-heading">OUR TEAM</h2>
          <div id="ourteam" class="home-bottom">
            <div class="home-item-2">
              <div>
                <img src={sanjayMutha} />
              </div>
              <div style={{padding: "20px"}}>
                <h2>Mr. Sanjay Mutha</h2>
                <p>Founder/ Managing Trustee</p><br/>
                <p>Sanjay Mutha is an Engineering Graduate with 30 years of rich industrial experience. He has worked on various
                  fronts, from setting up projects and running them successfully and has ventured in the field of children with
                  disabilities from last 5 years. He is also on the advisory board of few such institutions working for the same
                  cause. Presently, he is the Managing Director/ Trustee of the foundation.</p>
              </div>
            </div>
            <div class="home-item-2">
              <div>
                <img src={gopalBhagwat} />
              </div>
              <div style={{padding: "20px"}}>
                <h2>Mr. Gopal Bhagwat</h2>
                <p>Trustee /Founder & Director (Special Educator and Sports teacher by Profession)</p><br/>
                <p>Gopal Bhagwat is a special educator and a Physical Health Trainer for children with special needs and has
                  been working in this field from last 6 years. He has also been working as a sports consultant with different
                  organisations and also carries an experience of being a program manager in a special education centre.
                  Presently,
                  he is the Founder & Trustee of the Foundation.</p>
              </div>
            </div>
            <div class="home-item-2">
              <div>
                <img src={sagarKamble} />
              </div>
              <div style={{padding: "20px"}}>
                <h2>Mr. Sagar Kamble</h2>
                <p>Trustee (Special Educator by Profession)</p><br/>
                <p>Sagar Kamble is a special educator and has been working in this field of special education from last 6 years.
                  He has 4 years of work experience with children with visual impairment at NAB and 2 years of experience with children
                  with multiple disabilities. </p>
              </div>
            </div>
          </div>
          <div class="future">
            <div>
              <h1 class="sub-heading">FUTURE GOALS</h1>
            </div>
            <div class="future-container">
              <div class="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To provide services and serve the children with special needs in different areas, under one roof</p>
              </div>
              <div class="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To enable children with special needs live independently through special education and various therapies</p>
              </div>
              <div class="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To support parents and caregivers to get a better understanding of their child and their specific individual needs</p>
              </div>
              <div class="future-item">
                <p style={{color: "white", fontWeight: "700"}}>To spread the awareness in the community and society</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="collage">
          <img src={collage} />
        </div>
      </section>
      <section id="hero">
        <div class="hero">
          <div>
            <h2 class="sub-heading">OUR WORK</h2>
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
            <p style={{fontWeight: "700"}}>When a person has several different disabilities, he/she is said to have a condition called Multiple
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
        <div class="collage-2">
          <img src={collage2} />
          <h2 style={{paddingBottom: "20px"}}>Diya Painting</h2>
        </div>
      </section>
      <section id="projects">
        <div class="projects">
          <h1 class="sub-heading">PROGRAMME & SERVICES</h1>
          <br/>
          <div>
            <div class="programme">
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
                <ul class="therapy">
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
                <div class="kid-image"><img style={{width: "100%", "borderRadius": "20px"}} src={kid1}/></div>
                <div class="kid-image"><img style={{width: "100%", "borderRadius": "20px"}} src={kid2}/></div>
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
              <div class="kid-image"><img style={{width: "100%", borderRadius: "20px"}} src={kid3}/></div>
              <div class="kid-image"><img style={{width: "100%", borderRadius: "20px"}} src={kid4}/></div>
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
        <div class="donor">
          <div>
            <h1 class="sub-heading" style={{fontSize: "35px"}}> OUR DONORS</h1>
            <h2>Kindly Donate to us at:</h2><br/>
            <div class="donor-details">
              <p>Account Name – Nav Divyang Foundation</p>
              <p>A/C no – 920020060668988</p>
              <p>IFSC code – UTIB0000572</p>
              <p>Bank Name & Address  – Axis bank, Thakur village, Mumbai 400101</p>
            </div>
          </div>
        </div>
      </section>
      <section id="contact">
        <div class="contact container">
          <div>
            <h1 class="section-title">CONTACT <span style={{color: "#fb7325"}}>INFORMATION</span></h1>
          </div>
          <div class="contact-items">
            <div class="contact-item" style={{backgroundImage: 'linear-gradient(45deg, darkorange, yellow)', padding: "10px"}}>
              <div width="100%"><img src={programManager} /></div>
              <div class="contact-info">
                <p style={{fontWeight: "800"}}>Ms. AKSHATA SALGAONKAR</p>
                <p style={{fontWeight: "800"}}>Project Manager</p>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
              <div class="contact-info">
                <h1>CONTACT</h1>
                <h2>Mr.Sanjay Mutha - 9967865479/ 9022988590</h2>
                <h2>Ms.Akshata Salgaonkar - 8291153924</h2>
                <h2>Mr.Gopal Bhagwat - 9975724888</h2>
                <h2>Mr.Sagar Kamble - 7738803582</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png" /></div>
              <div class="contact-info">
                <h1>EMAIL</h1>
                <h2>sp_mutha@hotmail.com</h2>
                <h2>prachi.airindia@gmail.com</h2>
                <h2>navdivyangfoundation2017@gmail.com</h2>
              </div>
            </div>
            <div class="contact-item">
              <div class="icon"><img src="https://img.icons8.com/bubbles/100/000000/map-marker.png" /></div>
              <div class="contact-info">
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
        <div class="footer container">

          <div class="social-icon">
            <div class="social-item">
              <a href="https://www.facebook.com/pg/Nav-Divyang-Foundation-108355544315717/posts/"><img
                  src="https://img.icons8.com/bubbles/100/000000/facebook-new.png" /></a>
            </div>
            <div class="social-item">
              <a href="https://instagram.com/nav_divyang_foundation_2017?igshid=159p3ndgf95vt"><img
                  src="https://img.icons8.com/bubbles/100/000000/instagram-new.png" /></a>
            </div>
            <div class="social-item">
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
