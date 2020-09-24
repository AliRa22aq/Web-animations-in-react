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
                    animation.playbackRate = speed;
                    }
                    else if (speed > 1.2) {
                      animation.playbackRate = speed * 0.7;
                    } 
                    else {
                      animation.playbackRate = speed -0.2;
                    } 
    })
    return (
        <div>
        <div class="scenery" id="foreground1" ref = {ref}>
                
                <img 
                id="palm2" 
                src="https://i.pinimg.com/originals/fe/34/50/fe34509ae2178c90c2ca3db059653190.png" 
                alt=" " 
                height = "400"
                width = "400"

                />

            </div>
        </div>
    )
}

export default Forground1
