import React, { useEffect, useRef } from "react";



const FallingMatrix = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // Function to set canvas size to match document height and width
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight; // Full scrollable height
    };

    // Initial canvas setup
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const columns = Math.floor(canvas.width / 20);
    const particleCount = 20;
    const particles = Array.from({ length: columns }, () =>
      Array.from({ length: particleCount }, () => ({
        value: Math.random() < 0.5 ? "0" : "1",
        positionY: Math.random() * canvas.height, // Random starting position
      }))
    );

    const render = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "black";
      context.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((column, index) => {
        column.forEach((particle, particleIndex) => {
          context.fillStyle = "rgba(0, 255, 0, 0.15)";
          context.font = "20px monospace";
          context.fillText(
            particle.value,
            index * 20,
            particle.positionY + particleIndex * 20
          );
          particle.positionY += 3;

          // Reset particle position to the top if it goes below the canvas height
          if (particle.positionY > canvas.height) {
            particle.positionY = -20 * particleIndex; // Reset position with a slight offset
            particle.value = Math.random() < 0.5 ? "0" : "1"; // Randomize the value
          }
        });
      });

      requestAnimationFrame(render);
    };

    render();

    // Clean up event listener on unmount
    return () => window.removeEventListener("resize", setCanvasSize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }}
    />
  );
};

export default FallingMatrix;
