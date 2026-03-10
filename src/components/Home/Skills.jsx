import React from 'react';
import { Link } from 'react-router-dom'; // 🌟 必须加上这一行，否则页面会白屏
import styles from './Skills.module.css';
import boatImg from '../../assets/小船.png';

const Skills = () => {
    return (
        <section className={styles.skillsSection}>
            {/* 标题区域 */}
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>― スキル ―</h2>
            </div>

            {/* 动画海浪与小船舞台 */}
            <div className={styles.stage}>
                {/* 1. 后层波浪 */}
                <div className={styles.waveLayer}>
                    <div className={`${styles.wave} ${styles.wave1}`}></div>
                    <div className={`${styles.wave} ${styles.wave2}`}></div>
                </div>

                {/* 2. 主体：小船与技能 */}
                <div className={styles.boatAndSkills}>
                    <img src={boatImg} alt="小船" className={styles.boat} />

                    <div className={`${styles.skillGroup} ${styles.groupCoding}`}>
                        <span className={styles.mainSkill}>コーディング</span>
                        <span className={`${styles.subSkill} ${styles.pos1}`}>html</span>
                        <span className={`${styles.subSkill} ${styles.pos2}`}>JavaScript</span>
                        <span className={`${styles.subSkill} ${styles.pos3}`}>css</span>
                        <span className={`${styles.subSkill} ${styles.pos4}`}>react</span>
                    </div>

                    <div className={`${styles.skillGroup} ${styles.groupDesign}`}>
                        <span className={styles.mainSkill}>デザイン</span>
                        <span className={`${styles.subSkill} ${styles.pos5}`}>Figma</span>
                        <span className={`${styles.subSkill} ${styles.pos6}`}>Photoshop</span>
                        <span className={`${styles.subSkill} ${styles.pos7}`}>Illustrator</span>
                    </div>

                    <div className={`${styles.skillGroup} ${styles.groupEditing}`}>
                        <span className={styles.mainSkill}>編 集</span>
                        <span className={`${styles.subSkill} ${styles.pos8}`}>Premiere Pro</span>
                        <span className={`${styles.subSkill} ${styles.pos9}`}>After Effects</span>
                        <span className={`${styles.subSkill} ${styles.pos10}`}>CapCut</span>
                    </div>
                </div>

                {/* 3. 前层波浪 */}
                <div className={`${styles.waveLayer} ${styles.foregroundWaves}`}>
                    <div className={`${styles.wave} ${styles.wave3}`}></div>
                    <div className={`${styles.wave} ${styles.wave4}`}></div>
                </div>
            </div>

            {/* 🌟 底部按钮：使用你要求的圆圈样式，但通过 wrapper 实现右对齐 */}
            <div className={styles.viewAllWrapper}>
                <Link
                    to="/about"
                    className={styles.viewAllBtn}
                    target="_blank"          /* 🌟 核心：在新窗口打开 */
                    rel="noopener noreferrer" /* 🔒 安全实践：建议加上这个属性 */
                >
                    <div className={styles.arrowCircle}>
                        <span className={styles.arrow}>→</span>
                    </div>
                    <span className={styles.viewAllText}>詳しくみる</span>
                </Link>
            </div>
        </section>
    );
};

export default Skills;