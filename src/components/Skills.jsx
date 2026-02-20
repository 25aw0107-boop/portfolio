import React from 'react';
import styles from './Skills.module.css';
import boatImg from '../assets/小船.png';
import titleBg from '../assets/标题背景色.png'; // 如果你想用别的背景也可以换

const Skills = () => {
    return (
        <section className={styles.skillsSection}>
            {/* 标题区域 */}
            <div className={styles.titleWrapper}>
                <h2 className={styles.title}>― スキル ―</h2>
            </div>

            {/* 动画海浪与小船舞台 */}
            <div className={styles.stage}>

                {/* 1. 后层波浪 (远景，速度较慢) */}
                <div className={styles.waveLayer}>
                    <div className={`${styles.wave} ${styles.wave1}`}></div>
                    <div className={`${styles.wave} ${styles.wave2}`}></div>
                </div>

                {/* 2. 主体：小船与技能 */}
                <div className={styles.boatAndSkills}>

                    {/* 小船 */}
                    <img src={boatImg} alt="小船" className={styles.boat} />

                    {/* 技能组 1：コーディング (左上方) */}
                    <div className={`${styles.skillGroup} ${styles.groupCoding}`}>
                        <span className={styles.mainSkill}>コーディング</span>
                        <span className={`${styles.subSkill} ${styles.pos1}`}>html</span>
                        <span className={`${styles.subSkill} ${styles.pos2}`}>JavaScript</span>
                        <span className={`${styles.subSkill} ${styles.pos3}`}>css</span>
                        <span className={`${styles.subSkill} ${styles.pos4}`}>react</span>
                    </div>

                    {/* 技能组 2：デザイン (右上方) */}
                    <div className={`${styles.skillGroup} ${styles.groupDesign}`}>
                        <span className={styles.mainSkill}>デザイン</span>
                        <span className={`${styles.subSkill} ${styles.pos5}`}>Figma</span>
                        <span className={`${styles.subSkill} ${styles.pos6}`}>Photoshop</span>
                        <span className={`${styles.subSkill} ${styles.pos7}`}>Illustrator</span>
                    </div>

                    {/* 技能组 3：編集 (正下方) */}
                    <div className={`${styles.skillGroup} ${styles.groupEditing}`}>
                        <span className={styles.mainSkill}>編 集</span>
                        <span className={`${styles.subSkill} ${styles.pos8}`}>Premiere Pro</span>
                        <span className={`${styles.subSkill} ${styles.pos9}`}>After Effects</span>
                        <span className={`${styles.subSkill} ${styles.pos10}`}>CapCut</span>
                    </div>

                </div>

                {/* 3. 前层波浪 (近景，速度稍快，盖在船身上一点点) */}
                <div className={`${styles.waveLayer} ${styles.foregroundWaves}`}>
                    <div className={`${styles.wave} ${styles.wave3}`}></div>
                    <div className={`${styles.wave} ${styles.wave4}`}></div>
                </div>

            </div>
        </section>
    );
};

export default Skills;