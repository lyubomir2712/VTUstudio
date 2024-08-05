import peacockImg from "../../assets/Peacock copy.png";
import {motion} from "framer-motion";
import "./SectionThree.css"
import MonaLisaPaintingImg from "../../assets/MonaLisa.png";
import GreenButterflyImg from "../../assets/greenButterfly.png";
import BlueButterflyImg from "../../assets/blueButterfly.png";

function SectionThree() {
    return (
        <>

            <motion.div className={"logoContainer"}
                        initial={{y: -1000}}
                        animate={{y: 0}}
                        transition={{duration: 1, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={MonaLisaPaintingImg} className={"MonaLisaImg"} alt={"Mona Lisa painting"}/>
            </motion.div>

            <motion.div
                initial={{x: 1000, y: 1000}}  // Start off-screen at the bottom right
                animate={{x: 0, y: 0}}        // Animate to the neutral position
                transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
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
                <img src={BlueButterflyImg} className={"BlueButterflyImg"}/>
            </motion.div>


            <motion.div
                initial={{x: 1000}}  // Start off-screen to the right
                animate={{x: 0}}     // Animate to the neutral position
                transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'tomato',
                    margin: '0 auto', // Center the div horizontally within its parent
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'black',
                    fontWeight: 'bold',
                    position: 'relative', // Ensure the positioning is relative to the parent
                }}
            >
                <img src={GreenButterflyImg} className={"BlueButterflyImg"}/>
            </motion.div>
        </>
    )
}

export default SectionThree;