import {motion, useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Main from "../Main/Main.jsx";
import SectionOne from "../SectionOne/SectionOne.jsx";
import SectionTwo from "../SectionTwo/SectionTwo.jsx";

function Transition() {
    const { scrollYProgress } = useScroll();
    const [activeSection, setActiveSection] = useState(0);
    let scrollTimeout = null;

    const sectionThresholds = [0, 0.5, 1]; // Define your sections' thresholds
    const springConfig = { stiffness: 300, damping: 30 }; // Config for snappy transition

    useEffect(() => {
        const handleScroll = (e) => {
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (e.deltaY < 0) {
                    setActiveSection((prev) => (prev > 0 ? prev - 1 : prev));
                } else if (e.deltaY > 0) {
                    setActiveSection((prev) => (prev < sectionThresholds.length - 1 ? prev + 1 : prev));
                }
            }, 50); // Delay to debounce the scroll input
        };

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    return (
        <>
            <Navbar />
            <div style={{ height: "200vh", overflow: "hidden" }}> {/* Prevent default scrolling */}
                <motion.div
                    style={{
                        position: "sticky",
                        top: 0,
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "2rem",
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ ...springConfig }}
                    >
                        {activeSection === 0 && <Main />}
                        {activeSection === 1 && <SectionOne />}
                        {activeSection === 2 && <SectionTwo />}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default Transition;