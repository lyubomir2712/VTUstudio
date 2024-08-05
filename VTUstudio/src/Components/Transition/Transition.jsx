import {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Main from "../Main/Main.jsx";
import SectionOne from "../SectionOne/SectionOne.jsx";
import SectionTwo from "../SectionTwo/SectionTwo.jsx";
import SectionThree from "../SectionThree/SectionThree.jsx";
import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import SectionFour from "../SectionFour/SectionFour.jsx";
import Footer from "../Footer/Footer.jsx";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({ children, id, distance }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, distance);

    return (
        <section>
            <div ref={ref}>
                {children}
            </div>
        </section>
    );
}

export default function Transition() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            <Navbar />
            <div className="content">

                <Section id={1} distance={300}><Main /></Section>
                <Section id={2} distance={300}><SectionOne /></Section>
                <Section id={3} distance={300}><SectionTwo /></Section>
                <Section id={4} distance={300}><SectionThree /></Section>
                <Section id={5} distance={300}><SectionFour /></Section>
                <Section id={5} distance={300}><Footer /></Section>
            </div>
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}