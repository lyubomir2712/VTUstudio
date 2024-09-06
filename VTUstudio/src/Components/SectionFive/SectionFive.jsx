import bowImg from "../../assets/Images/SectionFive/bow.png";
import arrowImg from "../../assets/Images/SectionFive/arrow.png";
import Footer from "../Footer/Footer.jsx";
import './SectionFive.css'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
export default function SectionFive() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <section id={"sectionFive"}>

            <img src={bowImg} className={"bowImg"} alt={"bow img"}/>

            <motion.div className={"arrowContainer"}
                        ref={ref}
                        initial={{x: 0, y: 0}}
                        animate={inView ? {
                            x: '22.5rem',
                            y: '-16.5rem'
                        } : {}}
                        transition={{duration: 1.25, ease: 'easeInOut'}}
                        style={{
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img src={arrowImg} className={"arrowImg"} alt={"arrow img"}/>
            </motion.div>


            <h3 className={"sectionFive-header"}>Контакти</h3>

            <p className={"sectionFive-text-one"}>
                Адрес: Дряново, п.код: 5370,<br/>
                ул."3-ти март" №12<br/>
            </p>

            <p className={"sectionFive-text-two"}>тел.: 0889 77 80 80</p>

            <p className={"sectionFive-text-three"}>e-mail: studio@sevenstudio.net</p>
            <Footer/>
        </section>
    )
}