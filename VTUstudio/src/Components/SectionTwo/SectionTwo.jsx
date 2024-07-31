import {motion} from 'framer-motion';

export default function SectionTwo() {
    return (
        <>
            <motion.div
                initial={{x: 1000, y: 1000}}  // Start off-screen at the bottom right
                animate={{x: 0, y: 0}}        // Animate to the neutral position
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
                    position: 'relative', // Ensure positioning is relative to the parent
                }}
            >
                <span>Bottomright animation</span>
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
                <span>&lt;RightToNeutral&gt;</span>
            </motion.div>
        </>
    )
}