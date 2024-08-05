import {motion, useScroll} from "framer-motion";
import {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Main from "../Main/Main.jsx";
import SectionOne from "../SectionOne/SectionOne.jsx";
import SectionTwo from "../SectionTwo/SectionTwo.jsx";
import SectionThree from "../SectionThree/SectionThree.jsx";

function Transition() {
    const [activeSection, setActiveSection] = useState(0);
    let scrollTimeout = null;
    let scrolling = false;

    const sectionThresholds = [0, 0.5, 1]; // Define your sections' thresholds
    const springConfig = { stiffness: 300, damping: 30 }; // Config for snappy transition

    useEffect(() => {
        const handleScroll = (e) => {
            if (scrolling) return; // Prevent handling new scrolls while animating
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (e.deltaY < 0) {
                    setActiveSection((prev) => {
                        if (prev > 0) {
                            scrolling = true;
                            setTimeout(() => (scrolling = false), 1500); // Delay before allowing next scroll
                            return prev - 1;
                        }
                        return prev;
                    });
                } else if (e.deltaY > 0) {
                    setActiveSection((prev) => {
                        if (prev < sectionThresholds.length - 1) {
                            scrolling = true;
                            setTimeout(() => (scrolling = false), 1000); // Delay before allowing next scroll
                            return prev + 1;
                        }
                        return prev;
                    });
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
            <div style={{ height: "200vh", overflow: "hidden" }}>
                <motion.div
                    style={{
                        position: "sticky",
                        top: 0,
                        width: "100%",
                        height: "100vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
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
                        {activeSection === 3 && <SectionThree />}
                    </motion.div>
                </motion.div>
            </div>
        </>
    );
}

export default Transition;