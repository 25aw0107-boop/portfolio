import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./ProjectDetail.module.css";
import { projectsData } from '../data/projectsData';

// 组件引入
import PageTransition from '../components/PageTransition';
import ProjectHeader from '../components/ProjectHeader';
import ProjectHero from '../components/ProjectHero';
import ProjectMockup from '../components/ProjectMockup';
import ProjectInfoTable from '../components/ProjectInfoTable';
import ProjectReflection from '../components/ProjectReflection';
import ProjectGallery from '../components/ProjectGallery';
import Footer from '../components/Footer';



export default function ProjectDetail() {
    const { id } = useParams();
    const project = projectsData.find(p => p.id === parseInt(id));

    // 切换项目时强制置顶
    useEffect(() => {
        if (window.lenis) {
            window.lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }
    }, [id]);

    if (!project) return <div className={styles.notFound}>Project not found</div>;

    return (
        <main className={styles.detailMain}>
            <PageTransition />
            <ProjectHeader />
            <div className={styles.contentWrapper}>
                <ProjectHero project={project} />
                <ProjectMockup project={project} />
                <ProjectInfoTable project={project} />
                <ProjectGallery project={project} />
                <ProjectReflection project={project} />
                {/* <section className={styles.footerSpacing}>
                    <p className={styles.placeholderText}>--- END ---</p>
                </section> */}
                <Footer />
            </div>
        </main>
    );
}