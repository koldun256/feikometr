import React, { useRef, useEffect } from "react";

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let spikeActive = false;
    let spikeTimer = 0;
    let spikeCooldown = Math.random() * 1000 + 500;

    let currentAmplitude = height * 0.3;
    const baseAmplitude = height * 0.3;
    const spikeAmplitude = height * 0.8;
    const gridSize = 40;
    const noiseSeed = Array.from({ length: 5 }, () => Math.random() * 1000);

    const frameRate = 15; // обновление 30 раз в секунду
    const interval = 1000 / frameRate;
    let lastUpdate = 0;

    const draw = (t) => {
      if (t - lastUpdate < interval) {
        requestAnimationFrame(draw);
        return;
      }
      lastUpdate = t;

      ctx.fillStyle = "#f2ecd2";
      ctx.fillRect(0, 0, width, height);

      ctx.strokeStyle = "#cfc8a9";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      spikeTimer += interval;
      if (!spikeActive && spikeTimer >= spikeCooldown) {
        spikeActive = true;
        spikeTimer = 0;
        spikeCooldown = Math.random() * 1000 + 500;
        setTimeout(() => (spikeActive = false), 150 + Math.random() * 150);
      }

      const targetAmplitude = spikeActive ? spikeAmplitude : baseAmplitude;
      currentAmplitude += (targetAmplitude - currentAmplitude) * 0.4;

      ctx.strokeStyle = "#cfc8a9";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      const cy = height / 2;
      for (let x = 0; x < width; x++) {
        let y = 0;
        for (let i = 0; i < noiseSeed.length; i++) {
          const f = 0.5 + i * 0.3;
          const speed = 0.0003 + i * 0.0002;
          y += Math.sin((x + t * speed * 1000 + noiseSeed[i]) * f) * currentAmplitude * (0.3 + Math.random() * 0.2);
        }
        y = cy + y * 0.2 + (Math.random() - 0.5) * 8;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      requestAnimationFrame(draw);
    };

    let animationFrame = requestAnimationFrame(draw);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-[#f2ecd2]"
    />
  );
}
