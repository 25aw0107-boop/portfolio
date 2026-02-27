import styles from "./Header.module.css";

export default function Header() {

    // 🌟 处理点击平滑滚动
    const handleNavClick = (e, targetId) => {
        e.preventDefault();

        if (window.lenis) {
            // 🌟 逻辑判断：如果是去 contact，偏移量设为 0；其他地方（如 works）保留 -60
            const customOffset = targetId === "#contact" ? 0 : -60;

            window.lenis.scrollTo(targetId, {
                offset: customOffset,
                duration: 1.5,
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // 建议加上平滑曲线
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