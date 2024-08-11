import bowImg from "../../assets/bow.png";
import arrowImg from "../../assets/arrow.png";
import VtuLogoImg from "../../assets/DrawnLogoVTU.png";
import Footer from "../Footer/Footer.jsx";
import './SectionFive.css'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
export default function SectionFive() {
    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // The percentage of the element's visibility before triggering
    });

    return (
        <section>
            <img src={bowImg} className={"bowImg"} alt={"bow img"}/>


            <motion.div className={"arrowContainer"}
                        ref={ref}
                        initial={{x: 0, y: 0}}  // Start at the neutral position
                        animate={inView ? {x: '22.5rem', y: '-16.5rem'} : {}}  // Move to the upper right, out of the viewport
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