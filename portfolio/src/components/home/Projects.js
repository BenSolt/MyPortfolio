import React from "react";

import Unreal from './UnrealEngine';

export default function Projects() {

    // GROA
    function GroaGithub() {
        window.open("https://github.com/Lambda-School-Labs/Groa-fe");
      }

    function GroaDeploy() {
        console.log('Deploy link')
        window.open("https://www.groa.us/");
      }

    
    ////////GAME LIFE/////////////////////////////////////////////////  
    function ConWayGithub() {
        window.open("https://github.com/BenSolt/gameoflife");
      }

    function Deploy() {
        console.log('Deploy link')
        // window.open("https://my-app-2c4n54ugl.now.sh/");
      }
    
    // HALO // ////////////////////////////////////////////
    function ReactReduxGithub() {
        window.open("https://github.com/BenSolt/React-Redux-App2");
      }

    function ReactReduxDeploy() {
        window.open("https://my-app-2c4n54ugl.now.sh/");
      }


    function openGitHub() {
        window.open("https://github.com/BenSolt/");
      }

    return(
        <div>
            <div className='title'>
            <h1>CODE PROJECTS</h1>
            <h2 className='h2text'>Using HTML, CSS, Javascript, Python.</h2> 
            <button class="btnGit" onClick={openGitHub}>My GitHub</button> 
            </div>
                
            <div className='projectcontainer'>
                

            <div className='projectGroa'>

                <div className='projectText'> 
                    <h1 className='textcolor'>Groa</h1>
                        <h2 className='textcolor'>Built to recommend movies to user, based on how user rates movies
                        HTML/CSS | JavaScript | React | AWS
                            
                            <li>As Front End Developer built Authorization, Login, display layout of movie info</li>
                            <li> Solved problems and trouble shot bugs with team members</li>      
                            <li>Collaborated remotely with team of 6 web developers, 2 data science, and 1 UX designer</li>
                        
                        </h2>
                </div>   
                    
                    <div className='btn2Holder'>
                        <button class="btn2" onClick={GroaGithub}>Github code</button>
                        <button class="btn2" onClick={GroaDeploy}>Deployed Site</button>
                    </div>

                </div>

                
                <div className='projectConway'>

                    <div className='projectText'> 
                        <h1 className='textcolor'>Conways Game of Life</h1>
                            <h2 className='textcolor'>Project description
                                
                                <li>bullet points</li>
                            </h2>
                    </div> 

                        <div className='btn2Holder'>
                            <button class="btn2" onClick={ConWayGithub}>Github code</button>
                            {/* <button class="btn2" onClick={Deploy}>Deployed Site</button> */}
                        </div>
                    
                </div>
                

                <div className='projectHalo'>

                    <div className='projectText'>
                        <h1 className='textcolor'>React Redux App</h1>
                            <h2 className='textcolor'>Created a React App using Redux: 
                                
                                <li>uses Microsoft - 343 Studios, Halo 5 API</li>
                                <li>contains actions, reducers, and API</li>
                            </h2>
                    </div>

                    <div className='btn2Holder'>
                        <button class="btn2" onClick={ReactReduxGithub}>Github code</button>
                        <button class="btn2" onClick={ReactReduxDeploy}>Deployed Site</button>
                    </div>

                </div>

            {/* END PROJECT CONTAINER */}
            </div> 
    
            {/* <Unreal/> */}
           

            
            
        </div>
       
    
           

    )
}