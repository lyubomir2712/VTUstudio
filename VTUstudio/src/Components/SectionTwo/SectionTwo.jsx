import './SectionTwo.css';
import { motion } from 'framer-motion';
import peacockImg from "../../assets/Images/SectionTwo/Peacock.png";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from 'react';

export default function SectionTwo() {
    const { ref, inView, entry } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    const [scrollDirection, setScrollDirection] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateScrollDirection);

        return () => {
            window.removeEventListener('scroll', updateScrollDirection);
        };
    }, [scrollDirection]);

    useEffect(() => {
        if (scrollDirection === 'up' && entry && entry.boundingClientRect.top >= 0) {
            const delay = setTimeout(() => {
                setIsAnimating(false);
            }, 300);

            return () => clearTimeout(delay);
        }
    }, [scrollDirection, entry]);

    useEffect(() => {
        if (inView && scrollDirection === 'down') {
            setIsAnimating(true);
        }
    }, [inView, scrollDirection]);

    return (
        <section id="sectionTwo">
            <motion.div className={"peacock-container"}
                        ref={ref}
                        initial={{x: '-48rem'}}
                        animate={isAnimating ? {x: 0} : {}}
                        transition={{duration: 1, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                <img src={peacockImg} className={"peacock-img"} alt="peacock logo"/>
            </motion.div>

            <h3 className={"sectionTwo-header"}>
                Печатна реклама
            </h3>

            <p className={"sectionTwo-text"}>
                Проектираме и изпълняваме печатни рекламни<br/>
                мериали: каталози, книги, брошури, плакати,<br/>
                билбордове.
            </p>


            <svg className={"section-two-border"} width="1554" height="809" viewBox="0 0 1554 809" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M16 134.5L23.5 128.5M23.5 144L32 137M34 151.5L40.5 144M45 156.5L50 148M59 159L61.5 149.5M73 157.5V149.5M32 1C9.00001 46 -19.6 140.4 50 158C68.4191 161.608 120.743 156.362 113 110C105.559 65.4457 63.3082 72.9249 50 79C41.3333 71.3333 25.6 45 32 1Z"
                    stroke="black"/>
                <path d="M1 126C6.66667 138 15 167 61 167" stroke="black"/>
                <path
                    d="M142 134.5L149.5 128.5M149.5 144L158 137M160 151.5L166.5 144M171 156.5L176 148M185 159L187.5 149.5M199 157.5V149.5M158 1C135 46 106.4 140.4 176 158C194.419 161.608 246.743 156.362 239 110C231.559 65.4457 189.308 72.9249 176 79C167.333 71.3333 151.6 45 158 1Z"
                    stroke="black"/>
                <path d="M127 126C132.667 138 141 167 187 167" stroke="black"/>
                <path
                    d="M1411.78 674.5L1404.28 680.5M1404.28 665L1395.78 672M1393.78 657.5L1387.28 665M1382.78 652.5L1377.78 661M1368.78 650L1366.28 659.5M1354.78 651.5V659.5M1395.78 808C1418.78 763 1447.38 668.6 1377.78 651C1359.36 647.392 1307.03 652.638 1314.78 699C1322.22 743.554 1364.47 736.075 1377.78 730C1386.44 737.667 1402.18 764 1395.78 808Z"
                    stroke="black"/>
                <path d="M1426.78 683C1421.11 671 1412.78 642 1366.78 642" stroke="black"/>
                <path
                    d="M1537.78 674.5L1530.28 680.5M1530.28 665L1521.78 672M1519.78 657.5L1513.28 665M1508.78 652.5L1503.78 661M1494.78 650L1492.28 659.5M1480.78 651.5V659.5M1521.78 808C1544.78 763 1573.38 668.6 1503.78 651C1485.36 647.392 1433.03 652.638 1440.78 699C1448.22 743.554 1490.47 736.075 1503.78 730C1512.44 737.667 1528.18 764 1521.78 808Z"
                    stroke="black"/>
                <path d="M1552.78 683C1547.11 671 1538.78 642 1492.78 642" stroke="black"/>
                <path d="M69.3291 670.452C65.2936 561.857 67.9395 402.721 68.9702 195" stroke="black"/>
                <path
                    d="M1432.6 638C1432.6 638 1432.6 636.711 1432.6 550.257C1432.6 500.048 1432.6 456.084 1432.6 417C1432.6 323.183 1432.6 257.48 1432.6 201"
                    stroke="black"/>
                <path
                    d="M1432.6 201C1432.6 63.4 1432.6 59.1156 1335 59.1156C1309.23 59.1156 1208.83 59.1156 1075 59.1156C815.525 59.1156 430.402 59.1156 220 59.1156"
                    stroke="black"/>
                <path d="M1090 48C1222.16 48 1246.51 48 1345.75 48C1445 48 1445 67 1445 186.503V418" stroke="black"/>
                <path
                    d="M409 768.132C276.854 766.591 251.478 769.29 152.239 768.132C53 766.975 53.2216 747.976 54.6151 628.482L54.6151 515L54.6151 399"
                    stroke="black"/>
                <path d="M67.9999 614C69.8273 751.588 66.8843 755.168 164.477 753.872L1335 753.872" stroke="black"/>
            </svg>

        </section>
    );
}
