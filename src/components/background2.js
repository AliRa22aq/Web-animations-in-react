import React,{useEffect} from 'react'
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

/* Background animations */
var sceneryFrames = [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }
];

var sceneryTimingBackground = {
    duration: 36000,
    iterations: Infinity,
};

function Background2({speed}) {

    const { ref, getAnimation } = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingBackground,
      })
    
    useEffect( () => {
      const animation =  getAnimation();
                  if (speed < 0.8) {
                    animation.playbackRate = speed;
                    }
                    else if (speed > 1.2) {
                      animation.playbackRate = speed - 0.4;
                    } 
                    else {
                      animation.playbackRate = speed -0.2;
                    } 
    })

    return (
        <div>
            <div class="scenery" id="background2" ref = {ref}>
                <img id="r_pawn" src="https://i.pinimg.com/originals/50/13/f2/5013f2075b43362774867e0f2536baca.png" alt=" " sizes= "75%" />

            </div>
        </div>
    )
}

export default Background2