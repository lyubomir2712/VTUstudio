import './Navbar.css'
import Logo from '../../assets/VTUstudioLogo.png'
export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <p>Български</p>

                    <img src={Logo} className={"logo"} alt="Logo" />
                    <span>Studio</span>
                    <ul className="nav-list">
                        <li className="nav-item"><a href="#">Web design</a></li>
                        <li className="nav-item"><a href="#">Print advertising</a></li>
                        <li className="nav-item"><a href="#">Photography</a></li>
                        <li className="nav-item"><a href="#">Portfolio</a></li>
                        <li className="nav-item"><a href="#">Photoalbums</a></li>
                        <li className="nav-item"><a href="#">Contacts</a></li>
                    </ul>

            </nav>
        </header>
    )
}