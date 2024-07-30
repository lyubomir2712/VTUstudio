import './Navbar.css'
import Logo from '../../assets//DrawnLogoVTU.png'
export default function Navbar() {
    return (
        <header>
            <nav className="navbar">

                <div className={'language'}>Български</div>
                <div className={'navbar-content-container'}>
                    <img src={Logo} alt="Logo" className={"logo"}/>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#">Web design</a></li>
                        <li className="nav-item"><a href="#">Print advertising</a></li>
                        <li className="nav-item"><a href="#">Photography</a></li>
                        <li className="nav-item"><a href="#">Portfolio</a></li>
                        <li className="nav-item"><a href="#">Photoalbums</a></li>
                        <li className="nav-item"><a href="#">Contacts</a></li>
                    </ul>
                </div>
            </nav>
            <p className={"logoText"}>STUDIO</p>
        </header>
    )
}