import React from 'react';
import styles from './Footer.module.css';
import haloImg from '../assets/背景光晕.png';

const Footer = () => {
    return (
        <section id="contact" className={styles.footerContainer}>
            <div className={styles.scrollTracker}>
                <footer className={styles.stickyFrame}>
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

                    {/* 🌟 新增版权声明元素 */}
                    <div className={styles.copyright}>
                        &copy; 2026 HE XIN
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Footer;