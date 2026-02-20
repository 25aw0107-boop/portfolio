import styles from "./Header.module.css";

export default function Header() {

    // 🌟 处理点击平滑滚动
    const handleNavClick = (e, targetId) => {
        e.preventDefault(); // 阻止 a 标签默认的瞬移行为

        if (window.lenis) {
            // 使用 Lenis 滚动到目标位置
            window.lenis.scrollTo(targetId, {
                offset: -60,   // 偏移量，防止标题贴顶太死
                duration: 1.5, // 跳转时的滑动时间
            });
        }
    };

    return (
        <header className={styles.topbar}>
            <nav className={styles.nav}>
                <a
                    href="#contact"
                    className={styles.navItem}
                    onClick={(e) => handleNavClick(e, "#contact")}
                >お問い合わせ</a>
                <a
                    href="#about"
                    className={styles.navItem}
                    onClick={(e) => handleNavClick(e, "#about")}
                >私について</a>
                <a
                    href="#works"
                    className={styles.navItem}
                    onClick={(e) => handleNavClick(e, "#works")}
                >デザインしたもの</a>
            </nav>
        </header>
    );
}