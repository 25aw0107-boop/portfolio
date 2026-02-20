import React from 'react';
import styles from './About.module.css';
// 引入你存放在 assets 里的标题背景图
import titleBg from '../assets/标题背景色.png';
import bgInk from '../assets/背景水墨.png';
import profilePhoto from '../assets/写真1.jpg';


const About = () => {
    return (
        <section id="about" className={styles.aboutSection}>
            {/* 背景水墨装饰层*/}
            <div className={styles.inkBgRight} aria-hidden="true">
                <img src={bgInk} alt="" className={styles.inkImg} />
            </div>


            {/* 标题区域：水墨背景 + 文字 */}
            <div className={styles.titleWrapper}>
                <img src={titleBg} alt="水墨背景" className={styles.titleBg} />
                <h2 className={styles.title}>私について</h2>
            </div>

            {/* 内容区域：左右排版 */}
            <div className={styles.content}>

                {/* 左侧：文字介绍 */}
                <div className={styles.textContent}>
                    <div className={styles.nameBlock}>
                        {/* 拼音/假名注音 */}
                        <span className={styles.furigana}>カ シン</span>
                        <h3 className={styles.name}>何 鑫</h3>
                    </div>

                    <div className={styles.description}>
                        <p>1995年生まれです。社会人4年目で会社を退職し、27歳で日本に来ました。</p>
                        <p>現在は、日本電子専門学校のWebデザイン科に通っています。</p>
                        <p>中国での4年間の社会人経験では、業界は変わりましたが、ずっとものづくりに関わる仕事をしてきました。</p>
                        <p>自分にとって、面白いものをつくるのが楽しいから、将来も日本で、そういうものづくり系の仕事ができたらいいなと思っています。</p>
                    </div>
                </div>

                {/* 右侧：个人照片 */}
                <div className={styles.imageContent}>
                    <img
                        src={profilePhoto}
                        alt="Profile"
                        className={styles.profileImg}
                    />
                </div>

            </div>
        </section>
    );
};

export default About;