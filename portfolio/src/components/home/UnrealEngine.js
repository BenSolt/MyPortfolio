import React from "react";

export default function Unreal() {
    return(
    <div>
        <div className='title'>
        <h1>UNREAL ENGINE</h1>
        <h3 className='h2text'>Video game engine developed by Epic Games.</h3>
        </div>
        <div className='projectcontainer'>

            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h2 className='textcolorTitle'>2d Side Scroller</h2>
                        <h4 className='textcolor'>A 2d Platformer. Uses Blueprints
                        {/* Learn new abilities which allow you to progress through the game. 
                            <li>Pickup ability</li>
                            <li>Double Jump</li>
                            <li>Jet Pack</li> */}
                        </h4>

                <div>
                    {/* <iframe width="266" height="138"  */}
                    <iframe className='videoSize'
                    title="Couch Co-Op" 
                    src="https://www.youtube.com/embed/fhSUHRPf9aA" 
                    frameborder="0" allow="accelerometer; autoplay; 
                    encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                    </iframe>
                </div> 
                        
                </div> 
            </div>

            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h2 className='textcolorTitle'>4 player couch co-op</h2>
                        <h4 className='textcolor'>A 2d couch co-op game. Uses Blueprints</h4>

                    <div>
                        <iframe className='videoSize'
                        title="Couch Co-Op" 
                        src="https://www.youtube.com/embed/Y00Dp28n0Go" 
                        frameborder="0" allow="accelerometer; autoplay; 
                        encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen>
                        </iframe>
                    </div>
                </div> 
            </div>


            <div className='projectUnreal'>

                <div> 
                    <h2 className='textcolorTitle'>Side Scroller</h2>
                        <h4 className='textcolor'> 
                        Learn abilities like Double Jump. Uses Blueprints</h4>

                    <div>
                        <iframe className='videoSize'
                        src="https://www.youtube.com/embed/w50qCRoIBZ4" 
                        frameborder="0" allow="accelerometer; autoplay;
                        encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen> 
                        </iframe>
                    </div>   
                </div>
            </div>

            <div className='projectUnreal'>

                <div className='projectText'> 
                    <h2 className='textcolorTitle'>Invaders</h2>
                        <h4 className='textcolor'>Take on Space Invaders. Uses Blueprints
                        </h4>

                    <div>
                        <iframe className='videoSize' 
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
  
    </div>  
    )
}