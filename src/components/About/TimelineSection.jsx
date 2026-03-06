import React, { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import styles from './TimelineSection.module.css';
import { timelineData } from '../../data/timelineData';
import inkBg from '../../assets/背景水墨.png';
import titleBg from '../../assets/标题背景色.png';

const TimelineItem = ({ item, index, scrollProgress }) => {
    const isLeft = index % 2 === 0;

    // 🌟 核心逻辑：计算触发点
    // 我们假设总共有 N 个数据，那么第 i 个数据应该在进度达到 i/N 时完全展开
    const threshold = (index + 0.5) / timelineData.length;

    // 判定当前 item 是否应该显示（基于锁定的最大进度）
    const isVisible = scrollProgress >= threshold;

    return (
        <div className={`${styles.timelineItem} ${isLeft ? styles.leftSide : styles.rightSide}`}>
            {/* 圆点 */}
            <motion.div
                className={styles.node}
                initial={false}
                animate={isVisible ? "visible" : "hidden"}
                variants={{
                    hidden: { scale: 0, opacity: 0 },
                    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300 } }
                }}
            />

            <div className={styles.contentCard}>
                <motion.span
                    className={styles.tag}
                    animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {item.tag}
                </motion.span>

                <h3 className={styles.itemTitle}>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }} // 延迟稍微晚于圆点出现
                    >
                        {item.title}
                    </motion.span>
                    <motion.div
                        className={styles.decorLine}
                        initial={false}
                        animate={isVisible ? { scaleX: 1 } : { scaleX: 0 }}
                        style={{
                            // 🌟 核心：如果屏幕宽度小于 768，强制从左侧生长
                            originX: window.innerWidth < 768 ? 0 : (isLeft ? 1 : 0)
                        }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    />
                </h3>

                <motion.p
                    className={styles.itemText}
                    animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                    transition={{ delay: 0.3 }}
                >
                    {item.content}
                </motion.p>
            </div>
        </div>
    );
};

const TimelineSection = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        // 适当调整，确保滚动到最后时进度能到 1
        offset: ["start 100%", "end 100%"]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,
        damping: 20,
    });

    const [maxProgress, setMaxProgress] = useState(0);

    useEffect(() => {
        return smoothProgress.onChange((latest) => {
            if (latest > maxProgress) {
                setMaxProgress(latest);
            }
        });
    }, [smoothProgress, maxProgress]);

    return (
        <section className={styles.timelineSection} ref={containerRef}>
            <img src={inkBg} className={styles.inkBg} alt="" />

            <div className={styles.titleWrapper}>
                <h2 className={styles.sectionTitle}>日本の生活経歴</h2>
                {/* <img src={titleBg} className={styles.titleInk} alt="" /> */}
            </div>

            <div className={styles.timelineContainer}>
                <motion.div
                    className={styles.centerLine}
                    style={{
                        scaleY: maxProgress,
                        originY: 0
                    }}
                />

                {timelineData.map((item, index) => (
                    <TimelineItem
                        key={item.id}
                        item={item}
                        index={index}
                        scrollProgress={maxProgress}
                    />
                ))}
            </div>

            <motion.div
                className={styles.bottomText}
                animate={maxProgress > 0.95 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 1 }}
            >
                —まだ続きます—
            </motion.div>
        </section>
    );
};

export default TimelineSection;