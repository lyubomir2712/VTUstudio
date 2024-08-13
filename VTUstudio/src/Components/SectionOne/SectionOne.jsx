import {motion} from "framer-motion";
import lemon from "../../assets/lemon.png";
import peacockImg from "../../assets/Peacock copy.png";
import keycapImg from "../../assets/keycap.png";
import './SectionOne.css'
import TrampolineImg from "../../assets/trampoline.png";
import Shadow from './../../assets/ShadowTwo.png'
import { useInView } from 'react-intersection-observer';

export default function SectionOne() {

    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // The percentage of the element's visibility before triggering
    });

    return (
        <section id={"sectionOne"}>
            <motion.div className={"keycapContainer"}
                        ref={ref}
                        animate={inView ? { y: 0 } : {}}
                        initial={{y: '-30.5rem'}}
                        transition={{duration: 0.5, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={keycapImg} className={"keycapImg"} alt={"keycap image"}/>
            </motion.div>


            <motion.div className={"lemonContainer"}
                        ref={ref}
                        initial={{y: '5.3rem'}}   // Starts 1000px below its neutral position
                        animate={inView ? { y: 0 } : {}}    // Moves to its neutral position
                        transition={{duration: 1, ease: 'easeOut'}}  // 1-second duration
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
                        initial={{x: '-45rem', y: 0}}  // Start off-screen to the left
                        animate={inView ? {x:0, y: 0 } : {}}  // Animate to the neutral position
                        transition={{duration: 0.5, ease: 'easeOut'}}  // Smooth animation
                        style={{
                            margin: '0 auto', // Center the div horizontally within its parent
                            justifyContent: 'center',
                            alignItems: 'center', // Ensure the positioning is relative to the parent
                        }}
            >
                <img className={"trampoline"} src={TrampolineImg} alt="trampoline img"/>
            </motion.div>

            <h3 className={"sectionOne-header"}>Уеб дизайн</h3>
            <p className={'sectionOne-text'}>
                Проектираме и изработваме динамични уеб сайтове,<br/>
                съобразени със съвременните изисквания за визия и<br/> функционалност,
                уеб базирани приложения, системи с<br/> електронно разплащане, електронни магазини,<br/>
                индивидуални бизнес приложения.</p>

            <img src={Shadow} alt="trampoline img" className={"trampolineShadowImg"}/>
            <img src={Shadow} alt="trampoline img" className={"lemonShadowImg"}/>
        </section>
    )
}