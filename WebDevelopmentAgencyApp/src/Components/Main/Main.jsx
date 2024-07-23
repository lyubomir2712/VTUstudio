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
            <img src={GearSvg} alt="Gear" className="rotating-gear"/>

            <svg viewBox="0 0 500 100" className="svgJS" xmlns="http://www.w3.org/2000/svg">
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="60"
                    fontFamily="Arial, sans-serif"
                    fill="black"
                    stroke="black"
                    strokeWidth="3"
                    strokeDasharray="100 100"
                    strokeDashoffset="100"
                    id="sql-text">
                    JS
                </text>
            </svg>

            <svg viewBox="0 0 500 100" className="svgC#" xmlns="http://www.w3.org/2000/svg">
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="60"
                    fontFamily="Arial, sans-serif"
                    fill="black"
                    stroke="black"
                    strokeWidth="3"
                    strokeDasharray="100 100"
                    strokeDashoffset="100"
                    id="sql-text">
                    C#
                </text>
            </svg>

            <svg viewBox="0 0 500 100" className="svgSQL" xmlns="http://www.w3.org/2000/svg">
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="60"
                    fontFamily="Arial, sans-serif"
                    fill="black"
                    stroke="black"
                    strokeWidth="3"
                    strokeDasharray="100 100"
                    strokeDashoffset="100"
                    id="sql-text">
                    SQL
                </text>
            </svg>
            <svg viewBox="0 0 500 100" className="svgHTML" xmlns="http://www.w3.org/2000/svg">
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="60"
                    fontFamily="Arial, sans-serif"
                    fill="black"
                    stroke="black"
                    strokeWidth="3"
                    strokeDasharray="100 100"
                    strokeDashoffset="100"
                    id="sql-text">
                    HTML
                </text>
            </svg>
        </>
    )
}