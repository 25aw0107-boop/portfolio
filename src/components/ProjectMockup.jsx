import React from 'react';
import styles from './ProjectMockup.module.css';
import titleBg from '../assets/标题背景色.png';

export default function ProjectMockup({ project }) {
    // 判定是否为视频分类
    const isVideo = project.category === 'video';

    return (
        <section className={styles.mockupSection}>
            <div className={styles.container}>
                {/* 左側：内容展示区（图片或视频） */}
                <div className={styles.imagePane}>
                    {isVideo ? (
                        <div className={styles.videoWrapper}>
                            <video
                                className={styles.videoPlayer}
                                controls
                                playsInline
                                poster={project.mockupImg} // 使用原本的样机图作为视频封面
                            >
                                <source src={project.videoSrc} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ) : (
                        <img src={project.mockupImg} alt="Mockup" className={styles.mockupImg} />
                    )}
                </div>

                {/* 右側：文案（位置与样式完全保持不变） */}
                <div className={styles.textPane}>
                    <div className={styles.inkWrapper}>
                        <img src={titleBg} alt="" className={styles.titleBgDecor} />
                        <h2 className={styles.subTitle}>課題説明</h2>
                    </div>

                    <p className={styles.content}>
                        {project.detailDesc}
                    </p>

                    {/* URLが存在する場合のみボタンを表示 */}
                    {project.url && (
                        <div className={styles.linkWrapper}>
                            <a
                                href={project.url}
                                className={styles.siteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {isVideo ? '動画を見る' : 'サイトを見る'}
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}