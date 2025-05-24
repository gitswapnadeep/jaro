
"use client";

import React, { useState, useEffect, useCallback } from 'react';

interface Bubble {
  id: number;
  size: number;
  initialLeft: number;
  animationDuration: number;
  animationDelay: number;
}

export function AnimatedPageBackground() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const nextBubbleId = React.useRef(0);

  const addBubble = useCallback(() => {
    const size = Math.random() * 30 + 10; // Bubble size between 10px and 40px
    const newBubble: Bubble = {
      id: nextBubbleId.current++,
      size: size,
      initialLeft: Math.random() * 100, // % from left
      animationDuration: Math.random() * 5 + 5, // duration between 5s and 10s
      animationDelay: Math.random() * 2, // delay up to 2s
    };
    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);

    // Remove bubble after animation finishes
    setTimeout(() => {
      setBubbles((prev) => prev.filter((b) => b.id !== newBubble.id));
    }, (newBubble.animationDuration + newBubble.animationDelay) * 1000 + 100); // +100ms buffer
  }, []);

  useEffect(() => {
    // Add initial set of bubbles
    for (let i = 0; i < 5; i++) {
        setTimeout(addBubble, i * 500);
    }

    const intervalId = setInterval(addBubble, 1000); // Add a new bubble every second
    return () => clearInterval(intervalId);
  }, [addBubble]);

  return (
    <>
      <div className="animated-gradient-bg" />
      <div className="bubbles-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="bubble-particle"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.initialLeft}%`,
              animationDuration: `${bubble.animationDuration}s`,
              animationDelay: `${bubble.animationDelay}s`,
            }}
          />
        ))}
      </div>
    </>
  );
}
