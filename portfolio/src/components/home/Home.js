import React from "react";
import BenKaylee from '../../images/BenandKaylee.jpg';

import Footer from '../../components/navbar/Footer';

export default function Home() {

  function openLinkedIn() {
     window.open("https://www.linkedin.com/in/ben-solt-8447bb94/");
  }

  function openGitHub() {
    window.open("https://github.com/BenSolt/");
  }
  
    return(
      <div className='mainbox'>

        <div className='name'>
          <h1>BENJAMIN SOLT</h1>
        </div>

        <div className="section1">
            <img class='imgBenKaylee'src={BenKaylee} alt="BenandKaylee(dog)" />
            <div class="textholder1">
              <h3> Currently, I am attending school at Lambda, online, for Web Design. I love
                it and cant wait to use my experiences in the working world.
                <br/>
                <br/>
                In addition to attending Lambda, I enjoy hanging out with family/friends, playing sports,
                and working with the Unreal Engine. 
              </h3>
            </div>
        </div>

        <div className="sectionContact">

          <div className="contactbox">
              <h2 className="margintext2">Email: Bensolt@gmail.com</h2>
              <h2 className="margintext2">Cell#: 215-360-5410</h2>
              <button class="btn" onClick={openGitHub}>GitHub</button> 
              <button class="btn" onClick={openLinkedIn}>LinkedIn2</button>
          </div>
          
          <div className="skillbox">
            <h2 className='margintext1'>Skills</h2>
              <div className='ulholder'>
                <ul className='litext'>
                  <li>Javascript</li>
                  <li>CSS, HTML</li>
                  <li>Adobe Creative Suite</li>
                </ul>
                <ul className='litext'>
                  <li>3D Studio Max</li>
                  <li>Unreal Engine</li>
                </ul>
              </div>
            

          </div>
        </div>
    
              {/* <img  className="imag1" src={Imagee} 
                 style={{objectFit: "none"}}/>
              <img  className="imag2" src={Imagee} 
                 style={{objectFit: "none"}}/>
              <img  className="imagdefault" src={Imagee}/>  */}
                
      </div>
    );
}