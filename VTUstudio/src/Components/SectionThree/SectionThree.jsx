import {motion} from 'framer-motion';

export function SectionThree() {
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
                    color: 'white',
                    fontWeight: 'bold',
                    position: 'relative', // Ensure positioning is relative to the parent
                }}
            >
                <span>&lt;html&gt;</span>
            </motion.div>
        </>
    )
}