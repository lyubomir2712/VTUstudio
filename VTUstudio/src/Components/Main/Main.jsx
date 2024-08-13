import './Main.css';
import { motion } from 'framer-motion';
import VTUlogo from '../../assets/DrawnLogoVTU.png';
import graphitiImg from '../../assets/graphiti.png';
import keycap from '../../assets/keycap.png';
import cherriesImg from '../../assets/cherries.png';
import VTUlogoHalve from '../../assets/DrawnVTUlogoHalve.png';
import CherriesShadow from '../../assets/Shadow.png';
import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from 'react';

export default function Main() {

    const { ref, inView } = useInView({
        triggerOnce: false,  // Keep observing the element
        threshold: 0.1,      // The percentage of the element's visibility before triggering
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

    return (<>

            <motion.div className={"cherriesContainer"}
                        ref={ref}
                        animate={inView ? { y: 0, rotate: 180 } : {}}
                        initial={{y: '-32rem', rotate: 0}}
                        transition={{duration: 2, ease: 'easeOut'}}
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
                        animate={inView ? {y: 0 } : {}}
                        transition={{duration: 2, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <span className={'logoText-first-word'}><img className={"logoImageHalf"} src={VTUlogoHalve} alt={"vtu logo half image"}/> STUDIO</span>
            </motion.div>
            <p className={"infoText"}>ВТУ студио е част от ВТУ ГРУП<br/> Създадено пред 2024 година и работи в
                областта на уеб
                разработката</p>


            <motion.div className={"keycap-first-container"}
                        // ref={ref}
                        initial={{y: '21.8rem'}}
                        animate={inView && scrollDirection === 'up' ? { y: '-26.5rem' } : {}}
                        transition={{duration: 0.4, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <img className={"keycapImg first-keycap"} src={keycap} alt={"keycap image"}/>
            </motion.div>

            <img src={CherriesShadow} alt={"cherries shadow img"} className="cherriesShadowimg"/>

        </>
    )
}
