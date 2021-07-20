import React from "react";
import Atlantis from '../../images/BenSoltAtlantisTemple.png'; 
import Factory from '../../images/BenSoltFactory.png'; 
import Hydra from '../../images/BenSoltHydraRoost.png'; 
import Refinery from '../../images/BenSoltRefinery.png'; 
import Temple from '../../images/BenSoltWaterTemple.png';
import Waterwheel from '../../images/BenSoltWaterWheel.png';
import Well from '../../images/BenSoltWell.png';   




export default function Artwork() {
   
    // const modal = document.getElementById("myModal")
    // var btn = document.getElementById("myBtn");
    // var span = document.getElementsByClassName("close")[0];

    const Click1 = (element) => {
        document.getElementById("img01").src = Atlantis;
        //element.src;
        document.getElementById("myModal").style.display ='block'  
    }
    
    const Click2 = () => {
        document.getElementById("img01").src = Factory;
        //element.src;
        document.getElementById("myModal").style.display ='block' 
    }

    const Click3 = () => {
        document.getElementById("img01").src = Hydra;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click4 = () => {
        document.getElementById("img01").src = Refinery;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click5 = () => {
        document.getElementById("img01").src = Temple;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click6 = () => {
        document.getElementById("img01").src = Waterwheel;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click7 = () => {
        document.getElementById("img01").src = Well;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }


      window.onclick = function(e) {
        if (e.target === document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
      }
      
      const ClickClose = () => {
        document.getElementById("myModal").style.display = "none"; 
    }


    return(
    <div className='mainboxArt'>
        <div className='title'>
            <h1>ARTWORK</h1>
            <h3 className='h2text'>Created with 3D Studio Max and Photoshop.</h3>
        </div>
        <div id="myModal" className="modal">
        
            <div class="modal-content">
                <div className='closeholder'>
                <span className="close" onClick={ClickClose}>&times;</span>
                </div>
                <img id='img01' className='myImgsModal' onClick={ClickClose} alt='aaa'/>
            </div>
        </div>

        <div >
            <div>
                <img id='myImg' className='myImgs' onClick={Click1} src={Atlantis} alt='Atlantean Temple'/>
                <img className='myImgs' onClick={Click2} src={Factory} alt='Factory'/>
                <img className='myImgs' onClick={Click3} src={Hydra} alt='Hydra two headed monster'/>
                <img className='myImgs' onClick={Click4} src={Refinery} alt='Space Refinery'/>
                <img className='myImgs' onClick={Click5} src={Temple} alt='Temple'/>
                <img className='myImgs' onClick={Click6} src={Waterwheel} alt='WaterWheel'/>
                <img className='myImgs' onClick={Click7} src={Well} alt='Well'/>
                
                <iframe className="myVideos"  width="266" height="138"
                    src="https://www.youtube.com/embed/xw9Jo15Og8w" 
                    frameborder="0" allow="accelerometer; autoplay; 
                    encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>  
                </iframe>
            </div>
          
        </div>
    </div>
    )
}