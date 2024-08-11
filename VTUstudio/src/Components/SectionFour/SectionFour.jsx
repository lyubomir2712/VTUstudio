import BlueButterflyImg from '../../assets/blueButterfly.png'
import GreenButterflyImg from '../../assets/greenButterfly.png'
import MonaLisaPaintingImg from '../../assets/MonaLisa.png'
import {motion} from "framer-motion";
import PensilImg from "../../assets/pensil.png";
import './SectionFour.css'
import {InView, useInView} from "react-intersection-observer";


export default function SectionFour() {
    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // The percentage of the element's visibility before triggering
    });

    return (
        <section>
            <motion.div className={"pensilContainer"}
                        ref={ref}
                        initial={{y: '5.1rem'}}
                        animate={inView ?{y: 0} : {}}
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