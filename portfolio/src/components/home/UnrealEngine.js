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
                    <h1 className='textcolorTitle'>2d Side Scroller</h1>
                        <h2 className='textcolor'>A 2d Platformer
                        Learn new abilities which allow you to progress through the game. Uses Blueprints
                            <li>Pickup ability</li>
                            <li>Double Jump</li>
                            <li>Jet Pack</li>
                        </h2>
                </div> 

                <div className='youtubevideo'>
                    <iframe width="412" height="256" 
                    title="Couch Co-Op" 
                    src="https://www.youtube.com/embed/fhSUHRPf9aA" 
                    frameborder="0" allow="accelerometer; autoplay; 
                    encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                    </iframe>
                </div> 
            </div>

            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h1 className='textcolorTitle'>4 player couch co-op</h1>
                        <h2 className='textcolor'>A 2d couch co-op game where up to 4 playeres
                        can battle it out, until only one remains. Uses Blueprints

                            <li>Basic ammo - able to pickup after shooting </li>
                            <li>Power weapons - rocket launcher</li>
                            <li>Power ups - shield</li>
                            <li>Multi layered levels - be in front or behind</li>
                        </h2>
                </div> 

                    <div className='youtubevideo'>
                        <iframe width="412" height="256" 
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
                    <h1 className='textcolorTitle'>Side Scroller</h1>
                        <h2 className='textcolor'> 
                        Learn new abilities which allow you to progress through the game, like Double Jump. Uses Blueprints
                            
                            <li>Inventory and pickup items, which increase player stats</li>
                            <li>Spawn Teddy to help you fight</li>
                            <li>Double Jump</li>
                            <li>Enemy Bosses</li>
                            
                        </h2>
                
                </div>

                
                <div className='youtubevideo'>
                <iframe width="412" height="256" 
                src="https://www.youtube.com/embed/w50qCRoIBZ4" 
                frameborder="0" allow="accelerometer; autoplay;
                encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen> 
                </iframe>
                </div>

            </div>

            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h1 className='textcolorTitle'>Invaders</h1>
                        <h2 className='textcolor'>Take on the classic game
                        of Space Invaders. Uses Blueprints
                            
                            <li>1 to 2 players</li>
                            <li>Specials - shields, weapons</li>
                            <li>Enemies get harder as progress</li>
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