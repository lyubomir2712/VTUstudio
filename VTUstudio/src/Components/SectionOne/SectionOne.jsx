import {motion} from "framer-motion";
import lemon from "../../assets/Images/SectionOne/lemon.png";
import keycapImg from "../../assets/Images/Main/keycap.png";
import './SectionOne.css'
import TrampolineImg from "../../assets/Images/SectionOne/trampoline.png";
import Shadow from '../../assets/Images/Main/Shadow.png'
import { useInView } from 'react-intersection-observer';
import {useEffect, useState} from "react";

export default function SectionOne() {

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
        <section id={"sectionOne"}>
            <motion.div className={"keycapContainer"}
                        ref={ref}
                        animate={isAnimating ? { y: 0 } : {}}
                        initial={{y: '-33.5rem'}}
                        transition={{duration: 0.5, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={keycapImg} className={"keycapImg"} alt={"keycap image"}/>
            </motion.div>

            <motion.div className={"lemonContainer"}
                        ref={ref}
                        initial={{y: '36.3rem'}}
                        animate={isAnimating ? { y: 0 } : {}}
                        transition={{duration: 1, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img src={lemon} className={"lemonImg"} alt="lemon logo"/>
            </motion.div>

            <motion.div className={"trampolineContainer"}
                        ref={ref}
                        initial={{x: '-45rem', y: 0}}
                        animate={isAnimating ? {x:0, y: 0 } : {}}
                        transition={{duration: 0.5, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img className={"trampoline"} src={TrampolineImg} alt="trampoline img"/>
            </motion.div>

            <h3 className={"sectionOne-header"}>
                Уеб дизайн
            </h3>

            <p className={'sectionOne-text'}>
                Проектираме и изработваме динамични уеб сайтове,<br/>
                съобразени със съвременните изисквания за визия и<br/> функционалност,
                уеб базирани приложения, системи с<br/> електронно разплащане, електронни магазини,<br/>
                индивидуални бизнес приложения.
            </p>

            <img src={Shadow} alt="trampoline img" className={"trampolineShadowImg"}/>

            <img src={Shadow} alt="trampoline img" className={"lemonShadowImg"}/>
        </section>
    )
}