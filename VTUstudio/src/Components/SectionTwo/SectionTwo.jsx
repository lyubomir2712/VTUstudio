import './SectionTwo.css'
import {motion} from 'framer-motion';
import peacockImg from "../../assets/Peacock.png";
import shadowImg from '../../assets/ShadowTwo.png'

export default function SectionTwo() {
    return (
        <section>
            <motion.div className={"peacockContainer"}
                initial={{x: -1000}}   // Start 1000px to the left of the neutral position
                animate={{x: 0}}       // Animate to the neutral position
                transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
                style={{
                    width: '500px',
                    height: '500px',
                    margin: '0 auto', // Centers the div horizontally within its parent
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0',
                }}
            >
            <img src={peacockImg} className={"peacockImg"} alt="peacock logo"/>
            </motion.div>

            <h3>Печатна реклама</h3>
            <p>Проектираме и изпълняваме печатни рекламни мериали: каталози, книги, брошури, плакати, билбордове.</p>
            <img src={shadowImg} className={"peacockShadow"} alt="shadow img"/>
        </section>
    )
}