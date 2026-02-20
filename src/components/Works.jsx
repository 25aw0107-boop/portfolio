import React from 'react';
import styles from './Works.module.css';

// 導入タイトル水墨背景
import inkTitleBg from '../assets/标题背景色.png';
// 導入大塊背景水墨
import bgInk from '../assets/背景水墨.png';
import shinkyuImg from '../assets/進級制作.png';
import portfolioImg from '../assets/ポートフォリオ.jpg';
import zenkiImg from '../assets/前期課題.png';

// モックデータ
const worksData = [
    {
        id: 1,
        tag: '#Website',
        title: '進級制作 ・ 日本湿原PROJECT',
        desc: '一般層に日本の湿原の魅力を伝え、湿原への関心と認知を高めることを目的として制作したスペシャルサイトです。',
        role: 'Web design',
        img: shinkyuImg, // 对应進級制作.png
    },
    {
        id: 2,
        tag: '#Website',
        title: 'ポートフォリオ',
        desc: '転職活動のためのポートフォリオサイトを制作しました',
        role: 'Web design',
        img: portfolioImg, // 对应ポートフォリオ.png
    },
    {
        id: 3,
        tag: '#Website',
        title: '前期課題・学科の発展',
        desc: '入学を検討している留学生の学科に対する不安を軽減することを目的として制作したスペシャルサイトです。',
        role: 'Web design',
        img: zenkiImg, // 对应前期課題.png
    }
];

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
                {worksData.map((work, index) => {
                    // 偶数・奇数判定
                    const isEven = index % 2 === 0;

                    return (
                        // 🌟 修正点: 全体を a タグに変更し、一つの大きなボタンにする
                        // key は一番外側の要素につける
                        <a
                            href={`/works/${work.id}`}
                            key={work.id}
                            className={`${styles.workItem} ${!isEven ? styles.reverse : ''}`}
                        >

                            {/* 文字情報 */}
                            <div className={styles.textContent}>
                                <span className={styles.tag}>{work.tag}</span>
                                <h3 className={styles.workTitle}>{work.title}</h3>
                                <p className={styles.workDesc}>
                                    {work.desc.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}<br />
                                        </React.Fragment>
                                    ))}
                                </p>
                                <span className={styles.role}>{work.role}</span>
                                {/* 🌟 修正点: ここはもうリンクである必要はないので span に変更（見た目だけ維持） */}
                                <span className={styles.detailLink}>詳しくみる</span>
                            </div>

                            {/* 画像エリア（二重円環+放射線） */}
                            {/* 🌟 修正点: 外側がすでに a タグなので、ここは div に戻す */}
                            <div className={styles.imageWrapper}>
                                <div className={styles.imageOuterCircle}>
                                    <img src={work.img} alt={work.title} className={styles.workImage} />
                                </div>
                            </div>

                        </a>
                    );
                })}
            </div>

            {/* 下部「すべてを見る」ボタン */}
            <div className={styles.viewAllWrapper}>
                {/* ここは別のページへのリンクなので a タグのまま */}
                <a href="/works" className={styles.viewAllBtn}>
                    <div className={styles.arrowCircle}>
                        <span className={styles.arrow}>→</span>
                    </div>
                    <span className={styles.viewAllText}>すべてを見る</span>
                </a>
            </div>

        </section>
    );
}