import './Navbar.css'
import Logo from '../../assets/Images/Navbar/VtuLogoNavbar.png'
import i18n from '../LanguageChange/LanguageChange.js';
import { useState } from 'react';
import React from "react";
import { useTranslation } from "react-i18next";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col, Row } from 'react-bootstrap';

export default function Navigation() {

    const { t, i18n } = useTranslation();
    const [isEnglish, setIsEnglish] = useState(true);

    const toggleLanguage = () => {
        const newLanguage = isEnglish ? "bg" : "en";
        i18n.changeLanguage(newLanguage);
        setIsEnglish(!isEnglish);
    }
    let [languageButtonText, setLanguageButtonText] = useState("Български");

    const languageButtonTextHandler = ({ language }) => {
        if (language === "Български") {
            setLanguageButtonText("English")
        }
        else {
            setLanguageButtonText("Български")
        }
    }

    const handleButtonClick = () => {
        toggleLanguage();
        languageButtonTextHandler({ language: languageButtonText });
    }


    return (
        <Navbar expand="lg" className=" navigation" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#main">
                    <img src={Logo} alt="Logo" className={"logo"} />
                </Navbar.Brand>

                <Dropdown className='navigation-toggle' align="end">
                    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="">
                        <img src="/src/assets/Images/Navbar/burger-menu.svg" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#sectionOne">{t("Web design")}</Dropdown.Item>
                        <Dropdown.Item href="#sectionTwo">{t("Print advertising")}</Dropdown.Item>
                        <Dropdown.Item href="#sectionThree">{t("Photography")}</Dropdown.Item>
                        <Dropdown.Item href="#sectionFour">{t("Photoalbums")}</Dropdown.Item>
                        <Dropdown.Item href="#sectionFive">{t("Contacts")}</Dropdown.Item>
                        <Dropdown.Item onClick={handleButtonClick} className='language menu-language-toggle'>{languageButtonText}</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Container fluid>
                        <Row className="navbar-menu-wrapper">
                            <div onClick={handleButtonClick} className={'language nav-language-toggle'}>{languageButtonText}</div>
                            <Col>
                                <Nav className="navbar-collapsed-menu">
                                    <Nav.Link href="#sectionOne">{t("Web design")}</Nav.Link>
                                    <span className='navbar-menu-devider'>/</span>
                                    <Nav.Link href="#sectionTwo">{t("Print advertising")}</Nav.Link>
                                    <span className='navbar-menu-devider'>/</span>
                                    <Nav.Link href="#sectionThree">{t("Photography")}</Nav.Link>
                                    <span className='navbar-menu-devider'>/</span>
                                    <Nav.Link href="#sectionFour">{t("Portfolio")}</Nav.Link>
                                    <span className='navbar-menu-devider'>/</span>
                                    <Nav.Link href="#">{t("Photoalbums")}</Nav.Link>
                                    <span className='navbar-menu-devider'>/</span>
                                    <Nav.Link href="#sectionFive">{t("Contacts")}</Nav.Link>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}