import './Main.css'
import {motion} from 'framer-motion'
import VTUlogo from '../../assets/DrawnLogoVTU.png'
import graphitiImg from '../../assets/graphiti.png'
export default function Main() {


    return (<>

            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&#123;height:165px;&#125;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&lt; div class="VTUstudio"&gt;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&lt;CSSHTML&gt;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">&lt;&#123;color:#FFF;&#125;&gt;</text>*/}
            {/*</svg>*/}
            {/*<svg viewBox="0 0 1000 100" className="svg-text">*/}
            {/*    <text x="10" y="50">React</text>*/}
            {/*</svg>*/}

            <img className={"graphitiImg"} src={graphitiImg} alt="Graphiti img" />
            <motion.div className={"logoContainer"}
                initial={{y: -1000}}
                animate={{y: 0}}
                transition={{duration: 2, ease: 'easeOut'}}
                style={{
                    backgroundColor: 'none',
                    margin: '0 auto',
                }}
            >
                <span className={'logoText-first-word'}><img src={VTUlogo}/> STUDIO</span>
            </motion.div>
            <p className={"infoText"}>ВТУ студио е част от ..... ГРУП<br/> Създадено пред **** година и работи в областта на уеб
                разработката</p>
        </>


    )
}