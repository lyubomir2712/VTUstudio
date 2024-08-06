import './Footer.css'
import {motion} from "framer-motion";
import bowImg from "../../assets/bow.png"
import arrowImg from '../../assets/arrow.png'
import VtuLogoImg from '../../assets/DrawnLogoVTU.png'


export default function Footer() {
    return (
        <>
            <img src={bowImg} className={"bowImg"} alt={"bow img"}/>
            <img src={arrowImg} className={"arrowImg"} alt={"arrow img"}/>
            <h3>Контакти</h3>
            <p>
                Адрес: Дряново, п.код: 5370,
                ул."3-ти март" №12
                тел.: 0889 77 80 80
                e-mail: studio@sevenstudio.net</p>

            <img src={VtuLogoImg} className={"logo"} alt={"VTU studio img"}/>

            <footer className={"Footer"}>
                <p className={"logoText"}>STUDIO</p>
            </footer>
        </>
    )
}