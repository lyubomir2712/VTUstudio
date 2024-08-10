import './SectionTwo.css'
import {motion} from 'framer-motion';
import peacockImg from "../../assets/Peacock.png";
import shadowImg from '../../assets/ShadowTwo.png'
import {useInView} from "react-intersection-observer";

export default function SectionTwo() {

    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // The percentage of the element's visibility before triggering
    });
    return (
        <section>
            <motion.div className={"peacockContainer"}
                        ref={ref}
                        animate={inView ? { x: 0 } : {}}
                initial={{x: '-48rem'}}   // Start 1000px to the left of the neutral position
                // animate={{x: 0}}       // Animate to the neutral position
                transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
                style={{
                    margin: '0 auto', // Centers the div horizontally within its parent
                    justifyContent: 'center',
                    alignItems: 'center',
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