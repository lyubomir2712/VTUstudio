import './Footer.css'
import {motion} from "framer-motion";
import bowImg from "../../assets/bow.png"
import arrowImg from '../../assets/arrow.png'
import VtuLogoImg from '../../assets/DrawnLogoVTU.png'


export default function Footer() {
    return (
        <footer>
                <img className={"logo"} src={VtuLogoImg} alt={"vtu studio img"}/>
            <div className={"Footer"}><p className={"logoText"}>STUDIO</p></div>
        </footer>
    )
}