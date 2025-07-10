import React, { useRef, useEffect } from "react";

export default function WaveLoader() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrameId;
    let width = 0;
    let height = 0;

    const waveConfigs = [
      { amplitude: 0.2, frequency: 0.02, speed: 0.03, color: "#2e4029" },
      { amplitude: 0.15, frequency: 0.025, speed: 0.05, color: "#3f5132" },
      { amplitude: 0.1, frequency: 0.015, speed: 0.02, color: "#5c6b49" },
    ];

    const draw = (t) => {
      ctx.clearRect(0, 0, width, height);
      waveConfigs.forEach((wave, i) => {
        ctx.beginPath();
        for (let x = 0; x < width; x++) {
          const y =
            height / 2 +
            wave.amplitude * height *
              Math.sin(x * wave.frequency + t * wave.speed + i * Math.PI / 2);
          ctx.lineTo(x, y);
        }
        ctx.strokeStyle = wave.color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });
    };

    let time = 0;

    const animate = () => {
      time += 1;
      draw(time);
      animationFrameId = requestAnimationFrame(animate);
    };

    const resize = () => {
      const container = canvas.parentElement;
      width = container.clientWidth;
      height = Math.floor(width / 4); // пропорция 1:4
      canvas.width = width;
      canvas.height = height;
    };

    resize();
    animate();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="w-full">
      <canvas
        ref={canvasRef}
        className="pointer-events-none"
        style={{ display: "block", backgroundColor: "transparent" }}
      />
    </div>
  );
}
