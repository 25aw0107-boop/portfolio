import React, { useMemo } from 'react';
import styles from './Daily.module.css';
import titleBg from '../../assets/标题背景色.png';

// 🌟 1. 分别批量导入两个文件夹下的图片
const imagesFolder1 = import.meta.glob('../../assets/mylifeImg/1/*.{png,jpg,jpeg,webp}', { eager: true });
const imagesFolder2 = import.meta.glob('../../assets/mylifeImg/2/*.{png,jpg,jpeg,webp}', { eager: true });

const Daily = () => {
    // 🌟 2. 处理第一组图片 (文件夹 1)
    const row1Items = useMemo(() => {
        const paths = Object.values(imagesFolder1).map((mod) => mod.default);
        // 复制一份以实现无缝滚动
        return [...paths, ...paths].map((path, i) => ({
            id: `row1-${i}`,
            imgUrl: path,
            text: `Moment ${i + 1}`
        }));
    }, []);

    // 🌟 3. 处理第二组图片 (文件夹 2)
    const row2Items = useMemo(() => {
        const paths = Object.values(imagesFolder2).map((mod) => mod.default);
        // 复制一份以实现无缝滚动
        return [...paths, ...paths].map((path, i) => ({
            id: `row2-${i}`,
            imgUrl: path,
            text: `Memory ${i + 1}`
        }));
    }, []);

    return (
        <section className={styles.dailySection} id="daily">
            <div className={styles.dailyHeader}>
                <div className={styles.titleWrapper}>
                    <img src={titleBg} alt="" className={styles.titleBg} />
                    <h2 className={styles.title}>日常の断片</h2>
                </div>

                <div className={styles.dailyDescBox}>
                    <span className={styles.tag}>#MyLife</span>
                    <p className={styles.descText}>
                        自分の趣味や、日々のささやかな記録。
                    </p>
                </div>
            </div>

            <div className={styles.carouselContainer}>
                {/* 第一排：使用文件夹 1 的图片，向左滚动 */}
                <div className={styles.carouselRow}>
                    <div className={`${styles.carouselTrack} ${styles.trackLeft}`}>
                        {row1Items.map((item, index) => (
                            <div className={styles.carouselItem} key={item.id}>
                                <div className={styles.imgBox}>
                                    <img src={item.imgUrl} alt={item.text} loading="eager" />
                                </div>
                                <p className={styles.imgCaption}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 第二排：使用文件夹 2 的图片，向右滚动 */}
                <div className={styles.carouselRow}>
                    <div className={`${styles.carouselTrack} ${styles.trackRight}`}>
                        {row2Items.map((item, index) => (
                            <div className={styles.carouselItem} key={item.id}>
                                <div className={styles.imgBox}>
                                    <img src={item.imgUrl} alt={item.text} loading="eager" />
                                </div>
                                <p className={styles.imgCaption}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Daily;