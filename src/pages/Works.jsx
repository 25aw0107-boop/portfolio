import React, { useState, useEffect } from 'react'; // 加上 useEffect
import ProjectHeader from '../components/ProjectHeader';
import PageTransition from '../components/PageTransition';
import { projectsData } from '../data/projectsData';
import { Link } from 'react-router-dom';
import styles from './Works.module.css';

import bgInk from '../assets/背景水墨.png';
import titleInk from '../assets/标题背景色.png';
import Footer from '../components/Footer';

export default function Works() {
    // 1. 设置初始分类为 'web-site'
    const [activeTab, setActiveTab] = useState('web-site');

    // 2. 分类配置
    const categories = [
        { id: 'web-site', label: 'Webサイト' },
        { id: 'video', label: '動画編集' },
        { id: 'design', label: 'デザイン' },
        { id: 'others', label: 'その他' }
    ];

    // 3. 核心：根据 activeTab 过滤数据
    const filteredProjects = projectsData.filter(project => project.category === activeTab);

    // 🌟 新增：监听 activeTab 变化，执行滚动
    useEffect(() => {
        // 检查 window.lenis 是否存在（防止报错）
        if (window.lenis) {
            // 使用 Lenis 的 scrollTo 方法
            window.lenis.scrollTo(0, {
                immediate: false, // 是否立即跳转（false 代表有平滑过渡）
                duration: 1.2     // 滚动耗时，可以和你初始化时的时长一致
            });
        } else {
            // 如果 Lenis 没加载成功，则回退到原生滚动
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [activeTab]);

    return (
        <div className={styles.worksPage}>
            <PageTransition />
            <ProjectHeader />
            <img src={bgInk} className={styles.inkBgRight} alt="" />
            <div className={styles.container}>
                <aside className={styles.sideArea}>
                    <div className={styles.titleGroup}>
                        <img src={titleInk} className={styles.inkTitle} alt="" />
                        <h1 className={styles.mainTitle}>作品集</h1>
                    </div>

                    <nav className={styles.filterNav}>
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={activeTab === cat.id ? styles.active : ''}
                                onClick={() => setActiveTab(cat.id)}
                            >
                                {activeTab === cat.id && <span className={styles.dash}>— </span>}
                                {cat.label}
                            </button>
                        ))}
                    </nav>
                </aside>
                <main className={styles.worksGrid}>
                    {filteredProjects.length > 0 ? (
                        <>
                            {filteredProjects.map((project) => (
                                <Link
                                    to={`/project/${project.id}`}
                                    key={project.id}
                                    className={styles.workCard}
                                >
                                    <div className={styles.imageBox}>
                                        <img src={project.img} alt={project.title} />
                                        <div className={styles.hoverOverlay}>
                                            <span>VIEW MORE</span>
                                        </div>
                                    </div>
                                    <div className={styles.infoBox}>
                                        <span className={styles.tag}>{project.tag}</span>
                                        <h3 className={styles.workTitle}>{project.title}</h3>
                                        <p className={styles.workDesc}>{project.desc}</p>
                                        <div className={styles.moreBtn}>
                                            <span>詳しくみる</span>
                                            <div className={styles.line}></div>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                            <section className={styles.footerSpacing}>
                                <p className={styles.placeholderText}>--- END ---</p>
                            </section>
                        </>
                    ) : (
                        /* 当分类下没有数据时显示 */
                        <div className={styles.emptyContainer}>
                            <div className={styles.emptyMessage}>
                                現在、コンテンツを准备中です。<br />
                                公开まで少々お待ちください。
                            </div>
                        </div>
                    )}
                </main>
            </div>
            <Footer />
        </div>
    );
}