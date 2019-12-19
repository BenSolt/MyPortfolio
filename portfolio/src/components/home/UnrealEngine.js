import React from "react";

export default function Artwork() {
    return(
    <div className='mainbox'>
        <h1>UNREAL ENGINE PROJECTS</h1>
         
        <div className='projectcontainer'>
            <div className='projectUnreal'>
                <h2 className='textcolor'>Side Scroller</h2>
                    <p className='textcolor'>Project description
                        <br/>
                        <br/>
                        <li>bullet point</li>
                    </p>
                    <div>
                        <button class="btnU">Github code</button>
                    </div>
                <iframe width="560" height="315" 
                src="https://www.youtube.com/embed/xw9Jo15Og8w" 
                frameborder="0" allow="accelerometer; autoplay; 
                encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen></iframe>

            </div>
        </div> 
    </div>  
    )
}