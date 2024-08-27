import './Main.css';
import { motion } from 'framer-motion';
import graphitiImg from '../../assets/graphiti.png';
import keycap from '../../assets/keycap.png';
import cherriesImg from '../../assets/cherries.png';
import VTUlogoHalve from '../../assets/DrawnVTUlogoHalve.png';
import CherriesShadow from '../../assets/Shadow.png';
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from 'react';

export default function Main() {

    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [scrollDirection, setScrollDirection] = useState(null);
    const prevScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY < prevScrollY.current) {
                setScrollDirection('up');
            } else {
                setScrollDirection('down');
            }

            prevScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const animationDuration = scrollDirection === 'up' ? 0.8 : 2;

    return (<main id="main">

            <motion.div className={"cherriesContainer"}
                        ref={ref}
                        animate={inView ? {y: 0, rotate: 180} : {}}
                        initial={{y: '-32rem', rotate: 0}}
                        transition={{duration: animationDuration, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img className={"cherriesImg"} src={cherriesImg} alt={"cherries img"}/>
            </motion.div>


            <img className={"graphitiImg"} src={graphitiImg} alt="Graphiti img"/>
            <motion.div className={"logoImgContainer"}
                        ref={ref}
                        initial={{y: '-32rem'}}
                        animate={inView ? {y: 0} : {}}
                        transition={{duration: animationDuration, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <span className={'logoText-first-word'}><img className={"logoImageHalf"} src={VTUlogoHalve}
                                                             alt={"vtu logo half image"}/> STUDIO</span>
            </motion.div>
            <p className={"infoText"}>ВТУ студио е част от ВТУ ГРУП<br/> Създадено пред 2024 година и работи в
                областта на уеб
                разработката</p>


            <motion.div className={"keycap-first-container"}
                        initial={{y: '21.8rem'}}
                        animate={inView && scrollDirection === 'up' ? {y: '-29.5rem'} : {}}
                        transition={{duration: 0.4, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <img className={"keycapImg first-keycap"} src={keycap} alt={"keycap image"}/>
            </motion.div>

            <img src={CherriesShadow} alt={"cherries shadow img"} className="cherriesShadowimg"/>


            {/*<svg*/}
            {/*    xmlns="http://www.w3.org/2000/svg"*/}
            {/*    viewBox="0 0 100 100"*/}
            {/*    width="200"*/}
            {/*    height="200"*/}
            {/*    className="stickman"*/}
            {/*>*/}
            {/*    <circle cx="50" cy="20" r="10" stroke="black" stroke-width="2" fill="none"/>*/}
            {/*    <line x1="50" y1="30" x2="50" y2="60" stroke="black" stroke-width="2"/>*/}
            {/*    <line x1="50" y1="40" x2="30" y2="50" stroke="black" stroke-width="2"/>*/}
            {/*    <line x1="50" y1="40" x2="70" y2="50" stroke="black" stroke-width="2"/>*/}
            {/*    <line x1="50" y1="60" x2="40" y2="80" stroke="black" stroke-width="2"/>*/}
            {/*    <line x1="50" y1="60" x2="60" y2="80" stroke="black" stroke-width="2"/>*/}
            {/*</svg>*/}

            {/*<svg className={"square"} viewBox = "0 0 100 100">*/}
            {/*    <path d={" M 10 60 C 10 67 , 20 68, 20 60 " +*/}
            {/*        "C 10 10, 20 20, 20"}/>*/}
            {/*</svg>*/}
        </main>
    )
}
