import {motion} from "framer-motion";
import lemon from "../../assets/lemon.png";
import peacockImg from "../../assets/Peacock copy.png";
import keycapImg from "../../assets/keycap.png";
import './SectionOne.css'
import TrampolineImg from "../../assets/trampoline.png";
import Shadow from './../../assets/ShadowTwo.png'
export default function SectionOne() {
    return (
        <section>
            <motion.div className={"keycapContainer"}
                        initial={{y: -1000}}
                        animate={{y: 0}}
                        transition={{duration: 1, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={keycapImg} className={"keycapImg"} alt={"keycap image"}/>
            </motion.div>


            <motion.div className={"lemonContainer"}
                        initial={{y: 1000}}   // Starts 1000px below its neutral position
                        animate={{y: 0}}      // Moves to its neutral position
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
                        initial={{x: -1000, y: 0}}  // Start off-screen to the left
                        animate={{x: 0, y: 0}}      // Animate to the neutral position
                        transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
                        style={{
                            margin: '0 auto', // Center the div horizontally within its parent
                            justifyContent: 'center',
                            alignItems: 'center', // Ensure the positioning is relative to the parent
                        }}
            >
                <img className={"trampoline"} src={TrampolineImg} alt="trampoline img"/>
            </motion.div>

            <h3>Уеб дизайн</h3>
            <p>
                Проектираме и изработваме динамични уеб сайтове,
                съобразени със съвременните изисквания за визия и функционалност,
                уеб базирани приложения, системи с електронно разплащане, електронни магазини,
                индивидуални бизнес приложения.</p>

            <img src={Shadow} alt="trampoline img" className={"TrampolineShadowImg"}/>
            <img src={Shadow} alt="trampoline img" className={"lemonShadowImg"}/>
        </section>
    )
}