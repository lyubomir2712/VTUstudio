import './Footer.css'
import {motion} from "framer-motion";
import bowImg from "../../assets/bow.png"
import arrowImg from '../../assets/arrow.png'


export default function Footer() {
    return (
        <>
            <img src={bowImg} className={"bowImg"} alt={"bow img"}/>
            <img src={arrowImg} className={"arrowImg"} alt={"arrow img"}/>
        </>
    )
}