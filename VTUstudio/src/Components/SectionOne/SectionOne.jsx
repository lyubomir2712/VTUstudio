import {motion} from "framer-motion";
import lemon from "../../assets/lemon.png";
import peacockImg from "../../assets/Peacock copy.png";
export function SectionOne() {
    return (
        <>


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
                        <span>&lt;RightToNeutral&gt;</span>
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
                        <img src={lemon} alt="lemon logo" />
                </motion.div>

                <motion.div
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
                            fontWeight: 'bold',
                            padding: '0',
                    }}
                >
                        <img src={peacockImg} alt="peacock logo" />
                </motion.div>


                <motion.div
                    initial={{x: 1000, y: -1000}}  // Start off-screen at the upper right
                    animate={{x: 0, y: 0}}         // Animate to the neutral position
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
                        <span>&lt;UpperRightAnimation&gt;</span>
                </motion.div>
        </>
    )
}