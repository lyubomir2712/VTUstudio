import './Footer.css'
import VtuLogoImg from '../../assets/DrawnLogoVTU.png'


export default function Footer() {
    return (
        <>
            <img className={"footer-logo"} src={VtuLogoImg} alt="VtuLogo"/>
            <footer>
                <div className={"footer-content"}><p className={"footer-logo-text"}>STUDIO</p></div>
            </footer>
        </>
    )
}