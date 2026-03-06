import React from 'react';
import styles from './MyLife.module.css';
import photo2 from '../../assets/写真2.jpg'; // 确保路径正确
import inkBg from '../../assets/背景水墨.png'; // 引入素材

const MyLife = () => {
    return (
        <section className={styles.lifeSection}>
            {/* 🌟 引入水墨元素 */}
            <img src={inkBg} className={`${styles.inkSide} ${styles.inkLeft}`} alt="" draggable="false" />
            <img src={inkBg} className={`${styles.inkSide} ${styles.inkRight}`} alt="" draggable="false" />

            <div className={styles.container}>
                {/* 左侧文字区 */}
                <div className={styles.textContent}>
                    <h2 className={styles.mainTitle}><span className={styles.accent}>伝え</span>続ける人生</h2>
                    <div className={styles.experienceList}>
                        <p>8 年前、環境デザインで伝え</p>
                        <p>7 年前、グラフィックデザインで伝え</p>
                        <p>5 年前、ショート動画で伝え</p>
                        <p>今度は、Webサイトで伝え</p>
                    </div>
                    <div className={styles.signature}>
                        <span className={styles.name}>何 鑫</span>
                    </div>
                </div>

                {/* 中间垂直标识 */}
                <div className={styles.originTag}>
                    中国出身
                </div>

                {/* 右侧照片区 */}
                <div className={styles.imageWrapper}>
                    <img
                        src={photo2}
                        alt="My Life"
                        className={styles.profilePhoto}
                        draggable="false"
                    />
                </div>

            </div>
        </section>
    );
};

export default MyLife;