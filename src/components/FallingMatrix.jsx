import React, { useEffect, useRef } from 'react';

const FallingMatrix = () => {
  const canvasRef = useRef(null);
  const columns = Math.floor(window.innerWidth / 20); // Number of vertical lines based on screen width
  const particleCount = 20; // Number of characters per column
  const particles = Array.from({ length: columns }, () => 
    Array.from({ length: particleCount }, () => ({
      value: Math.random() < 0.5 ? '0' : '1', // Randomly initialize value
      positionY: Math.random() * window.innerHeight, // Random starting position
    }))
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);

      // Set background color
      context.fillStyle = 'black';
      context.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((column, index) => {
        column.forEach((particle, particleIndex) => {
          context.fillStyle = 'rgba(0, 255, 0, 0.4)'; // Less intense green
          context.font = '20px monospace'; // Font settings
          context.fillText(particle.value, index * 20, particle.positionY + particleIndex * 20); // Adjust vertical spacing

          // Update position
          particle.positionY += 3; // Reduced speed

          // Reset position when reaching the bottom
          if (particle.positionY > canvas.height) {
            particle.positionY = -0.5*canvas.height; 
            particle.value = Math.random() < 0.5 ? '0' : '1'; // Change value randomly
          }
        });
      });

      requestAnimationFrame(render);
    };

    render();

    // Clean up
    return () => {
      // Any cleanup logic can go here if necessary
    };
  }, [particles]);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }} />;
};

export default FallingMatrix;
