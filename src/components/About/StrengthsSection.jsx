import React from 'react';
import { motion } from 'framer-motion';
import styles from './StrengthsSection.module.css';
import titleBg from '../../assets/标题背景色.png';
import inkLeft from '../../assets/背景水墨.png'; // 假设你准备好了左右两张水墨
import inkRight from '../../assets/背景水墨.png';

const strengthsData = [
    {
        id: 1,
        tag: "とにかく",
        title: "相手目線力",
        content: `産学連携授業では 「一般層に湿原の魅力を伝える」という課題に取り組みました。その際、湿原と特に関わりのない人に無理に魅力を伝えるよりも、湿原と関係性のある層を見つけることが重要だと考えました。その結果、野鳥を切り口としてターゲットと湿原との距離を縮めるという提案を行い、クライアントにも評価していただきました。`
    },
    {
        id: 2,
        tag: "驚きの",
        title: "チャレンジ精神",
        content: `これまで、ものづくりに対する興味を軸に、さまざまな分野へ挑戦してきました。景観デザインからグラフィックデザイン、さらにショート動画制作へと分野を広げてきました。また、中国での社会人経験を経て、一から日本での生活に挑戦するなど、常に新しい環境や分野に積極的に挑戦してきました。新しいことに対する好奇心と主体的に取り組む姿勢を活かし、自身の可能性を広げ続けてきた点が私の強みです。`
    },
    {
        id: 3,
        tag: "1番の強み",
        title: "継続力",
        content: `日本での留学の三年間、来日当初はほぼゼロに近い日本語力でしたが、日々勉強を続ける中で、今では授業や発表、アルバイトにも対応できるレベルになり、JLPT N1にも合格しています。また、日本に留学してからの3年間、出席率はずっと100％を維持しています。日本語学校の2年間では卒業時に皆勤賞をいただき、現在通っている日本電子専門学校でも、これまで出席率は100％です。`
    }
];

const StrengthsSection = () => {
    return (
        <section className={styles.strengthsSection}>
            {/* 🌟 装饰水墨背景 */}
            <img src={inkLeft} className={`${styles.decorationInk} ${styles.inkPosLeft}`} alt="" />
            <img src={inkRight} className={`${styles.decorationInk} ${styles.inkPosRight}`} alt="" />

            <div className={styles.contentContainer}>
                {/* 🌟 标题改为左对齐容器 */}
                <div className={styles.titleWrapper}>
                    <h2 className={styles.sectionTitle}>自分の強み</h2>
                    <img src={titleBg} className={styles.titleInk} alt="" />
                </div>

                <div className={styles.listWrapper}>
                    {strengthsData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={styles.strengthItem}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                        >
                            <div className={styles.leftCol}>
                                <span className={styles.itemTag}>{item.tag}</span>
                                <h3 className={styles.itemTitle}>{item.title}</h3>
                            </div>
                            <div className={styles.rightCol}>
                                <p className={styles.itemContent}>{item.content}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrengthsSection;