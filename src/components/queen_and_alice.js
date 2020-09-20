import React from 'react'
import '../App.css';
import useWebAnimations from "@wellyshen/use-web-animations";

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

function Queen_and_alice() {
    const { ref, playState, getAnimation } = useWebAnimations({
        keyframes: spriteFrames,
        timing: spiritTimings
    })

    return (
        <div>
            <div id="red-queen_and_alice">
                <img
                    ref={ref}
                    id="red-queen_and_alice_sprite"
                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
                    alt="Alice and the Red Queen running to stay in place." />
            </div>
        </div>
    )
}

export default Queen_and_alice
