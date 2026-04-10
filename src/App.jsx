import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";
import Works from "./pages/Works";
// 🌟 核心修复：引入你刚刚新建的 About 页面
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop";
import Lenis from '@studio-freight/lenis'
import "./App.css";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // 1. 初始化 Lenis
    const lenis = new Lenis({
      // 🌟 关键：改用 lerp (0.05 ~ 0.1 之间)，这会让滚动更跟手
      // lerp 越小越丝滑但越慢，越大越接近原生感觉
      lerp: 0.1,

      // 🌟 如果用了 lerp，就不再需要 duration 和 easing 了
      // duration: 1.2,
      // easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),

      wheelMultiplier: 1.0,  // 滚轮灵敏度
      touchMultiplier: 1.5,  // 触控灵敏度（针对触控板和手机）
      infinite: false,
      smoothWheel: true,
    });

    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // 🌟 自动监听内容高度变化，不需要手动调用 resize
    const resizeObserver = new ResizeObserver(() => lenis.resize());
    resizeObserver.observe(document.body);

    // 2. 鼠标移动监听
    const handleMouseMove = (e) => {
      // 🌟 核心修改：只在支持指针（鼠标）且宽度大于 768px 的设备上运行
      if (window.matchMedia('(pointer: fine) and (min-width: 769px)').matches) {
        setMousePos({ x: e.clientX, y: e.clientY });

        const clickable = e.target.closest('a, button, li, img, [class*="navItem"], [class*="imgWrapper"], .custom-hover-target');
        setIsHovered(!!clickable);
      } else {
        // 移动端确保状态为关闭
        setIsHovered(false);
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
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