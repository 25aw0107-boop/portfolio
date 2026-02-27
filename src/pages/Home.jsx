import React from 'react';
import styles from "./Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero"; 
import About from '../components/About';
import Skills from "../components/Skills";
import Works from '../components/Works';
import Daily from '../components/Daily';
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