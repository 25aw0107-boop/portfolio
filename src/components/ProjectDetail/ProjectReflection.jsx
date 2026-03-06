// src/components/ProjectReflection.jsx
import React from 'react';
import styles from './ProjectReflection.module.css';
import titleBg from '../../assets/标题背景色.png';
import bgInk from '../../assets/背景水墨.png'; // 🌟 引入水墨图

export default function ProjectReflection({ project }) {
    if (!project.reflections) return null;

    return (
        <section className={styles.reflectionSection}>
            {/* 🌟 插入固定的装饰背景图 */}
            <img src={bgInk} className={styles.inkTopRight} alt="" />
            <img src={bgInk} className={styles.inkBottomLeft} alt="" />

            <div className={styles.container}>
                {project.reflections.map((item, index) => (
                    <div key={index} className={styles.reflectionBlock}>
                        <div className={styles.titleWrapper}>
                            <img src={titleBg} alt="" className={styles.titleDecor} />
                            <h3 className={styles.title}>{item.title}</h3>
                        </div>
                        <p className={styles.content}>{item.content}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}