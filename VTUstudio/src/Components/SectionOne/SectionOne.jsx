import {motion} from "framer-motion";
import lemon from "../../assets/lemon.png";
import peacockImg from "../../assets/Peacock copy.png";
import keycapImg from "../../assets/keycap.png";
import './SectionOne.css'
import TrampolineImg from "../../assets/trampoline.png";
export default function SectionOne() {
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
                <img src={keycapImg} className={"keycapImg"} alt={"keycap image"}/>
            </motion.div>




            <motion.div
                initial={{y: 1000}}   // Starts 1000px below its neutral position
                animate={{y: 0}}      // Moves to its neutral position
                transition={{duration: 1, ease: 'easeOut'}}  // 1-second duration
                style={{
                    width: '40%',
                    height: '20%',
                    margin: '0 auto', // Centers the div horizontally
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: 'bold'
                }}
            >
                <img src={lemon} alt="lemon logo"/>
            </motion.div>


            <motion.div
                initial={{x: -1000, y: 0}}  // Start off-screen to the left
                animate={{x: 0, y: 0}}      // Animate to the neutral position
                transition={{duration: 1, ease: 'easeOut'}}  // Smooth animation
                style={{
                    width: '100px',
                    height: '100px',
                    margin: '0 auto', // Center the div horizontally within its parent
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative', // Ensure the positioning is relative to the parent
                }}
            >
                <img src={TrampolineImg} alt="trampoline img"/>
            </motion.div>
        </>
    )
}