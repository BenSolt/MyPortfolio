import React from "react";

export default function Unreal() {
    return(
    <div>
        <div className='title'>
        <h1>UNREAL ENGINE</h1>
        {/* <h2 className='h2text'>Video game engine developed by Epic Games, creators of Fortnite. The
        game engine enables one to create video games from scratch.</h2> */}
        <h2 className='h2text'>Video game engine developed by Epic Games.</h2>
        </div>
        <div className='projectcontainer'>
            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h2 className='textcolor'>4 player couch co-op</h2>
                        <h2 className='textcolor'>A 2d Couch Co-Op game where up to 4 playeres
                        can battle it out, until only one remains. 

                            <li>Basic ammo - able to pickup after shooting </li>
                            <li>Power weapons - rocket launcher</li>
                            <li>Power ups - shield</li>
                            <li>Multi layered levels - be in front or behind</li>
                        </h2>
                </div> 

                    <div className='youtubevideo'>
                        <iframe width="412" height="256" 
                            //width="560" height="315"
                        title="Couch Co-Op" 
                        src="https://www.youtube.com/embed/Y00Dp28n0Go" 
                        frameborder="0" allow="accelerometer; autoplay; 
                        encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen>
                         </iframe>
                    </div> 
            </div>

            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h2 className='textcolor'>Side Scroller</h2>
                        <h2 className='textcolor'> Metroidvania type game. You
                        learn new abilities which allow you to progress through the game.
                          
                            <li>Upgrade health/energy, and weapons</li>
                            <li>Double Jump</li>
                            <li>Shrink - allows palyer to reach small areas</li>
                            <li>Enemy Bosses</li>
                        </h2>
                
                </div>

                
                <div className='youtubevideo'>
                    <iframe width="412" height="256" 
                        title="Side Scroller" 
                        src="https://www.youtube.com/embed/-Tm8T6OvcI0" 
                        frameborder="0" allow="accelerometer; autoplay; 
                        encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>  
                    </iframe>
                </div>

            </div>

            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h2 className='textcolor'>Invaders</h2>
                        <h2 className='textcolor'>Take on the classic game
                        of Space Invaders.
                            
                            <li>1 to 2 players</li>
                            <li>Specials - shields, weapons</li>
                            <li>Enemies get harder with each level</li>
                            <li>Enemy Bosses</li>
                        </h2>
                </div>

                    <div className='youtubevideo'>
                        <iframe width="412" height="256" 
                            title="Space Invader" 
                            src="https://www.youtube.com/embed/_etRouEZEX4" 
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