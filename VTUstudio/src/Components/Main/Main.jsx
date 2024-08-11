import './Main.css'
import {motion} from 'framer-motion'
import VTUlogo from '../../assets/DrawnLogoVTU.png'
import graphitiImg from '../../assets/graphiti.png'
import keycap from '../../assets/keycap.png'
import cherriesImg from '../../assets/cherries.png'
import VTUlogoHalve from '../../assets/DrawnVTUlogoHalve.png'
import CherriesShadow from '../../assets/ShadowTwo.png'
import {useInView} from "react-intersection-observer";
export default function Main() {

    const { ref, inView } = useInView({
        triggerOnce: false,  // Trigger the animation only once
        threshold: 0.1,     // The percentage of the element's visibility before triggering
    });




    return (<>

            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&#123;height:165px;&#125;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&lt; div class="VTUstudio"&gt;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&lt;CSSHTML&gt;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&lt;&#123;color:#FFF;&#125;&gt;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">React</text>*/}
            {/*</svg>*/}
            <motion.div className={"cherriesContainer"}
                        ref={ref}
                        animate={inView ? { y: 0, rotate: 180 } : {}}
                        initial={{y: '-32rem', rotate: 0}}
                        transition={{duration: 2, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img className={"cherriesImg"} src={cherriesImg} alt={"cherries img"}/>
            </motion.div>


            <img className={"graphitiImg"} src={graphitiImg} alt="Graphiti img"/>
            <motion.div className={"logoImgContainer"}
                        ref={ref}
                        initial={{y: '-32rem'}}
                        animate={inView ? {y: 0 } : {}}
                        transition={{duration: 2, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <span className={'logoText-first-word'}><img className={"logoImageHalf"} src={VTUlogoHalve} alt={"vtu logo half image"}/> STUDIO</span>
            </motion.div>
            <p className={"infoText"}>ВТУ студио е част от ВТУ ГРУП<br/> Създадено пред 2024 година и работи в
                областта на уеб
                разработката</p>


            <motion.div className={"logoContainer"}
                        // ref={ref}
                        initial={{y: '20rem'}}
                        animate={inView ? { y: '-24.5rem' } : {}}
                        transition={{duration: 0.7, ease: 'easeOut'}}
                        style={{
                            backgroundColor: 'none',
                            margin: '0 auto',
                        }}
            >
                <img className={"keycapImg first-keycap"} src={keycap} alt={"keycap image"}/>
            </motion.div>

            <img src={CherriesShadow} alt={"cherries shadow img"} className="cherriesShadowimg"/>

        </>
    )
}