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
                    animation.playbackRate = speed/2-1;
                    }
                    else if (speed > 1.2) {
                      animation.playbackRate = speed/2;
                    } 
                    else {
                      animation.playbackRate = 0;
                    } 
    })

    return (
        <div>
            <div class="scenery" id="background2" ref = {ref}>
                <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
                <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
                <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
            </div>
        </div>
    )
}

export default Background2