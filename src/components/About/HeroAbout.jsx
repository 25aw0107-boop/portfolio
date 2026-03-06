import React from 'react';
import styles from './HeroAbout.module.css';
import boatImg from '../../assets/小船.png';
import denImg from '../../assets/伝.png';

// src/pages/About.jsx
import sun1 from '../../assets/太阳1.png';

const HeroAbout = () => {
    // 包含位置、大小(scale)、初始角度(rotate)、深浅(opacity)
    const designHearts = [
        // 浪尖 1 (左侧深色)
        { id: 1, top: '48%', left: '12%', scale: 1.1, rotate: '-60deg', opacity: 0.8, delay: '0s' },
        { id: 2, top: '53%', left: '18%', scale: 0.9, rotate: '-15deg', opacity: 0.7, delay: '1s' },

        // 浪谷 1 (中间)
        { id: 3, top: '65%', left: '30%', scale: 1.2, rotate: '-20deg', opacity: 0.8, delay: '0.5s' },

        // 小船周围 (中景)
        { id: 4, top: '58%', left: '46%', scale: 0.8, rotate: '-75deg', opacity: 0.6, delay: '1.5s' },

        // 浪尖 2 (右侧中景)
        { id: 5, top: '50%', left: '62%', scale: 1.0, rotate: '30deg', opacity: 0.7, delay: '0.8s' },
        { id: 6, top: '55%', left: '68%', scale: 0.7, rotate: '-45deg', opacity: 0.5, delay: '2s' },

        // 远景 (下方淡色)
        { id: 7, top: '70%', left: '5%', scale: 0.8, rotate: '-80deg', opacity: 0.2, delay: '1.2s' },
        { id: 8, top: '75%', left: '22%', scale: 0.6, rotate: '10deg', opacity: 0.15, delay: '2.5s' },
        { id: 9, top: '78%', left: '55%', scale: 0.9, rotate: '-70deg', opacity: 0.2, delay: '0.3s' },
        { id: 10, top: '72%', left: '80%', scale: 1.1, rotate: '20deg', opacity: 0.15, delay: '1.8s' },
        { id: 11, top: '68%', left: '92%', scale: 0.7, rotate: '-65deg', opacity: 0.1, delay: '0.6s' }
    ];

    return (
        <section className={styles.heroSection}>

            <div className={styles.sunWrapper}>
                <img src={sun1} alt="Sun" className={styles.breathingSun} />
            </div>

            {/* 2. 右侧落语文字 */}
            <div className={styles.rakugoText}>
                <p>思い伝え</p>
                <p>ユーザーの<span className={styles.accent}>心</span></p>
                <p>動かす仕事</p>
            </div>

            {/* 3. 动画舞台 */}
            <div className={styles.stage}>
                {/* 后层波浪 (wave1, wave2) */}
                <div className={styles.waveLayer}>
                    <div className={`${styles.wave} ${styles.wave1}`}></div>
                    <div className={`${styles.wave} ${styles.wave2}`}></div>
                </div>

                {/* 主体：小船与半个伝字 */}
                <div className={styles.boatAndDen}>
                    <div className={styles.combinedSubject}>
                        <img src={denImg} alt="伝" className={styles.denHalf} />
                        <img src={boatImg} alt="小船" className={styles.boat} />
                    </div>
                </div>

                {/* 🌟 渲染精准设计的心字 */}
                {designHearts.map((h) => (
                    <span
                        key={h.id}
                        className={styles.floatingHeart}
                        style={{
                            top: h.top,
                            left: h.left,
                            opacity: h.opacity,
                            animationDelay: h.delay,
                            // 🌟 将初始的 rotate 和 scale 直接写死在 transform 里，防止闪现
                            transform: `rotate(${h.rotate}) scale(${h.scale})`,
                            '--baseRotate': h.rotate,
                            '--baseScale': h.scale
                        }}
                    >
                        心
                    </span>
                ))}

                {/* 前层波浪 (wave3, wave4) */}
                <div className={`${styles.waveLayer} ${styles.foregroundWaves}`}>
                    <div className={`${styles.wave} ${styles.wave3}`}></div>
                    <div className={`${styles.wave} ${styles.wave4}`}></div>
                </div>
            </div>
        </section>
    );
};

export default HeroAbout;