import React from "react";

export default function Artwork() {
    return(
    <div className='mainbox'>
        <div className='title'>
        <h1>UNREAL ENGINE</h1>
        <h2 className='h2text'>Video Game Engine, enables one to create video games from scratch.</h2>
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
                <h2 className='textcolor'>Side Scroller</h2>
                    <p className='textcolor'> Metroidvania type game. You
                    learn new abilities which allow you to progress through the game.
                        <br/>
                        <br/>
                        <li>Upgrade health/energy, and weapons</li>
                        <li>Double Jump</li>
                        <li>Shrink - allows palyer to reach small areas</li>
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

            <div className='projectUnreal'>
                <h2 className='textcolor'>Invaders</h2>
                    <p className='textcolor'> Based of of the classic game
                    of Space Invaders.
                        <br/>
                        <br/>
                        <li>1 to 2 players</li>
                        <li>Specials - shields, weapons</li>
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