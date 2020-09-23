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
            <div class="scenery" id="foreground2" ref = {ref}>
                <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
                <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
            </div>


        </div>
    )
}

export default Forground2
