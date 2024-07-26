import './Main.css'
import {motion} from 'framer-motion'
import VTUlogo from '../../assets/DrawnLogoVTU.png'
export default function Main() {


    return (<>

            <svg viewBox="0 0 500 100" className="svg-text">
                <text x="10" y="50">&lt;h1&gt;Hello, World!&lt;/h1&gt;</text>
            </svg>



            <svg width="200" height="100" viewBox="0 0 200 100">
                <motion.path
                    d=""
                    fill="transparent"
                    stroke="black"
                    strokeWidth="2"
                    strokeDasharray="1000"
                    strokeDashoffset="1000"
                    animate={{strokeDashoffset: 0}}
                    transition={{duration: 5, ease: "easeInOut"}}
                />
            </svg>

            <img src={VTUlogo} className={"mainLogo"} alt="VTU logo" />
            <span>STUDIO</span>
        </>


    )
}