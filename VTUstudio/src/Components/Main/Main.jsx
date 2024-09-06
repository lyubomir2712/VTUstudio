import './Main.css';
import { motion } from 'framer-motion';
import graphitiImg from '../../assets/Images/Main/graphiti.png';
import keycap from '../../assets/Images/Main/keycap.png';
import cherriesImg from '../../assets/Images/Main/cherries.png';
import VTUlogoHalve from '../../assets/Images/Main/DrawnVTUlogoHalve.png';
import CherriesShadow from '../../assets/Images/Main/Shadow.png';
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
        </main>
    )
}
