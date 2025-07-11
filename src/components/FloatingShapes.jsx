import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const shapes = ['◆', '●', '▲', '■', '◇', '○', '△', '□'];
const colors = ['var(--primary-cyan)', 'var(--primary-magenta)', 'var(--accent-green)'];

const FloatingShapes = () => {
  const containerRef = useRef(null);

  const createFloatingShape = () => {
    const el = document.createElement('div');
    el.innerHTML = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.position = 'fixed';
    el.style.color = colors[Math.floor(Math.random() * colors.length)];
    el.style.fontSize = `${Math.random() * 50 + 10}px`;
    el.style.opacity = '0.1';
    el.style.left = `${Math.random() * 100}%`;
    el.style.top = `${Math.random() * 100}%`;
    el.style.pointerEvents = 'none';
    el.style.zIndex = '1';

    containerRef.current.appendChild(el);

    const duration = Math.random() * 8 + 10;

    const tl = gsap.timeline({
      onComplete: () => {
        el.remove();
      }
    });

    tl.to(el, {
      y: -40,
      rotation: 180,
      duration: duration / 2,
      ease: 'sine.inOut'
    }).to(el, {
      y: 0,
      rotation: 360,
      duration: duration / 2,
      ease: 'sine.inOut'
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      for (let i = 0; i < 6; i++) {
        createFloatingShape();
      }
    }, 3000);

    // Initial load
    for (let i = 0; i < 6; i++) {
      createFloatingShape();
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <div ref={containerRef} />;
};

export default FloatingShapes;
