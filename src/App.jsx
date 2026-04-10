import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Works from "./pages/Works";
// 核心修复：引入你刚刚新建的 About 页面
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Lenis from '@studio-freight/lenis'
import "./App.css";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      // 数值越小，页面滑得越远、越久（停顿感变弱）
      // 建议在 0.05 ~ 0.07 之间尝试。0.05 会非常飘。
      lerp: 0.06,

      // 增加滚轮和触控的物理力度，解决“推不动”的问题
      wheelMultiplier: 1.2,
      touchMultiplier: 2.0,

      smoothWheel: true,
      infinite: false,
    });

    window.lenis = lenis;

    // 使用更简洁的 raf 循环
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 监听高度变化
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    // 鼠标移动逻辑保持不变...
    const handleMouseMove = (e) => {
      if (window.matchMedia('(pointer: fine) and (min-width: 769px)').matches) {
        setMousePos({ x: e.clientX, y: e.clientY });
        const clickable = e.target.closest('a, button, li, img, [class*="navItem"], [class*="imgWrapper"], .custom-hover-target');
        setIsHovered(!!clickable);
      } else {
        setIsHovered(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      cancelAnimationFrame(rafId); // 记得取消 raf 避免内存泄露
      window.removeEventListener("mousemove", handleMouseMove);
      lenis.destroy();
      resizeObserver.disconnect();
      window.lenis = null;
    };
  }, []);
  // 抽离样式逻辑，保持 return 简洁
  const cursorStyle = {
    position: 'fixed',
    left: 0, top: 0,
    zIndex: 9999999,
    pointerEvents: 'none',
    borderRadius: '50%',
    width: isHovered ? '60px' : '12px',
    height: isHovered ? '60px' : '12px',
    backgroundColor: isHovered ? 'rgba(160, 219, 223, 0.6)' : 'rgba(0, 0, 0, 0.3)',
    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
    transition: 'width 0.4s ease, height 0.4s ease, background-color 0.4s ease', // 稍微调快了一点，手感更跟手
    willChange: 'transform'
  };

  return (
    <Router>
      <ScrollToTop />
      <div className="custom-cursor" style={cursorStyle} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/works" element={<Works />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}