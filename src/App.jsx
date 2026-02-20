import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import Lenis from '@studio-freight/lenis'
import "./App.css";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // --- 1. 初始化 Lenis (平滑滚动) ---
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    })

    // 🌟 关键：将实例挂载到 window，让 Header 组件可以访问
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // --- 2. 鼠标移动监听 ---
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      // 包含 a, button 以及你自定义的类名
      const clickable = target.closest('a, button, .workItem, li, img');
      setIsHovered(!!clickable);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // 清理函数
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  // 🌟 自定义鼠标样式
  const cursorStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 9999999,
    pointerEvents: 'none',
    borderRadius: '50%',
    width: isHovered ? '60px' : '12px',
    height: isHovered ? '60px' : '12px',
    backgroundColor: isHovered ? 'rgba(160, 219, 223, 0.6)' : 'rgba(0, 0, 0, 0.3)',
    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
    transition: 'width 0.6s ease, height 0.6s ease, background-color 0.6s ease',
    willChange: 'transform'
  };

  return (
    <>
      <Home />
      <div className="custom-cursor" style={cursorStyle} />
    </>
  );
}