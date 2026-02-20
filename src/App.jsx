import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import "./App.css";

export default function App() {
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      const target = e.target;
      // 这里的选择器决定了哪些元素会让鼠标变大
      const clickable = target.closest('a, button, .workItem, li, img');
      setIsHovered(!!clickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // 🌟 将样式提取出来，让 return 结构更清爽
  const cursorStyle = {
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: 9999999,
    pointerEvents: 'none',
    borderRadius: '50%',
    // 根据 hover 状态切换数值
    width: isHovered ? '60px' : '12px',
    height: isHovered ? '60px' : '12px',
    backgroundColor: isHovered ? 'rgba(160, 219, 223, 0.6)' : 'rgba(0, 0, 0, 0.3)',
    // 坐标跟随 + 居中修正
    transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0) translate(-50%, -50%)`,
    // 🌟 这里控制从小变大的速度：1s
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