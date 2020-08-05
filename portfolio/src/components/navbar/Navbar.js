import React from "react";
import { NavLink } from "react-router-dom";
import MyLogo from '../../images/BenSoltWallPaper.png';
import {useDarkMode} from '../hooks/useDarkMode';




export default function Navbar() {

    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
    }

    function scrollProjects() {
        var elmnt = document.getElementById("contentProjects");
        elmnt.scrollIntoView();
      }

    function scrollUnrealProjects() {
        var elmnt = document.getElementById("contentUnrealProjects");
        elmnt.scrollIntoView();
      }  

    function scrollArt() {
        var elmnt = document.getElementById("contentArt");
        elmnt.scrollIntoView();
      }

    return(
        
    <div className='Navbarholder'>
        
        <div className='flexnav'>
        <img className='logo' src={MyLogo}/>

          
            <nav>
                {/* <NavLink className='navlink' to='/'>HOME</NavLink> */}
                <button onClick={scrollProjects} className='navlink'>PROJECTS</button>
                <button onClick={scrollUnrealProjects} className='navlink'>UNREAL ENGINE PROJECTS</button>
                <button onClick={scrollArt} className='navlink'>ARTWORK</button>
                {/* <NavLink className='navlink' to='/artwork'>ARTWORK</NavLink>  */}
                
            </nav>

            <div className="darkModeHolder">
                <h4 className="navtext">Darkmode</h4>
                <div className="dark-mode__toggle">
                    <div
                    onClick={toggleMode}
                    className={darkMode ? 'toggle toggled' : 'toggle'}
                    />
                </div>       
            </div>       

        </div>
                 
    </div>
    )
}