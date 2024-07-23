import './Main.css'
import GearSvg from '../../../public/Gear.svg'
export default function Main() {
    return (<>
            <svg viewBox="0 0 500 100" className="svg-text">
                <text x="10" y="50">&lt;h1&gt;Hello, World!&lt;/h1&gt;</text>
            </svg>


            <img src={GearSvg} alt="Gear" className="rotating-gear"/>
            <img src={GearSvg} alt="Gear" className="rotating-gear"/>
            <img src={GearSvg} alt="Gear" className="rotating-gear"/>


        </>
    )
}