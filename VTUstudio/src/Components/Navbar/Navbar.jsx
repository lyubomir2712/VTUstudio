import './Navbar.css'
import Logo from '../../assets//DrawnLogoVTU.png'
import i18n from '../LanguageChange/LanguageChange.js';
import {useState} from 'react';
import React from "react";
import { useTranslation } from "react-i18next";


export default function Navbar() {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }
    let [languageButtonText, setLanguageButtonText] = useState("Български");

    const languageButtonTextHandler = ({language}) => {
        if(language === "Български"){
            setLanguageButtonText("English")
        }
        else{
            setLanguageButtonText("Български")
        }
    }

    const handleButtonClick = () => {
        toggleLanguage();
        languageButtonTextHandler({language : languageButtonText});
    }


    return (
        <header>
            <nav className="navbar grid-container">

                <div onClick={handleButtonClick}
                     className={'language upper-right-cell'}>{languageButtonText}</div>
                <div className={"left-cell"}>
                    <a className={"logoTag"} href={"#main"}><img src={Logo} alt="Logo"
                      className={"logo"}/></a></div>
                <div className={'navbar-content-container lower-right-cell'}>

                <ul className="nav-list">
                        <li className="nav-item"><a href={"#sectionOne"}>{t("Web design")}</a></li>
                        <li className="nav-item"><a href="#sectionTwo">{t("Print advertising")}</a></li>
                        <li className="nav-item"><a href="#sectionThree">{t("Photography")}</a></li>
                        <li className="nav-item"><a href="#sectionFour">{t("Portfolio")}</a></li>
                        <li className="nav-item"><a href="#">{t("Photoalbums")}</a></li>
                        <li className="nav-item"><a href="#sectionFive">{t("Contacts")}</a></li>
                    </ul>
                </div>
            </nav>
            <p className={"logoText"}>STUDIO</p>
        </header>
    )
}