import React from "react";



export default function Artwork() {

    function ReactReduxGithub() {
        window.open("https://github.com/BenSolt/React-Redux-App2");
      }

    function ReactReduxDeploy() {
        window.open("https://my-app-2c4n54ugl.now.sh/");
      }
    /////////////////////////////////////////////////////////  


    function Deploy() {
        // window.open("https://my-app-2c4n54ugl.now.sh/");
      }

    function openGitHub() {
        window.open("https://github.com/BenSolt/");
      }

    return(
        <div className='mainbox'>
            <h1>CODE PROJECTS</h1>
                <button class="btnU" onClick={openGitHub}>GitHub</button> 
            <div className='projectcontainer'>
                <div className='project'>
                    <h2 className='textcolor'>React Redux App</h2>
                        <p className='textcolor'>Created a React App using Redux:
                            <br/>
                            <br/>
                            <li>uses Microsoft - 343 Studios, Halo 5 API.</li>
                            <li>contains actions, reducers, and API.</li>
                            
                        </p>
                    <button class="btn2" onClick={ReactReduxGithub}>Github code</button>
                    <button class="btn2" onClick={ReactReduxDeploy}>Deployed Site</button>
                </div>

                <div className='project'>
                    <h2 className='textcolor'>Project 2</h2>
                        <p className='textcolor'>Project description
                            <br/>
                            <br/>
                            <li>bullet points</li>
                        </p>
                    <button class="btn2" onClick={ReactReduxGithub}>Github code</button>
                    <button class="btn2" onClick={Deploy}>Deployed Site</button>
                </div>

                <div className='project'>
                    <h2 className='textcolor'>Project 3</h2>
                        <p className='textcolor'>Project description
                            <br/>
                            <br/>
                            <li>bullet points</li>
                           
                        </p>
                    <button class="btn2" onClick={ReactReduxGithub}>Github code</button>
                    <button class="btn2" onClick={Deploy}>Deployed Site</button>
                </div>

            </div>
            
            
        </div>
       
    
           

    )
}