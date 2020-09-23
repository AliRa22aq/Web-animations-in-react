import React, {useEffect} from 'react'
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

/* Background animations */
var sceneryFrames =   [
    { transform: 'translateX(100%)' },
    { transform: 'translateX(-100%)' }   
  ];
  
  var sceneryTimingForeground = {
    duration: 12000,
    iterations: Infinity,
  };

function Forground1({speed}) {
    const { ref, getAnimation } = useWebAnimations({
        keyframes: sceneryFrames,
        timing: sceneryTimingForeground,
        onReady: ({ animation }) => {
          animation.currentTime = animation.effect.getTiming().duration / 2
        },
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
        <div class="scenery" id="foreground1" ref = {ref}>
                <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
            </div>
        </div>
    )
}

export default Forground1
