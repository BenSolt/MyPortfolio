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
        console.log('cliccck')
        document.getElementById("img01").src = Atlantis;
        //element.src;
        document.getElementById("myModal").style.display ='block'  
    }
    
    const Click2 = () => {
        console.log('cliccck')
        document.getElementById("img01").src = Factory;
        //element.src;
        document.getElementById("myModal").style.display ='block' 
    }

    const Click3 = () => {
        console.log('cliccck')
        document.getElementById("img01").src = Hydra;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click4 = () => {
        console.log('cliccck')
        document.getElementById("img01").src = Refinery;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click5 = () => {
        console.log('cliccck')
        document.getElementById("img01").src = Temple;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click6 = () => {
        console.log('cliccck')
        document.getElementById("img01").src = Waterwheel;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }

    const Click7 = () => {
        console.log('cliccck')
        document.getElementById("img01").src = Well;
        //element.src;
        document.getElementById("myModal").style.display ='block'
    }


      window.onclick = function(e) {
        if (e.target == document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
      }
      
      const ClickClose = () => {
        document.getElementById("myModal").style.display = "none"; 
    }


    return(
    <div className='mainbox'>
     <h1>ARTWORK</h1>

        <div id="myModal" className="modal">
            <div class="modal-content">
                <span onClick={ClickClose} className="close">&times;</span>
                <img id='img01' className='myImgsModal' onClick={ClickClose}/>
            </div>
        </div>

        <div >
            <div>
                <img id='myImg' className='myImgs' onClick={Click1} src={Atlantis}/>
                <img className='myImgs' onClick={Click2} src={Factory}/>
                <img className='myImgs' onClick={Click3} src={Hydra}/>
                <img className='myImgs' onClick={Click4} src={Refinery}/>
                <img className='myImgs' onClick={Click5} src={Temple}/>
                <img className='myImgs' onClick={Click6} src={Waterwheel}/>
                <img className='myImgs' onClick={Click7} src={Well}/>
            </div>
        </div>
    </div>
    )
}