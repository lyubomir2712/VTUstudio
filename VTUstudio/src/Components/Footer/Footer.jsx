import './Footer.css'
import VtuLogoImg from '../../assets/Images/Main/DrawnLogoVTU.png'
import VTULogoFooter from '../../assets/Images/VtuLogoFooter.png'

export default function Footer() {
    return (

            <footer>
                <img className={"footer-logo"} src={VTULogoFooter} alt="VtuLogo"/>
            </footer>
    )
}