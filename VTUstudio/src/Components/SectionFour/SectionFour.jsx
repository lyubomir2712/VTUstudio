import BlueButterflyImg from '../../assets/blueButterfly.png'
import GreenButterflyImg from '../../assets/greenButterfly.png'
import MonaLisaPaintingImg from '../../assets/MonaLisa.png'
import {motion} from "framer-motion";
import PensilImg from "../../assets/pensil.png";



export default function SectionFour() {
    return (
        <>
            <motion.div className={"logoContainer"}
                        initial={{y: 1000}}
                        animate={{y: 0}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <img className={"pensilImg"} src={PensilImg} alt={"keycap image"}/>
            </motion.div>
        </>
    )
}