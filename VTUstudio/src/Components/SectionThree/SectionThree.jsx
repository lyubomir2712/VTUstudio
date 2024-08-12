import peacockImg from "../../assets/Peacock copy.png";
import {motion} from "framer-motion";
import "./SectionThree.css"
import MonaLisaPaintingImg from "../../assets/MonaLisa.png";
import GreenButterflyImg from "../../assets/greenButterfly.png";
import BlueButterflyImg from "../../assets/blueButterfly.png";
import shadow from '../../assets/ShadowTwo.png'
import {useInView} from "react-intersection-observer";

function SectionThree() {

    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // The percentage of the element's visibility before triggering
    });

    return (
        <section>

            <motion.div className={"monaLisaContainer"}
                        ref={ref}
                        animate={inView ? { y: 0, rotate:0 } : {}}
                        initial={{y: '-9rem', rotate: 45}}  // Start off-screen with 45 degrees rotation
                        // animate={{y: 0, rotate: 0}}       // Animate to the neutral position with 0 degrees rotation
                        transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={MonaLisaPaintingImg} className={"monaLisaImg"} alt={"Mona Lisa painting"}/>
            </motion.div>

            <motion.div className={"blueButterflyContainer"}
                        initial={{y:  '10rem', x: 0, rotate: 45}}  // Start off-screen with 45 degrees rotation
                        animate={inView ?{
                            y: [1000, 500, 0],                // Define y keyframes for a curved path
                            x: [0, 250, 0],                   // Define x keyframes for a curved path from right to left
                            rotate: [45, 30, 0]               // Define rotation keyframes
                        }: {}}
                        transition={{duration: 2, ease: 'easeInOut'}}  // Smooth animation
                        style={{
                            width: '100px',
                            height: '100px',
                            margin: '0 auto', // Center the div horizontally within its parent
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative', // Ensure positioning is relative to the parent
                        }}
            >
                <img src={BlueButterflyImg} className={"blueButterflyImg"} alt="blue butterfly img"/>
            </motion.div>


            <motion.div className={"greenButterflyContainer"}
                        initial={{y: '10rem', x: 0, rotate: 45}}  // Start off-screen with 45 degrees rotation
                        animate={inView ?{
                            y: [1000, 500, 0],                // Define y keyframes for a curved path
                            x: [0, 250, 0],                   // Define x keyframes for a curved path from right to left
                            rotate: [45, 30, 0]               // Define rotation keyframes
                        }: {}}
                        transition={{duration: 2, ease: 'easeInOut'}}  // Smooth animation
                        style={{
                            width: '100px',
                            height: '100px',
                            margin: '0 auto', // Center the div horizontally within its parent
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative', // Ensure positioning is relative to the parent
                        }}
            >
                <img src={GreenButterflyImg} className={"greenButterflyImg"} alt={"green butterfly img"}/>
            </motion.div>



                <h3 className={"sectionThree-header"}>Фотография</h3>
                <p className={"sectionThree-text"}>Професионални фотографски решения: интериорно и<br/> екстериорно заснемане, продуктова фотография.</p>
                <img className={"monaLisaShadow"} src={shadow} alt={"Mona Lisa shadow"}/>
        </section>
    )
}

export default SectionThree;