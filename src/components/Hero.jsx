import React from 'react';
import styles from './Hero.module.css';

// 导入图片资源
import logo from "../assets/logo.png";
import sky from "../assets/主视觉背景天空.png";
import mount from "../assets/主视觉背景山脉.png";
import bgInk from "../assets/背景水墨.png";

const Hero = () => {
    return (
        <section className={styles.hero} aria-label="Hero">
            {/* 水墨背景 */}
            <div className={styles.inkBgLeft} aria-hidden="true">
                <img src={bgInk} alt="" className={styles.inkImg} />
            </div>
            <div className={styles.inkBgRight} aria-hidden="true">
                <img src={bgInk} alt="" className={styles.inkImg} />
            </div>

            {/* 🌟 修复点：左侧装饰文字容器 */}
            <div className={styles.leftDecor} aria-hidden="true">
                <span className={styles.decorCol}>ポートフォリオ</span>
                <span className={styles.decorColSub}>何鑫の</span>
            </div>

            {/* 中间核心挂轴区域 */}
            <div className={styles.stage}>
                <div className={styles.heroBg} aria-hidden="true">
                    <img src={sky} alt="" className={styles.bgSky} />
                    <img src={mount} alt="" className={styles.bgMount} />
                </div>

                <div className={styles.heroInner}>
                    <div className={styles.seal} aria-label="Seal">
                        <img src={logo} alt="logo" className={styles.sealImg} />
                    </div>

                    <h1 className={styles.vTitle}>
                        <span className={styles.col}>思い伝え</span>
                        <br />
                        <span className={styles.col}>
                            ユーザーの<span className={styles.accent}>心</span>
                        </span>
                        <br />
                        <span className={styles.col}>動かす仕事</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default Hero;