import React, {useEffect, useState} from "react";
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
import SectionFive from "../SectionFive/SectionFive.jsx";
import useScrollDelay from "./useScrollDelay.jsx";

function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({ children, id, distance }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, distance);

    useScrollDelay(30)

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



    // The additional div's are used to make the space between the sections
    return (
        <>
            <Navbar/>
            <div className="content">
                <div style={{marginBottom: '5.5rem'}}><Section id={1} distance={600}><Main /></Section></div>

               <div style={{marginBottom: '30rem'}}><Section id={2} distance={600}><SectionOne/></Section></div>

                <Section id={3} distance={600}><SectionTwo/></Section>

                <div style={{marginTop: '37rem'}}><Section id={4} distance={300}><SectionThree/></Section></div>

                <div style={{marginBottom: '45rem'}}><Section id={5} distance={600}><SectionFour /></Section></div>
                <Section id={6} distance={300}><SectionFive /></Section>
            </div>
        </>
    );
}