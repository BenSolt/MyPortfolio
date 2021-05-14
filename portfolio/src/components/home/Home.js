import React from "react";
import BenKaylee from '../../images/BenandKaylee.jpg';

import Projects from './Projects';
import Unreal from './UnrealEngine';
import Artwork from './Artwork';





export default function Home() {

  function openLinkedIn() {
     window.open("https://www.linkedin.com/in/benjamin-solt/");
  }

  function openGitHub() {
    window.open("https://github.com/BenSolt/");
  }

  function openResume() {
    // window.open("Benjamin Solt Resume.pdf");
    window.open("Benjamin Solt Resume.pdf");
  }

//////////////// SCROLL TEST///////////////////////////////////////////


    return(
      <div className='mainbox'>

        <div className='title'>
          <h1>BENJAMIN SOLT</h1>
          <h2 className='h2text'>Full Stack Engineer</h2>
        </div>

        <div className="section1">
            <img class='imgBenKaylee'src={BenKaylee} alt="BenandKaylee(dog)" />
            <div class="textholder1">
              <h2>I am a Full Stack Engineer who graduated from Lambda school's intensive Full Stack 
                Web Development program. I am looking for a Front End Developer position eager to use my 
                experiences, creativity, and knowledge to create a functional working application.
                <br/>
                Additionally, with a Bachelors in Media Arts and Animation, several years
                of experience in retail - I bring strong communication and collaboration skills to any team.
                <br/>
                I also enjoy hanging out with family/friends, playing sports,
                and working with Epic Game's Unreal Engine. 
              </h2>
            </div>

          

        </div>

        
{/* ////////////////CONTACT INFO///////////////////////////////// */}
        <div className="sectionContact">

          <div className="contactbox">
              <h2 className="margintext2">Email: Bensolt@gmail.com</h2>
              <h2 className="margintext2">Cell#: 215-360-5410</h2>
              <button class="btn" onClick={openGitHub}>GitHub</button> 
              <button class="btn" onClick={openLinkedIn}>LinkedIn</button>
              <button class="btn" onClick={openResume}>Resume</button>
          </div>
          
          <div>
            <h2 className="margintext2">Skills</h2>
              <div className='ulholder'>
                <ul className='litext'>
                  <li>CSS</li>
                  <li>HTML</li>
                  <li>SASS</li>
                  <li>React</li>
                  <li>Javascript</li>
                  
                </ul>

                <ul className='litext'>
                  <li>Jest</li>
                  <li>Git/GitHub</li>
                  <li>Redux</li>
                  <li>Node.js</li>
                  <li>Python</li>

                </ul>

                <ul className='litext'>
                  <li>Adobe Creative Suite</li>
                  <li>Unreal Engine</li>
                  <li>3D Studio Max</li>
                  
                  
                </ul>

              </div>
             
            

          </div>
        </div>


{/*////////////// PROJECTS///////////////////////////////////////////// */}
        <div className="section2">

          <div id="contentProjects">
            <Projects/>
          </div> 

          <div id="contentUnrealProjects">
            <Unreal/>
          </div> 
          
          <div id="contentArt">
            <Artwork/>
          </div>

        </div>

      </div>
            
    );
}