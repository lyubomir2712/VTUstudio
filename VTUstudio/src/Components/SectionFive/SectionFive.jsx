import bowImg from "../../assets/bow.png";
import arrowImg from "../../assets/arrow.png";
import VtuLogoImg from "../../assets/DrawnLogoVTU.png";
import Footer from "../Footer/Footer.jsx";
import './SectionFive.css'
import {motion} from "framer-motion";
export default function SectionFive() {
    return (
        <section>
            <img src={bowImg} className={"bowImg"} alt={"bow img"}/>


            <motion.div className={"arrowContainer"}
                        initial={{x: 0, y: 0}}  // Start at the neutral position
                        animate={{x: 1000, y: -1000}}  // Move to the upper right, out of the viewport
                        transition={{duration: 1.25, ease: 'easeInOut'}}  // Smooth animation
                        style={{
                            margin: '0 auto', // Center the div horizontally within its parent
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            // position: 'relative', // Ensure positioning is relative to the parent
                        }}
            >
                <img src={arrowImg} className={"arrowImg"} alt={"arrow img"}/>
            </motion.div>


            <h3>Контакти</h3>
            <p>
                Адрес: Дряново, п.код: 5370,
                ул."3-ти март" №12
                тел.: 0889 77 80 80
                e-mail: studio@sevenstudio.net</p>
            {/*<Footer/>*/}

        </section>
    )
}