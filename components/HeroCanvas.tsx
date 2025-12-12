import React, { useEffect, useRef } from 'react';

const HeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    
    // Config
    const GLOBE_RADIUS = Math.min(width, height) * 0.35;
    const GLOBE_CENTER_X_OFFSET = width > 1024 ? width * 0.25 : 0;
    const CENTER_X = width * 0.5 + GLOBE_CENTER_X_OFFSET;
    const CENTER_Y = height * 0.55; // Slightly lower

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    let rotation = 0;

    // Data packets traveling on lines
    interface Packet {
      lat: number;
      lon: number;
      speed: number;
      life: number;
    }
    const packets: Packet[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      rotation += 0.003;

      // 1. Draw Atmosphere Glow
      const glow = ctx.createRadialGradient(CENTER_X, CENTER_Y, GLOBE_RADIUS * 0.8, CENTER_X, CENTER_Y, GLOBE_RADIUS * 1.5);
      glow.addColorStop(0, 'rgba(0, 144, 212, 0.2)');
      glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, width, height);

      // Sphere Parameters
      const parallels = 12;
      const meridians = 24;

      ctx.lineWidth = 1;

      // Helper to project 3D spherical coords to 2D
      const project = (lat: number, lon: number, radius: number) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lon + rotation * (180/Math.PI)) * (Math.PI / 180); // Rotate lon

        const x = radius * Math.sin(phi) * Math.cos(theta);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        const y = radius * Math.cos(phi);

        // Tilt the globe
        const tilt = 0.3; 
        const yRot = y * Math.cos(tilt) - z * Math.sin(tilt);
        const zRot = y * Math.sin(tilt) + z * Math.cos(tilt);

        const scale = 800 / (800 + zRot); // Perspective
        return {
          x: CENTER_X + x * scale,
          y: CENTER_Y + yRot * scale,
          z: zRot,
          visible: zRot < 0 // Only draw back if transparent? No, we want wireframe.
        };
      };

      // Draw Meridians (Vertical lines)
      for (let i = 0; i < meridians; i++) {
        const lon = (i / meridians) * 360;
        ctx.beginPath();
        let first = true;
        for (let lat = -90; lat <= 90; lat += 5) {
           const p = project(lat, lon, GLOBE_RADIUS);
           if (first) { ctx.moveTo(p.x, p.y); first = false; }
           else { ctx.lineTo(p.x, p.y); }
        }
        // Fade lines at back
        const pCheck = project(0, lon, GLOBE_RADIUS);
        const alpha = pCheck.z > 0 ? 0.05 : 0.3; // Front is darker (solid), Back is lighter (or vice versa)
        // Actually for wireframe: Front = Bright, Back = Dim
        ctx.strokeStyle = `rgba(0, 144, 212, ${pCheck.z < 0 ? 0.3 : 0.05})`; 
        ctx.stroke();
      }

      // Draw Parallels (Horizontal lines)
      for (let i = 1; i < parallels; i++) {
        const lat = -90 + (i / parallels) * 180;
        ctx.beginPath();
        let first = true;
        for (let lon = 0; lon <= 360; lon += 5) {
           const p = project(lat, lon, GLOBE_RADIUS);
           if (first) { ctx.moveTo(p.x, p.y); first = false; }
           else { ctx.lineTo(p.x, p.y); }
        }
        ctx.strokeStyle = `rgba(0, 47, 85, 0.2)`; 
        ctx.stroke();
      }

      // Spawn Packets
      if (Math.random() < 0.05) {
        packets.push({
          lat: (Math.floor(Math.random() * parallels) / parallels) * 180 - 90,
          lon: Math.random() * 360,
          speed: 1 + Math.random() * 2,
          life: 1.0
        });
      }

      // Draw Packets
      for (let i = packets.length - 1; i >= 0; i--) {
        const p = packets[i];
        p.lon += p.speed;
        p.life -= 0.01;
        
        const pos = project(p.lat, p.lon, GLOBE_RADIUS);
        
        // Only draw if roughly in front
        if (pos.z < 50 && p.life > 0) {
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${p.life})`;
            ctx.fill();
            
            // Trail
            ctx.beginPath();
            ctx.arc(pos.x, pos.y, 6, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0, 144, 212, ${p.life * 0.3})`;
            ctx.fill();
        }

        if (p.life <= 0) packets.splice(i, 1);
      }

      // Draw Outer Ring (Scanning Beam Border)
      ctx.beginPath();
      ctx.arc(CENTER_X, CENTER_Y, GLOBE_RADIUS * 1.2, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 144, 212, 0.05)';
      ctx.stroke();

      // Rotating dashed ring
      ctx.save();
      ctx.translate(CENTER_X, CENTER_Y);
      ctx.rotate(-rotation * 0.5);
      ctx.beginPath();
      ctx.setLineDash([20, 40]);
      ctx.arc(0, 0, GLOBE_RADIUS * 1.1, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(0, 144, 212, 0.1)';
      ctx.stroke();
      ctx.restore();

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-100" />;
};

export default HeroCanvas;