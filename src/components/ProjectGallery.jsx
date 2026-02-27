// src/components/ProjectGallery.jsx
import React from 'react';
import styles from './ProjectGallery.module.css';

export default function ProjectGallery({ project }) {
    // 安全检查：如果该项目没有画廊图片，则不渲染此模块
    if (!project.gallery || project.gallery.length === 0) return null;

    return (
        <section className={styles.gallerySection}>
            <div className={styles.bgStrip}>
                <div className={styles.imageContainer}>
                    {project.gallery.map((imgSrc, index) => (
                        <div key={index} className={styles.imgWrapper}>
                            <img
                                src={imgSrc}
                                alt={`Project Detail ${index + 1}`}
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}