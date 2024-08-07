import { motion } from "framer-motion";
import VTUlogo from '../../assets/DrawnLogoVTU.png'

function Element1({ isInView }) {
    return (
        <div style={{ height: "850px", position: "relative", paddingTop: "100px" }}>
            <motion.div
                initial={{ y: -1000 }}
                animate={{ y: isInView ? 0 : -1000 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'none',
                    margin: '0 auto',
                }}
            >
                <img src={VTUlogo} className={"mainLogo"} alt="VTU logo" />
            </motion.div>
            <motion.div
                initial={{ y: -1000 }}
                animate={{ y: isInView ? 0 : -1000 }}
                transition={{ duration: 1, ease: 'easeOut' }}
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'none',
                    margin: '0 auto',
                }}
            >
                <span>STUDIO</span>
            </motion.div>
        </div>
    )
}

export default Element1