import {motion} from "framer-motion";
import "./SectionThree.css"
import MonaLisaPaintingImg from "../../assets/MonaLisa.png";
import GreenButterflyImg from "../../assets/greenButterfly.png";
import BlueButterflyImg from "../../assets/blueButterfly.png";
import shadow from '../../assets/Shadow.png'
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

function SectionThree() {

    const { ref, inView, entry } = useInView({
        triggerOnce: false,  // Allow multiple triggers based on scroll direction
        threshold: 0.1,      // The percentage of the element's visibility before triggering
    });

    const [scrollDirection, setScrollDirection] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);  // Track if the animation is currently happening

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection]);

    useEffect(() => {
        if (scrollDirection === 'up' && entry && entry.boundingClientRect.top >= 0) {
            // Delay the reset of the animation state by 0.3 seconds
            const delay = setTimeout(() => {
                setIsAnimating(false);  // Reset animation state after delay
            }, 135);

            // Cleanup the timeout if the effect re-runs
            return () => clearTimeout(delay);
        }
    }, [scrollDirection, entry]);

    useEffect(() => {
        if (inView && scrollDirection === 'down') {
            setIsAnimating(true);  // Start the animation when scrolling downwards into the section
        }
    }, [inView, scrollDirection]);


    return (
        <section id="sectionThree">

            <motion.div className={"monaLisaContainer"}
                        ref={ref}
                        animate={isAnimating ? { y: 0, rotate:0 } : {}}
                        initial={{y: '-9rem', rotate: -45}}  // Start off-screen with 45 degrees rotation
                        // animate={{y: 0, rotate: 0}}       // Animate to the neutral position with 0 degrees rotation
                        transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={MonaLisaPaintingImg} className={"monaLisaImg"} alt={"Mona Lisa painting"}/>
            </motion.div>

            <motion.div className={"blueButterflyContainer"}
                        initial={{y:  '10rem', x: '10rem', rotate: 45}}  // Start off-screen with 45 degrees rotation
                        animate={isAnimating ?{
                            y: [900, 500,100, 0],                // Define y keyframes for a curved path
                            x: [1000, 900, 800, 700, 600, 500,400],                   // Define x keyframes for a curved path from right to left
                            rotate: [45,44,43,42,41,40,39,38,37,36,35,34,33,32,31,30,29,28,27,26,25,24,23,22,21,20,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1,0]               // Define rotation keyframes
                        }: {}}
                        transition={{duration: 3, ease: 'easeInOut'}}  // Smooth animation
                        style={{
                            width: '100px',
                            height: '100px',
                            margin: '0 auto', // Center the div horizontally within its parent
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative', // Ensure positioning is relative to the parent
                        }}
            >
                <img src={BlueButterflyImg} className={"blueButterflyImg"} alt="blue butterfly img"/>
            </motion.div>


            <motion.div className={"greenButterflyContainer"}
                        initial={{y: '10rem', x: 0, rotate: 45}}  // Start off-screen with 45 degrees rotation
                        animate={isAnimating ?{
                            y: [1000, 500, 0],                // Define y keyframes for a curved path
                            x: [0, 250, 0],                   // Define x keyframes for a curved path from right to left
                            rotate: [45, 30, 0]               // Define rotation keyframes
                        }: {}}
                        transition={{duration: 2, ease: 'easeInOut'}}  // Smooth animation
                        style={{
                            width: '100px',
                            height: '100px',
                            margin: '0 auto', // Center the div horizontally within its parent
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative', // Ensure positioning is relative to the parent
                        }}
            >
                <img src={GreenButterflyImg} className={"greenButterflyImg"} alt={"green butterfly img"}/>
            </motion.div>



                <h3 className={"sectionThree-header"}>Фотография</h3>
                <p className={"sectionThree-text"}>Професионални фотографски решения: интериорно и<br/> екстериорно заснемане, продуктова фотография.</p>
                <img className={"monaLisaShadow"} src={shadow} alt={"Mona Lisa shadow"}/>
        </section>
    )
}

export default SectionThree;