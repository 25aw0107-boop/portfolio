import React from 'react';
import styles from './Daily.module.css';
import titleBg from '../assets/标题背景色.png';

// 🌟 1. 批量导入 hobbyImg 文件夹下的所有图片
const hobbyImages = import.meta.glob('../assets/hobbyImg/*.{png,jpg,jpeg,webp}', { eager: true });
const imagePaths = Object.values(hobbyImages).map((mod) => mod.default);

const Daily = () => {
    // 🌟 2. 将图片路径映射到你的数据数组中
    const baseItems = imagePaths.map((path, i) => ({
        id: i + 1,
        text: `Moment ${i + 1}`, // 底部的小字标题
        imgUrl: path
    }));

    // 复制一份实现无缝滚动
    const extendedItems = [...baseItems, ...baseItems];

    return (
        <section className={styles.dailySection} id="daily">
            <div className={styles.dailyHeader}>
                <div className={styles.titleWrapper}>
                    <img src={titleBg} alt="" className={styles.titleBg} />
                    <h2 className={styles.title}>日常の断片</h2>
                </div>

                <div className={styles.dailyDescBox}>
                    <span className={styles.tag}>#hobby</span>
                    <p className={styles.descText}>
                        自分の趣味になり得る、日々のささやかな記録。
                    </p>
                </div>
            </div>

            <div className={styles.carouselContainer}>
                {/* 第一排：向左滚动 */}
                <div className={styles.carouselRow}>
                    <div className={`${styles.carouselTrack} ${styles.trackLeft}`}>
                        {extendedItems.map((item, index) => (
                            <div className={styles.carouselItem} key={`top-${index}`}>
                                {/* 🌟 注入真实图片，类名直接对应你 CSS 里的 imgBox */}
                                <div className={styles.imgBox}>
                                    <img
                                        src={item.imgUrl}
                                        alt={item.text}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <p className={styles.imgCaption}>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 第二排：向右滚动 (反转数组让内容错开更美观) */}
                <div className={styles.carouselRow}>
                    <div className={`${styles.carouselTrack} ${styles.trackRight}`}>
                        {[...extendedItems].reverse().map((item, index) => (
                            <div className={styles.carouselItem} key={`bottom-${index}`}>
                                <div className={styles.imgBox}>
                                    <img
                                        src={item.imgUrl}
                                        alt={item.text}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
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