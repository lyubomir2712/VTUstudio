import BlueButterflyImg from '../../assets/blueButterfly.png'
import GreenButterflyImg from '../../assets/greenButterfly.png'
import MonaLisaPaintingImg from '../../assets/MonaLisa.png'
import {motion} from "framer-motion";
import PensilImg from "../../assets/pensil.png";
import './SectionFour.css'
import {InView, useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";


export default function SectionFour() {
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
            }, 135);

            return () => clearTimeout(delay);
        }
    }, [scrollDirection, entry]);

    useEffect(() => {
        if (inView && scrollDirection === 'down') {
            setIsAnimating(true);
        }
    }, [inView, scrollDirection]);


    return (
        <section id={"sectionFour"}>
            <motion.div className={"pensilContainer"}
                        ref={ref}
                        initial={{y: '36rem'}}
                        animate={isAnimating ?{y: 0} : {}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <img className={"pensilImg"} src={PensilImg} alt={"keycap image"}/>
            </motion.div>
            <h1 className="portfolio-text">ПОРТФОЛИО</h1>
        </section>
    )
}