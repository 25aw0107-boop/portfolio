import styles from "./Header.module.css";

export default function Header() {
    return (
        <header className={styles.topbar}>
            <nav className={styles.nav}>
                {/* 竖排导航项 */}
                <a href="#contact" className={styles.navItem}>お問い合わせ</a>
                <a href="#about" className={styles.navItem}>私について</a>
                <a href="#works" className={styles.navItem}>デザインしたもの</a>
            </nav>
        </header>
    );
}