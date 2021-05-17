import React from "react";

import Unreal from './UnrealEngine';

export default function Projects() {

    // HALO // ////////////////////////////////////////////
    function ReactReduxGithub() {
        window.open("https://github.com/BenSolt/React-Redux-App2");
    }

    function ReactReduxDeploy() {
        // window.open("https://my-app-2c4n54ugl.now.sh/");
        window.open("https://my-app-two-orcin.vercel.app");


    }

    // GROA
    function GroaGithub() {
        window.open("https://github.com/Lambda-School-Labs/Groa-fe");
    }

    // function GroaDeploy() {
    //     console.log('Deploy link')
    //     window.open("https://www.groa.us/");
    //   }


    ////////GAME LIFE/////////////////////////////////////////////////  
    function ConWayGithub() {
        window.open("https://github.com/BenSolt/gameoflife");
    }

    // ////////////////////////////////////////////////////
    function ReactCipher() {
        window.open("https://cipher-puzzle.vercel.app/")
    }

    function ReactCipherGithub() {
        window.open("https://github.com/BenSolt/cipher-puzzle");
    }



    return (
        <div>
            <div className='title'>
                <h1>CODE PROJECTS</h1>
                <h3 className='h2text'>Using HTML, CSS, Javascript, Python.</h3>
            </div>

            <div className='projectcontainer'>

                <div className='projectHalo'>

                    <div className='projectText'>
                        <h2 className='textcolorTitle'>React Redux App</h2>
                        <h4 className='textcolor'>
                            Built to demonstrate API call and Redux.
                    </h4>
                        <li className='bullet'>HTML | CSS | JavaScript | React | Redux | Halo API</li>
                        <li className='bullet'>Using Microsoft - 343 Studios, Halo 5 API</li>

                        <button class="btn2" onClick={ReactReduxGithub}>Github code</button>
                        <button class="btn2" onClick={ReactReduxDeploy}>Site</button>
                    </div>

                </div>

                <div className='projectCipher'>

                    <div className='projectText'>
                        <h2 className='textcolorTitle'>React App - Book Cipher</h2>
                        <h4 className='textcolor'>
                            Inspired by &nbsp;
                    <a className="Conwaylink" href="https://en.wikipedia.org/wiki/Beale_ciphers">The Beale Cipher</a>
                        </h4>
                        <li className='bullet'>HTML | CSS | JavaScript | React </li>

                        <button class="btn2" onClick={ReactCipherGithub}>Github code</button>
                        <button class="btn2" onClick={ReactCipher}>Site</button>
                    </div>

                </div>

                <div className='projectGroa'>

                    <div className='projectText'>
                        <h2 className='textcolorTitle'>Groa</h2>
                        <h4 className='textcolor'>Built to recommend movies to user, based on how user rates movies</h4>
                        <li className='bullet'>HTML | CSS | JavaScript | React | AWS</li>
                        {/* <li>As Front End Developer built Authorization, Login, display layout of movie info</li>    */}
                        <li className='bullet'>Collaborated remotely with team of 6 web developers, 2 data science, and 1 UX designer</li>

                        <button class="btn2" onClick={GroaGithub}>Github code</button>
                    </div>

                </div>


                <div className='projectConway'>

                    <div className='projectText'>
                        <h2 className='textcolorTitle'>Conways Game of Life</h2>
                        <h4 className='textcolor'><a className="Conwaylink" href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">Conway's Game of Life</a>
                            &nbsp;  created by the British mathematician John Horton Conway in 1970.
                            </h4>
                        {/* The user creates an initial configuration and it evolves by itself. It is &nbsp;<a className="Conwaylink" href ="https://en.wikipedia.org/wiki/Turing_completeness">Turning Complete</a> */}
                        < li className='bullet'>HTML | CSS | JavaScript | React |</li>



                        <button class="btn2" onClick={ConWayGithub}>Github code</button>
                    </div>

                </div>

                {/* END PROJECT CONTAINER */}
            </div>
        </div>
    )
}