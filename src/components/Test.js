import React, { useState, useEffect } from "react";
import useWebAnimations from "@wellyshen/use-web-animations";

export const Test = () => {
  const { ref, animate } = useWebAnimations({
    id: "fall", // Set animation id, default is empty string
    keyframes: [{ top: 0, easing: "ease-in" }, { top: "500px" }],
    timing: { duration: 300, fill: "forwards" },
    onFinish: ({ animate, animation }) => {
      // Lifecycle is triggered by each animation, we can check the id to prevent animation from repeating
      if (animation.id === "bounce") return;

      animate({
        id: "bounce",
        keyframes: [
          { top: "500px", easing: "ease-in" },
          { top: "10px", easing: "ease-out" },
        ],
        timing: { duration: 300, composite: "add" },
      });
    },
  });

  return (
    <div className="container">
      <div style={{background: "red", height: 100, width: 100}} ref={ref} > xxxxx </div>
    </div>
  );
};