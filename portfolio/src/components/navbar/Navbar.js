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

    return(
        
    <div className='Navbarholder'>
        
        <div className='flexnav'>
        <img className='logo' src={MyLogo}/>

          
            <nav>
                <NavLink className='navlink' to='/'>HOME</NavLink>
                <NavLink className='navlink' to='/codework'>CODE </NavLink> 
                <NavLink className='navlink' to='/artwork'>ARTWORK</NavLink> 
                <NavLink className='navlink' to='/unreal'>UNREAL ENGINE</NavLink> 
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