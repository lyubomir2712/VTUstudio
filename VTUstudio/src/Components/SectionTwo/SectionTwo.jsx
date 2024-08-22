import './SectionTwo.css';
import { motion } from 'framer-motion';
import peacockImg from "../../assets/Peacock.png";
import shadowImg from '../../assets/Shadow.png';
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';

export default function SectionTwo() {
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
        <section id="sectionTwo">
            <motion.div className={"peacockContainer"}
                        ref={ref}
                        initial={{ x: '-48rem' }}  // Start 48rem to the left of the neutral position
                        animate={isAnimating ? { x: 0 } : {}} // Animate to x: 0 when scrolling down, stay in place otherwise
                        transition={{ duration: 1, ease: 'easeOut'}}  // Smooth animation
                        style={{
                            margin: '0 auto', // Centers the div horizontally within its parent
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img src={peacockImg} className={"peacockImg"} alt="peacock logo" />
            </motion.div>

            <h3 className={"sectionTwo-header"}>Печатна реклама</h3>
            <p className={"sectionTwo-text"}>Проектираме и изпълняваме печатни рекламни<br /> мериали: каталози, книги, брошури, плакати,<br /> билбордове.</p>
        </section>
    );
}
