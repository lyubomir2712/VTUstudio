import './App.css'
import Navbar from './Components/Navbar/Navbar.jsx';
import Element1 from './Components/Transition/Element1.jsx';
import ScrollAnimation from './Components/Transition/ScrollAnimation.jsx';
import SvgDrawing from './Components/Transition/SvgDrawing.jsx';
import Transition from "./Components/Transition/Transition.jsx";
import { motion } from "framer-motion";

function App() {
    return (
        <>
            <div className="container">
                <ScrollAnimation>
                    <Element1 />
                </ScrollAnimation>
                <ScrollAnimation>
                    <SvgDrawing />
                </ScrollAnimation>
            </div>
        </>
    )

}

export default App;
