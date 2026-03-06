// src/components/ProjectInfoTable.jsx
import React from 'react';
import styles from './ProjectInfoTable.module.css';

export default function ProjectInfoTable({ project }) {
    if (!project.info) return null;

    return (
        <section className={styles.infoSection}>
            <div className={styles.tableContainer}>
                {project.info.map((item, index) => (
                    <div key={index} className={styles.infoRow}>
                        <div className={styles.labelPane}>
                            <span className={styles.label}>{item.label}</span>
                        </div>
                        <div className={styles.valuePane}>
                            {/* 处理换行符 \n */}
                            {item.value.split('\n').map((line, i) => (
                                <p key={i} className={styles.valueText}>{line}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}