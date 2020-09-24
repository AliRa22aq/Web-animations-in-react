import React,{useEffect} from 'react'
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

/* Background animations */
var sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
];

var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity
};

function Forground2({speed}) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
      })
    
    useEffect( () => {
      const animation =  getAnimation();
                  if (speed < 0.8) {
                    animation.playbackRate = speed;
                    }
                    else if (speed > 1.2) {
                      animation.playbackRate = speed * 0.25;
                    } 
                    else {
                      animation.playbackRate = speed -0.2;
                    } 
    })

    return (
        <div>
            <div class="scenery" id="foreground2" ref = {ref}>
                <img 
                id="bush" 
                src="https://media3.giphy.com/media/1wX7G4WO2BufrboYhj/giphy.gif"
                alt=" " 
                height = "200"
                width = "300"
                />



            </div>


        </div>
    )
}

export default Forground2
