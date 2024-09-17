import {motion} from "framer-motion";
import PensilImg from "../../assets/Images/SectionFour/pensil.png";
import './SectionFour.css'
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";
import React from 'react';


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




    ////

    const { ref: pensilJetRef, inView: pensilJetInView } = useInView({ triggerOnce: false, threshold: 0.1 });


    return (
        <section id={"sectionFour"}>
            <motion.div className={"pensil-container"}
                        ref={ref}
                        initial={{y: '36rem'}}
                        animate={isAnimating ? {y: 0} : {}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <img className={"pensil-img"} src={PensilImg} alt={"keycap image"}/>
            </motion.div>
            <h1 className="portfolio-text">ПОРТФОЛИО</h1>

            <svg ref={pensilJetRef}
                 className={`pensil-jet ${pensilJetInView ? 'pensil-jet-animate' : ''}`}  width="80" height="145" viewBox="0 0 80 145" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.6425 1L3.6377 54.8258L20.6425 45.1854L3.6377 96.6011L20.6425 74.9101L1 138.5L24 96.6011L28.5 144L36.5 96.6011L56.5845 144L54 96.6011L75.5218 129.5L56.5845 74.9101L75.5218 96.6011L63.1546 45.1854L79 54.8258L63.1546 1"
                    stroke="black"/>
            </svg>

        </section>
    )
}