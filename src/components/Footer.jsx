import React, { useEffect, useRef, useState } from 'react';
import styles from './Footer.module.css';
import haloImg from '../assets/背景光晕.png';

const Footer = () => {
    const footerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Footer.jsx 内部
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.3 } // 露出 30% 即开始文字生长动画
        );

        if (footerRef.current) {
            observer.observe(footerRef.current);
        }
        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" ref={footerRef} className={styles.footerContainer}>
            <footer className={`${styles.stickyFrame} ${isVisible ? styles.active : ''}`}>
                <div className={styles.haloLayer}>
                    <img src={haloImg} className={styles.haloImage} alt="Footer Halo" />
                </div>

                <div className={styles.contentLayer}>
                    <h2 className={styles.thanksText}>ご覧いただきありがとうございます。</h2>
                    <p className={styles.subText}>下記のメールアドレスにお気軽にご連絡ください</p>

                    <div className={styles.emailBadge}>
                        <a href="mailto:25aw0107@jec.ac.jp">25aw0107@jec.ac.jp</a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    &copy; 2026 HE XIN
                </div>
            </footer>
        </section>
    );
};

export default Footer;