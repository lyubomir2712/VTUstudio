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
            <nav className="navbar">

                <div onClick={handleButtonClick} className={'language'}>{languageButtonText}</div>
                <div className={'navbar-content-container'}>
                    <img src={Logo} alt="Logo" className={"logo"}/>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#">{t("Web design")}</a></li>
                        <li className="nav-item"><a href="#">{t("Print advertising")}</a></li>
                        <li className="nav-item"><a href="#">{t("Photography")}</a></li>
                        <li className="nav-item"><a href="#">{t("Portfolio")}</a></li>
                        <li className="nav-item"><a href="#">{t("Photoalbums")}</a></li>
                        <li className="nav-item"><a href="#">{t("Contacts")}</a></li>
                    </ul>
                </div>
            </nav>
            <p className={"logoText"}>STUDIO</p>
        </header>
    )
}