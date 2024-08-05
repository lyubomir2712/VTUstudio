import {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Main from "../Main/Main.jsx";
import SectionOne from "../SectionOne/SectionOne.jsx";
import SectionTwo from "../SectionTwo/SectionTwo.jsx";
import SectionThree from "../SectionThree/SectionThree.jsx";

// function Transition() {
//     const [activeSection, setActiveSection] = useState(0);
//     let scrollTimeout = null;
//     let scrolling = false;
//
//     const sectionThresholds = [0, 0.5, 1]; // Define your sections' thresholds
//     const springConfig = { stiffness: 300, damping: 30 }; // Config for snappy transition
//
//     useEffect(() => {
//         const handleScroll = (e) => {
//             if (scrolling) return; // Prevent handling new scrolls while animating
//             clearTimeout(scrollTimeout);
//             scrollTimeout = setTimeout(() => {
//                 if (e.deltaY < 0) {
//                     setActiveSection((prev) => {
//                         if (prev > 0) {
//                             scrolling = true;
//                             setTimeout(() => (scrolling = false), 1500); // Delay before allowing next scroll
//                             return prev - 1;
//                         }
//                         return prev;
//                     });
//                 } else if (e.deltaY > 0) {
//                     setActiveSection((prev) => {
//                         if (prev < sectionThresholds.length - 1) {
//                             scrolling = true;
//                             setTimeout(() => (scrolling = false), 1000); // Delay before allowing next scroll
//                             return prev + 1;
//                         }
//                         return prev;
//                     });
//                 }
//             }, 50); // Delay to debounce the scroll input
//         };
//
//         window.addEventListener("wheel", handleScroll, { passive: false });
//
//         return () => {
//             window.removeEventListener("wheel", handleScroll);
//             clearTimeout(scrollTimeout);
//         };
//     }, []);
//
//     return (
//         <>
//             <Navbar />
//             <div style={{ height: "200vh", overflow: "hidden" }}>
//                 <motion.div
//                     style={{
//                         position: "sticky",
//                         top: 0,
//                         width: "100%",
//                         height: "100vh",
//                         display: "flex",
//                         justifyContent: "center",
//                         alignItems: "center",
//                     }}
//                 >
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ ...springConfig }}
//                     >
//                         {activeSection === 0 && <Main />}
//                         {activeSection === 1 && <SectionOne />}
//                         {activeSection === 2 && <SectionTwo />}
//                         {activeSection === 3 && <SectionThree />}
//                     </motion.div>
//                 </motion.div>
//             </div>
//         </>
//     );
// }
//
// export default Transition;










import { useRef } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";

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
            {/*<motion.div style={{ y }}>*/}
            {/*    <h2>{`#00${id}`}</h2>*/}
            {/*</motion.div>*/}
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
            </div>
            <motion.div className="progress" style={{ scaleX }} />
        </>
    );
}