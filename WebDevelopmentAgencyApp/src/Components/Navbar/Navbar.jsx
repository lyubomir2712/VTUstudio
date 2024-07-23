import './Navbar.css'
export default function Navbar() {
    return (
        <header>
            <nav className="navbar">
                <p>Български</p>
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