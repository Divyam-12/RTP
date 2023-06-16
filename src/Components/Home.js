import React from 'react'
import "./Home.css";
import BG from "./BG.png";
// import BG1 from "./BG1.png";
import img1 from "./img1.png";
import img2 from "./img2.png";
import email from "./email.png";
import location from "./location.png";
import animation from "./animation.png";
import map from "./map.png";

function Home() {
  return (
    <body>
      <header>
      
      <div id="RTP">
       <p className="RTP">RADIO</p>  
       <p className="RTP">TELESCOPE</p>  
       <p className="RTP">PROJECT</p>  
       <hr className="line" />
       <div className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</div>
       <img src={animation} id="animation" alt="" />
     
        </div>
      </header>
      

      <div className="images">

        <div className="left">
        <div className="line1"></div>
        <div id="tele1">
          <img src={img1} className="tele1" alt="" />
          <div className="grad">
            SMALL RADIO <br />TELESCOPE 
          </div>
        </div>
        <div className="line2"></div>
        </div>




        <div className="center">
          T <br />
          H <br />
          E <br /> <br />
          T <br />
          E <br />
          L <br />
          E <br />
          S <br />
          C <br />
          O <br />
          P <br />
          E <br />
          S <br />
        </div>


        <div className="right">
        <div className="line3"></div>
        <div id="tele2">
          <img src={img2} className="tele2" alt="" />
          <div className="grad">
            MINI RADIO <br />TELESCOPE 
          </div>
        </div>
        <div className="line4"></div>
        </div>


      </div>

      
      
      
      
      
      <footer>
        <div className="frame">

          <div className="contact">
            <div id="p1">Contact us</div>

            <div id="p2">
            <img src={email} className="email" alt="" />
            <p className="mail">loremipsum@lora.iitr.ac.in</p>
            </div>

            <div id="p3">
            <img src={location} className="location" alt="" />
            <p className="place">lora lasum, Ipsum dolor se am</p>
            </div>
          </div>

          <div className="quick">
            <div id="p4">Quick Links</div>
            <div id="p5">Home</div>
            <div id="p6">Telescopes</div>
            <div id="p7">Publications</div>
            <div id="p8">Team</div>
          </div>

          <div id="map">
          <div id="p9">Maps</div>
          <img src={map} className="maps" alt="" />
          </div>


        </div>
      </footer>
    </body>
  )
}

export default Home




