import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProjectHero.module.css';
import inkBg from '../../assets/背景水墨.png';


const ProjectHero = ({ project }) => {
    if (!project) return null;

    return (
        <section className={styles.heroSection}>
            {/* 1. 左侧：Logo + 文字介绍 */}
            <div className={styles.leftPane}>
                <div className={styles.textContainer}>
                    <span className={styles.tag}>{project.tag}</span>
                    <h1 className={styles.title}>{project.title}</h1>
                    <div className={styles.divider}></div>
                    <p className={styles.desc}>{project.desc}</p>
                    <span className={styles.role}>{project.role}</span>
                </div>

                {/* 水墨背景图 */}
                {/* <img src={inkBg} alt="" className={styles.inkDecor} /> */}
            </div>

            {/* 右半边：图片 */}
            <div className={styles.rightPane}>
                {/* 🌟 关键修改：src 指向新的 project.heroImg (即 DV 图片) */}
                <img
                    src={project.heroImg || project.img}
                    alt={project.title}
                    className={styles.mainImg}
                />
            </div>

            {/* 3. 极右：留白区 (专门腾位子给 ProjectHeader) */}
            <div className={styles.sideGutter}></div>
        </section>
    );
};

export default ProjectHero;