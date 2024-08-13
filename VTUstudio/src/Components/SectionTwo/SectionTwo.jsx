import './SectionTwo.css'
import {motion} from 'framer-motion';
import peacockImg from "../../assets/Peacock.png";
import shadowImg from '../../assets/Shadow.png'
import {useInView} from "react-intersection-observer";

export default function SectionTwo() {

    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // The percentage of the element's visibility before triggering
    });
    return (
        <section id="sectionTwo">
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


            <h3 className={"sectionTwo-header"}>Печатна реклама</h3>
            <p className={"sectionTwo-text"}>Проектираме и изпълняваме печатни рекламни<br/> мериали: каталози, книги, брошури, плакати,<br/> билбордове.</p>
            <img src={shadowImg} className={"peacockShadow"} alt="shadow img"/>
        </section>
    )
}