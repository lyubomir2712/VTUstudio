import './SectionTwo.css';
import { motion } from 'framer-motion';
import peacockImg from "../../assets/Images/SectionTwo/Peacock.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';

export default function SectionTwo() {
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
        <section id="sectionTwo">
            <motion.div className={"peacockContainer"}
                        ref={ref}
                        initial={{ x: '-48rem' }}
                        animate={isAnimating ? { x: 0 } : {}}
                        transition={{ duration: 1, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                <img src={peacockImg} className={"peacockImg"} alt="peacock logo" />
            </motion.div>

            <h3 className={"sectionTwo-header"}>
                Печатна реклама
            </h3>

            <p className={"sectionTwo-text"}>
                Проектираме и изпълняваме печатни рекламни<br />
                мериали: каталози, книги, брошури, плакати,<br />
                билбордове.
            </p>
        </section>
    );
}
