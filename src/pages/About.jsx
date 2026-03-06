import React from 'react';
import styles from './About.module.css';
import ProjectHeader from '../components/ProjectHeader';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import HeroAbout from '../components/About/HeroAbout';
import MyLife from '../components/About/MyLife';
import LifeDetails from '../components/About/LifeDetails'; // 🌟 新增组件
import TimelineSection from '../components/About/TimelineSection'; // 🌟 新增组件
import StrengthsSection from '../components/About/StrengthsSection'; // 🌟 新增组件


const About = () => {
    return (
        <div className={styles.aboutPage}>
            <PageTransition />
            <ProjectHeader />
            <HeroAbout />
            <MyLife />
            <LifeDetails />
            <TimelineSection />
            <StrengthsSection />
            <Footer />
        </div>
    );
};

export default About;