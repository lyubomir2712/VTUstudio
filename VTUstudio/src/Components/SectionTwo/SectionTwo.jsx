import {motion} from 'framer-motion';
import peacockImg from "../../assets/Peacock.png";

export default function SectionTwo() {
    return (
        <>
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
                    padding: '0',
                }}
            >
            <img src={peacockImg} alt="peacock logo"/>
            </motion.div>


        </>
    )
}