import React, { useEffect, useState } from 'react';
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";


import Background1 from './components/background1';
import Background2 from './components/background2';
import Forground1 from './components/Forground1';
import Forground2 from './components/Forground2';
import Lion from './Lion';

var spriteFrames = [
  { transform: 'translateY(0)' },
  { transform: 'translateY(-100%)' }

];

var spiritTimings = {
  easing: 'steps(7, end)',
  direction: "reverse",
  duration: 600,
  playbackRate: 1,
  iterations: Infinity
}

function App() {
  const [speed, setspeed] = useState(1)

  //Main Animation
  const { ref, getAnimation } = useWebAnimations({
    keyframes: spriteFrames,
    timing: spiritTimings,
    onReady: ({ animation }) => {
      animation.currentTime = animation.effect.getTiming().duration / 2
    },
      
  })

    const speedUp = () => {
     const animation = getAnimation(); 
      setspeed(animation.playbackRate);
      if (animation.playbackRate < 5) {
      animation.updatePlaybackRate(animation.playbackRate * 1.1);
    }    
    }

useEffect(()=>{

    setInterval(()=> {
      const animation = getAnimation(); 
   if (animation.playbackRate > 0.4){
        animation.playbackRate *= 0.9;
        setspeed(animation.playbackRate);

        }
    }, 1000)

  },[] )


  return (
    <div onClick={() => { speedUp() }}>

      <div class="sky"></div>
      <div class="earth">
        <div>                    
          <div id="red-queen_and_alice">
            <img
              ref={ref}
              id="red-queen_and_alice_sprite"
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
              alt="Alice and the Red Queen running to stay in place." />
          </div>

        </div>
      </div>

      <Background1 speed = {speed}/>
      <Background2 speed = {speed} />
      <Forground1 speed = {speed} />
      <Forground2 speed = {speed} />
      <Lion speed = {speed}/>


    </div>

  );
  }


export default App;
