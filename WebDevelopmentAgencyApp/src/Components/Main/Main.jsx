import './Main.css'
import GearSvg from '../../../public/Gear.svg'
import MainSvgText from '../../assets/MainSvgText.svg'
import stickMan from '../../../public/stickMan.svg'
import {motion} from 'framer-motion'
export default function Main() {


    return (<>

            <svg viewBox="0 0 500 100" className="svg-text">
                <text x="10" y="50">&lt;h1&gt;Hello, World!&lt;/h1&gt;</text>
                {/*<path className="st2"*/}
                {/*      d="M62.4,115.4c-8.5-3.9-34.4,7.4-18.6,14.2c15.9,6.9,22.8,7.4,19.8,17c-3,9.6-23.3,8.5-23.3,8.5"*/}
                {/*      style="stroke-dashoffset: 0px; stroke-dasharray: 90.8253, 90.8253;"></path>*/}
            </svg>



            <svg width="200" height="100" viewBox="0 0 200 100">
                <motion.path
                    d="M10 80 L10 20 Q15 10, 20 20 L20 50 Q20 80, 30 80 T40 50 M50 50 Q50 40, 60 40 Q70 40, 70 50 Q70 60, 60 60 Q50 60, 50 50 M80 20 L80 80 M90 20 L90 80 M110 50 Q110 40, 120 40 Q130 40, 130 50 Q130 60, 120 60 Q110 60, 110 50 M129.6,26.1c0,0-0.1,8.9-0.5,10.8c1.1-6.1,3.8-13.4,5.1-10s0.7,8.5,0.7,8.5c1.2-3.2,3.3-9.9,5.1-5.1 c1.2,3.2,1.6,5.2,1.6,5.6"
                    fill="transparent"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="1000" // Length of the path
                    strokeDashoffset="1000" // Offset to hide the path initially
                    animate={{strokeDashoffset: 0}} // Animate to reveal the path
                    transition={{duration: 5, ease: "easeInOut"}} // Animation settings
                />
            </svg>
            <img className={"stickMan"} src={stickMan} alt={"stickman"}/>

        </>


    )
}