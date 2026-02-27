import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Works.module.css';

// 🌟 引入外部数据
import { projectsData } from '../data/projectsData';

// 導入タイトル水墨背景
import inkTitleBg from '../assets/标题背景色.png';
// 導入大塊背景水墨
import bgInk from '../assets/背景水墨.png';

export default function Works() {
    return (
        <section id="works" className={styles.worksSection}>
            {/* 右上と左下の大塊水墨背景 */}
            <img src={bgInk} alt="" className={styles.inkTopRight} />
            <img src={bgInk} alt="" className={styles.inkBottomLeft} />

            {/* タイトルエリア */}
            <div className={styles.titleWrapper}>
                <img src={inkTitleBg} alt="ink background" className={styles.titleBg} />
                <h2 className={styles.title}>制作実績</h2>
            </div>

            {/* 作品リストエリア */}
            <div className={styles.worksList}>
                {/* 🌟 核心：在这里直接 slice(0, 3) 限制只取数组前三个 */}
                {projectsData.slice(0, 3).map((work, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <Link
                            to={`/project/${work.id}`}
                            key={work.id}
                            className={`${styles.workItem} ${!isEven ? styles.reverse : ''}`}
                        >
                            {/* 文字情報 */}
                            <div className={styles.textContent}>
                                <span className={styles.tag}>{work.tag}</span>
                                <h3 className={styles.workTitle}>{work.title}</h3>
                                <div className={styles.workDesc}>
                                    {work.desc.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}<br />
                                        </React.Fragment>
                                    ))}
                                </div>
                                <span className={styles.role}>{work.role}</span>
                                <span className={styles.detailLink}>詳しくみる</span>
                            </div>

                            {/* 画像エリア */}
                            <div className={styles.imageWrapper}>
                                <div className={styles.imageOuterCircle}>
                                    <img src={work.img} alt={work.title} className={styles.workImage} />
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* 下部「すべてを見る」ボタン */}
            <div className={styles.viewAllWrapper}>
                <Link to="/works" className={styles.viewAllBtn}>
                    <div className={styles.arrowCircle}>
                        <span className={styles.arrow}>→</span>
                    </div>
                    <span className={styles.viewAllText}>すべてを見る</span>
                </Link>
            </div>
        </section>
    );
}