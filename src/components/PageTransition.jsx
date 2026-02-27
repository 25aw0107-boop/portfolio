import React from 'react';
import styles from './PageTransition.module.css';
// 白色模糊遮罩层组件


const PageTransition = () => {
    return (
        <div className={styles.whiteOverlay} aria-hidden="true"></div>
    );
};

export default PageTransition;