import React from "react";

export default function Artwork() {
    return(
    <div className='mainbox'>
        <h1>UNREAL ENGINE PROJECTS</h1>
         
        <div className='projectcontainer'>
            <div className='projectUnreal'>
                <h2 className='textcolor'>Factory</h2>
                    <p className='textcolor'>Factory
                        <br/>
                        <br/>
                        <li>Factory animation</li>
                        <li>3D Studio Max</li>
                        <li>Photshop</li>
                    </p>
                    <div>
                        <button class="btnU">Github code</button>
                   
                        <iframe width="412" height="256"
                            //width="560" height="315" 
                            src="https://www.youtube.com/embed/xw9Jo15Og8w" 
                            frameborder="0" allow="accelerometer; autoplay; 
                            encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>  
                        </iframe>
                    </div> 
            </div>

            <div className='projectUnreal'>
                <h2 className='textcolor'>Ship Side Scroller</h2>
                    <p className='textcolor'>You are a modern day ship, that is fighting
                    enemy submarines. You can shoot missles at air, and drop depth charges
                    against submarines. 
                        <br/>
                        <br/>
                        <li>Upgrade ships health/appearance, weapons</li>
                        <li>Enemies get harder with each level</li>
                        <li>Enemy Bosses</li>
                    </p>
                    <div>
                        <button class="btnU">Github code</button>
                    
                        <iframe width="412" height="256" 
                            //width="560" height="315" 
                            src="https://www.youtube.com/embed/-Tm8T6OvcI0" 
                            frameborder="0" allow="accelerometer; autoplay; 
                            encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>  
                        </iframe>
                    </div>
            </div>

        </div> 
  
    </div>  
    )
}