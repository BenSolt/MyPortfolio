import React from "react";
import BenKaylee from '../../images/BenandKaylee.jpg';

import Projects from './Projects';
import Unreal from './UnrealEngine';
import Artwork from './Artwork';





export default function Home() {

  function openLinkedIn() {
     window.open("https://www.linkedin.com/in/ben-solt-8447bb94/");
  }

  function openGitHub() {
    window.open("https://github.com/BenSolt/");
  }

  function openResume() {
    console.log('resume')
    // window.open("Ben Solt -Resume 2019.pdf");
  }

//////////////// SCROLL TEST///////////////////////////////////////////


    return(
      <div className='mainbox'>

        <div className='title'>
          <h1>BENJAMIN SOLT</h1>
          <h2 className='h2text'>Full Stack Developer</h2>
        </div>

        <div className="section1">
            <img class='imgBenKaylee'src={BenKaylee} alt="BenandKaylee(dog)" />
            <div class="textholder1">
              <h2>Currently, I am attending school at Lambda, online, for Web Design. I love
                it and cant wait to use my experiences and knowledge to create a functional working application.
                <br/>
                Additionally, I have a Bachelors in Media Arts and Animation, several years
                of experience in retail - working on a team and interacting with customers.
                <br/>
                I also enjoy hanging out with family/friends, playing sports,
                and working with the Unreal Engine. 
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
          
          <div className="skillbox">
            <h2 className='margintext1'>Skills</h2>
              <div className='ulholder'>
                <ul className='litext'>
                  <li>CSS, HTML</li>
                  <li>Javascript</li>
                  <li>Python</li>
                 
                </ul>
                <ul className='litext'>
                <li>Adobe Creative Suite</li>
                  <li>3D Studio Max</li>
                  <li>Unreal Engine</li>
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