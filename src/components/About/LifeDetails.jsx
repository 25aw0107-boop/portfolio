import React from 'react';
import styles from './LifeDetails.module.css';
import inkBg from '../../assets/背景水墨.png';

// 内部小组件：负责标题和装饰线
const DetailBlock = ({ title, children }) => (
    <div className={styles.contentBlock}>
        <h3 className={styles.subTitle}>{title}</h3>
        <p className={styles.description}>{children}</p>
    </div>
);

const LifeDetails = () => {
    return (
        <section className={styles.detailsSection}>
            {/* 🌟 严格遵守：中轴线偏移法定位背景图 */}
            <img src={inkBg} className={styles.inkBg} alt="" draggable="false" />

            <div className={styles.container}>
                <DetailBlock title="中国にいた時期">
                    1995年生まれです。社会人4年目で会社を退職し、27歳で日本に来ました。<br />
                    現在は、日本電子専門学校のWebデザイン科に通っています。<br />
                    中国での4年間の社会人经验では、業界は変わりましたが、ずっとものづくりに関わる仕事をしてきました。<br />
                    自分にとって、面白いものをつくるのが楽しいから、将来も日本で、そういうものづくり系の仕事ができたらいいなと思っています。
                </DetailBlock>

                <DetailBlock title="日本に来るきっかけ">
                    1995年生まれです。社会人4年目で会社を退職し、27歳で日本に来ました。<br />
                    現在は、日本電子専門学校のWebデザイン科に通っています。<br />
                    中国での4年間の社会人経験では、業界は変わりましたが、ずっとものづくりに関わる仕事をしてきました。<br />
                    自分にとって、面白いものをつくるのが楽しいから、将来も日本で、そういうものづくり系の仕事ができたらいいなと思っています。
                </DetailBlock>
            </div>
        </section>
    );
};

export default LifeDetails;