import {motion} from "framer-motion";
import "./SectionThree.css"
import MonaLisaPaintingImg from "../../assets/MonaLisa.png";
import GreenButterflyImg from "../../assets/greenButterfly.png";
import shadow from '../../assets/Shadow.png'
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

function SectionThree() {

    const { ref, inView, entry } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [scrollDirection, setScrollDirection] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

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

            const delay = setTimeout(() => {
                setIsAnimating(false);
            }, 300);

            return () => clearTimeout(delay);
        }
    }, [scrollDirection, entry]);

    useEffect(() => {
        if (inView && scrollDirection === 'down') {
            setIsAnimating(true);
        }
    }, [inView, scrollDirection]);

    return (
        <section id="sectionThree">
            <motion.div className={"monaLisaContainer"}
                        ref={ref}
                        animate={isAnimating ? { y: 0, rotate:0 } : {}}
                        initial={{y: '-35rem', rotate: -90}}
                        transition={{duration: 2, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={MonaLisaPaintingImg} className={"monaLisaImg"} alt={"Mona Lisa painting"}/>
            </motion.div>

                <motion.div className={"greenButterflyContainer"}
                            ref={ref}
                            initial={{ x: '-25rem' }}
                            animate={isAnimating ? { x: 0 } : {}}
                            transition={{ duration: 1, ease: 'easeOut' }}
                            style={{
                                margin: '0 auto',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                >
                    <img src={GreenButterflyImg} className={"greenButterflyImg"} alt={"green butterfly img"}/>
                </motion.div>

                <h3 className={"sectionThree-header"}>
                    Фотография
                </h3>

                <p className={"sectionThree-text"}>
                    Професионални фотографски решения: интериорно и<br/> екстериорно заснемане, продуктова фотография.
                </p>

                <img className={"monaLisaShadow"} src={shadow} alt={"Mona Lisa shadow"}/>
        </section>
    )
}

export default SectionThree;