import bowImg from "../../assets/bow.png";
import arrowImg from "../../assets/arrow.png";
import VtuLogoImg from "../../assets/DrawnLogoVTU.png";
import Footer from "../Footer/Footer.jsx";

export default function SectionFive() {
    return (
        <section>
            <img src={bowImg} className={"bowImg"} alt={"bow img"}/>
            <img src={arrowImg} className={"arrowImg"} alt={"arrow img"}/>
            <h3>Контакти</h3>
            <p>
                Адрес: Дряново, п.код: 5370,
                ул."3-ти март" №12
                тел.: 0889 77 80 80
                e-mail: studio@sevenstudio.net</p>
            <br/><br/>
            <Footer/>

        </section>
    )
}