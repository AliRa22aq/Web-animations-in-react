import React from 'react'
import './App.css';
import useWebAnimations from "@wellyshen/use-web-animations";



function Lion({speed}) {

        const { ref } = useWebAnimations({
            keyframes: [            
                {transform: "translate(-000px, 0px)"},
                {transform: "translate(-250px, 0px)"}
            ],
            
            timing: {
                duration: 6000,
                direction: "alternate",
                iterations: Infinity,
            },
          })

    return (
        <div id= "lion" ref={ref}>
            
            <img 
            src= "https://i.pinimg.com/originals/2b/2b/9e/2b2b9e6898f62e41d32056e7cfe492e1.gif" alt= "Lion" 
            height= "300"
            width= "450"
            />
            
        </div>
    )
}

export default Lion
