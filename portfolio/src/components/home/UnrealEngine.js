import React from "react";

export default function Artwork() {
    return(
    <div className='mainbox'>
        <div className='title'>
        <h1>UNREAL ENGINE</h1>
        <h2 className='h2text'>Video Game Engine, enables one to create games from scratch.</h2>
        </div>
        <div className='projectcontainer'>
            <div className='projectUnreal'>
                <h2 className='textcolor'>4 player couch co-op game</h2>
                    <p className='textcolor'>A 2d game where players can battle it
                    out until only one remains. Each player has a set number of lives.
                    You can play with up to 4 people locally. 
                    
                        <br/>
                        <br/>
                        <li>Basic ammo - able to pickup after shooting </li>
                        <li>Power weapons - rocket launcher</li>
                        <li>Power ups - shield</li>
                    </p>
                    <div>
                        {/* <button class="btnU">Github code</button> */}
                   
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
                        {/* <button class="btnU">Github code</button> */}
                    
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