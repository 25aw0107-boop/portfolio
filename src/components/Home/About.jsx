import React, { useEffect, useRef, useState } from 'react'; // 🌟 增加 useRef, useState
import styles from './About.module.css';
import titleBg from '../../assets/标题背景色.png';
import bgInk from '../../assets/背景水墨.png';
import profilePhoto from '../../assets/写真1.jpg';

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
                        <p>
                            1995年生まれです。小学生の頃から日本のアニメが好きで、後悔しない人生にしたいと思い、社会人4年目で会社を辞めて、27歳で日本に来ました。
                        </p>
                        <p>
                            もともとものづくりが好きで、中国での4年間の社会人経験では、環境デザイン、グラフィックデザイン、映像編集に関わる仕事をしていました。
                        </p>
                        {/* <p>来日を決めたのは突然のことだったため、日本に来た当初の日本語力は、ほぼ五十音が読める程度でした。そこで、まずは日本語学校で2年間、日本語の勉強に専念しました。
                            その後、日本で就職することを考えましたが、日本語力も専門スキルもまだ就職できるレベルには達していないと感じ、日本電子専門学校に進学することを決めました。</p> */}
                        <p>
                            Webデザイン学科を選んだ理由は、新しいWeb分野の知識に触れたいという気持ちと、これまでのデザイン経験を活かせると考えたからです。そして将来は、自分が満足できるWebサイトを作りたいと思っています。
                        </p>
                        <p>
                            現在は、恵まれた学習環境と家族の支えに感謝しながら、日々新しい技術を学び、自身の成長を実感しています。
                        </p>
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