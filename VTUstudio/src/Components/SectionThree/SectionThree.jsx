import {motion} from "framer-motion";
import "./SectionThree.css"
import MonaLisaPaintingImg from "../../assets/MonaLisa.png";
import GreenButterflyImg from "../../assets/greenButterfly.png";
import BlueButterflyImg from "../../assets/blueButterfly.png";
import shadow from '../../assets/Shadow.png'
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import peacockImg from "../../assets/Peacock.png";

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
            }, 300);

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
                        initial={{y: '-35rem', rotate: -90}}  // Start off-screen with 45 degrees rotation
                        transition={{duration: 2, ease: 'easeOut'}}  // Smooth animation
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={MonaLisaPaintingImg} className={"monaLisaImg"} alt={"Mona Lisa painting"}/>
            </motion.div>

            {/*<motion.div className={"blueButterflyContainer"}*/}
            {/*            ref={ref}*/}
            {/*            initial={{ x: '15rem' }}  // Start 48rem to the left of the neutral position*/}
            {/*            animate={isAnimating ? { x: 0 } : {}} // Animate to x: 0 when scrolling down, stay in place otherwise*/}
            {/*            transition={{ duration: 1, ease: 'easeOut', delay: 2}}  // Smooth animation*/}
            {/*            style={{*/}
            {/*                margin: '0 auto', // Centers the div horizontally within its parent*/}
            {/*                justifyContent: 'center',*/}
            {/*                alignItems: 'center',*/}
            {/*            }}*/}
            {/*>*/}
            {/*    <img src={BlueButterflyImg} className={"blueButterflyImg"} alt="blue butterfly img"/>*/}
            {/*</motion.div>*/}



                <motion.div className={"greenButterflyContainer"}
                            ref={ref}
                            initial={{ x: '-25rem' }}  // Start 48rem to the left of the neutral position
                            animate={isAnimating ? { x: 0 } : {}} // Animate to x: 0 when scrolling down, stay in place otherwise
                            transition={{ duration: 1, ease: 'easeOut' }}  // Smooth animation
                            style={{
                                margin: '0 auto', // Centers the div horizontally within its parent
                                justifyContent: 'center',
                                alignItems: 'center',
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