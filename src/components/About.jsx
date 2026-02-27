import React, { useEffect, useRef, useState } from 'react'; // 🌟 增加 useRef, useState
import styles from './About.module.css';
import titleBg from '../assets/标题背景色.png';
import bgInk from '../assets/背景水墨.png';
import profilePhoto from '../assets/写真1.jpg';

const About = () => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // 当图片露出 20% 的时候触发
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // 如果只想让它触发一次，触发后可以取消观察
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (imageRef.current) {
            observer.observe(imageRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className={styles.aboutSection}>
            {/* ... 背景和标题保持不变 ... */}
            <div className={styles.inkBgRight} aria-hidden="true">
                <img src={bgInk} alt="" className={styles.inkImg} />
            </div>

            <div className={styles.titleWrapper}>
                <img src={titleBg} alt="水墨背景" className={styles.titleBg} />
                <h2 className={styles.title}>私について</h2>
            </div>

            <div className={styles.content}>
                <div className={styles.textContent}>
                    {/* ... 文字内容保持不变 ... */}
                    <div className={styles.nameBlock}>
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

                {/* 🌟 修改点：给图片容器加上 ref 和 动态 className */}
                <div
                    ref={imageRef}
                    className={`${styles.imageContent} ${isVisible ? styles.reveal : ''}`}
                >
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