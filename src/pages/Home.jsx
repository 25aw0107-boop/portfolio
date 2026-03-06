import React from 'react';
import styles from "./Home.module.css";
import Header from "../components/Home/Header";
import Hero from "../components/Home/Hero"; 
import About from '../components/Home/About';
import Skills from "../components/Home/Skills";
import Works from '../components/Home/Works';
import Daily from '../components/Home/Daily';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';

export default function Home() {
    return (
        <main className={styles.page}>
            <PageTransition />
            <Header />
            <Hero />
            <About />
            <Skills />
            <Works />
            <Daily />
            <Footer />
        </main>
    );
}