import React from 'react'
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";



function Lion({ speed }) {
    console.log(speed)

    const { ref, animate } = useWebAnimations({
        keyframes: [{ transform: "translate(-500px, 0px)" }, { transform: "translate(0px, 0px)" }],
        timing: { duration: 2000 }
    });


    if (speed > 2) {
        animate({
            keyframes: [{ transform: "translate(-150px, 0px)" }, { transform: "translate(-200px, 0px)" }],
            timing: { duration: 1000, direction: "alternate" },
            onReady: ({ animation }) => {
                animation.currentTime = animation.effect.getTiming().duration / 2
              },
        })
    }

    if (speed > 2.5) {
        animate({
            keyframes: [{ transform: "translate(-200px, 0px)" }, { transform: "translate(-300px, 0px)" }],
            timing: { duration: 2000, direction: "alternate" },
            onReady: ({ animation }) => {
                animation.currentTime = animation.effect.getTiming().duration / 2
              },
        })
    }

    if (speed > 3) {
        animate({
            keyframes: [{ transform: "translate(-300px, 00px)" }, { transform: "translate(-500px, 00px)" }],
            timing: { duration: 2000, direction: "alternate" },
            onReady: ({ animation }) => {
                animation.currentTime = animation.effect.getTiming().duration / 2
              },
        })
    }

    if (speed > 3.5) {
        console.log(speed)
        animate({
            keyframes: [{ transform: "translate(-500px, 00px)" }, { transform: "translate(-800px, 00px)" }],
            timing: { duration: 2000, direction: "alternate" },
            onReady: ({ animation }) => {
                animation.currentTime = animation.effect.getTiming().duration / 2
              },
        })
    }








    return (
        <div id="lion" ref={ref}>

            <img
                src="https://i.pinimg.com/originals/2b/2b/9e/2b2b9e6898f62e41d32056e7cfe492e1.gif" alt="Lion"
                height="300"
                width="450"
            />

        </div>
    )
}

export default Lion
