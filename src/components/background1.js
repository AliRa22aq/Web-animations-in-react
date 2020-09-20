import React from 'react'
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

/* Background animations */
var sceneryFrames = [
  { transform: 'translateX(100%)' },
  { transform: 'translateX(-100%)' }
];

var sceneryTimingBackground = {
  duration: 36000,
  iterations: Infinity
};


function Background1() {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: sceneryFrames,
    timing: sceneryTimingBackground
  })

  console.log(getAnimation)
  

  return (
    <div>
      <div class="scenery" id="background1" ref ={ ref}>
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>




    </div>
  )
}

export default Background1
