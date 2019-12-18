import React from "react";



export default function Artwork() {

    function openReactRedux() {
        window.open("https://github.com/BenSolt/React-Redux-App2");
      }


    return(
        <div className='mainbox'>
            <h1>CODE PROJECTS</h1>

            <div className='projectcontainer'>
                <div className='project'>
                    <h2 className='textcolor'>React Redux</h2>
                        <p className='textcolor'>Created a react app using Redux
                            <br/>
                            actions and reducers, as well as hooking it all up to an API.
                        </p>
                    <button class="btn" onClick={openReactRedux}>React Redux</button>
                </div>

                <div className='project'>
                    <h2 className='textcolor'>React Redux</h2>
                        <p className='textcolor'>Created a react app using Redux
                            <br/>
                            actions and reducers, as well as hooking it all up to an API.
                        </p>
                    <button class="btn" onClick={openReactRedux}>Project 2</button>
                </div>

                <div className='project'>
                    <h2 className='textcolor'>React Redux</h2>
                        <p className='textcolor'>Created a react app using Redux
                            <br/>
                            actions and reducers, as well as hooking it all up to an API.
                        </p>
                    <button class="btn" onClick={openReactRedux}>Project 3</button>
                </div>

            </div>
            
            
        </div>
       
    
           

    )
}