import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProjectHeader.module.css';

const ProjectHeader = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        // 防止开启菜单时页面还能滚动
        if (!isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    };

    const handleNavigate = (path) => {
        setIsOpen(false);
        document.body.style.overflow = 'unset';
        navigate(path);
    };

    return (
        <>
            {/* 汉堡按钮：由两根线组成 */}
            <div
                className={`${styles.menuBtn} ${isOpen ? styles.menuOpen : ''}`}
                onClick={toggleMenu}
            >
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </div>

            {/* 全屏导航层 */}
            <nav className={`${styles.headerWrapper} ${isOpen ? styles.showNav : ''}`}>
                <div className={styles.navItem} onClick={() => handleNavigate('/')}>
                    {/* 🌟 加上这根线 */}
                    <div className={styles.line}></div>
                    <span className={styles.text}>ホームページへ</span>
                </div>
                <div className={styles.navItem} onClick={() => handleNavigate('/works')}>
                    {/* 🌟 加上这根线 */}
                    <div className={styles.line}></div>
                    <span className={styles.text}>デザインしたもの</span>
                </div>
            </nav>
        </>
    );
};

export default ProjectHeader;