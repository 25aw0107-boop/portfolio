import styles from "./Home.module.css";
import Header from "../components/Header";
import logo from "../assets/logo.png";
import sky from "../assets/主视觉背景天空.png";
import mount from "../assets/主视觉背景山脉.png";
import bgInk from "../assets/背景水墨.png";
import About from '../components/About';
import Skills from "../components/Skills";
import Works from '../components/Works';
import Daily from '../components/Daily';
import Footer from '../components/Footer';


export default function Home() {
    return (
        <main className={styles.page}>
            {/* 🌟 新增：全屏白色模糊遮罩 */}
            <div className={styles.whiteOverlay} aria-hidden="true"></div>

            <Header />

            <section className={styles.hero} aria-label="Hero">

                {/* 左上与右下的水墨云彩背景 */}
                <div className={styles.inkBgLeft} aria-hidden="true">
                    <img src={bgInk} alt="" className={styles.inkImg} />
                </div>
                <div className={styles.inkBgRight} aria-hidden="true">
                    <img src={bgInk} alt="" className={styles.inkImg} />
                </div>

                {/* 左侧的白色纯装饰竖排文字 */}
                <div className={styles.leftDecor} aria-hidden="true">
                    <span className={styles.decorCol}>ポートフォリオ</span>
                    <span className={styles.decorColSub}>僕の</span>
                </div>

                {/* 下面是你原有的中间挂轴部分，完全保持不变 */}
                <div className={styles.stage}>
                    <div className={styles.heroBg} aria-hidden="true">
                        <img src={sky} alt="" className={styles.bgSky} />
                        <img src={mount} alt="" className={styles.bgMount} />
                    </div>

                    <div className={styles.heroInner}>
                        <div className={styles.seal} aria-label="Seal">
                            <img src={logo} alt="logo" className={styles.sealImg} />
                        </div>

                        <h1 className={styles.vTitle}>
                            <span className={`${styles.col} ${styles.enter__line} ${styles.enter__line1}`}>思い伝え</span><br />
                            <span className={`${styles.col} ${styles.enter__line} ${styles.enter__line2}`}>
                                ユーザーの<span className={styles.accent}>心</span>
                            </span><br />
                            <span className={`${styles.col} ${styles.enter__line} ${styles.enter__line3}`}>動かす仕事</span>
                        </h1>
                    </div>
                </div>
            </section>

            <About />
            <Skills />
            <Works />
            <Daily />
            <Footer />
        </main>
    );
}