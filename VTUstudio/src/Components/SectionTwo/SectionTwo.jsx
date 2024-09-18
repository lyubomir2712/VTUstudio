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


    const { ref: sectionTwoBorderRef, inView: sectionTwoBorderInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionTwoBirdRef, inView: sectionTwoBirdInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionTwoCloudRef, inView: sectionTwoCloudInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionTwoCloudTwoRef, inView: sectionTwoCloudTwoInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: lightningRef, inView: lightningInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: lightningTwoRef, inView: lightningTwoInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: photographerStickmanRef, inView: photographerStickmanInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: cowRef, inView: cowInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: horseRef, inView: horseInView } = useInView({ triggerOnce: false, threshold: 0.1 });
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


            <svg ref={sectionTwoBorderRef} className={`section-two-border ${sectionTwoBorderInView ? 'section-two-border-animate' : ''}`} width="1554" height="809" viewBox="0 0 1554 809" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
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


            <svg ref={sectionTwoBirdRef} className={`section-two-bird ${sectionTwoBirdInView ? 'section-two-bird-animate' : ''}`} width="2790" height="1794" viewBox="0 0 2790 1794" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M381 477C349.302 547.286 334.342 614.13 332.255 677M1195 1357C1153.74 1352.73 1116.65 1347.75 1083 1342.24"
                    stroke="black" strokeLinecap="round"/>
                <path d="M1161 293C1245.34 328.343 1261 373 1385 393" stroke="black" strokeLinecap="round"/>
                <path d="M1161 293C985 193 500.059 213 381 477" stroke="black" strokeLinecap="round"/>
                <path d="M765 1249C845.462 1279.81 927.454 1316.74 1083 1342.24" stroke="black" strokeLinecap="round"/>
                <path d="M765 1249C609.387 1189.4 322.228 979.077 332.255 677" stroke="black" strokeLinecap="round"/>
                <path d="M1581 1333C1459 1349.42 1292.74 1367.11 1195 1357" stroke="black" strokeLinecap="round"/>
                <path d="M1581 1333C2016.15 1274.42 2577 849 2789 609" stroke="black" strokeLinecap="round"/>
                <path d="M1805 609C2141 561 2345 517 2509 329" stroke="black" strokeLinecap="round"/>
                <path d="M1805 609C1601 615.017 1504.07 578.97 1385 393" stroke="black" strokeLinecap="round"/>
                <path d="M1897 753C2305 633 2453 477 2509 329" stroke="black" strokeLinecap="round"/>
                <path d="M1385 393C1899.14 230.471 2109.23 143.488 2245 1" stroke="black" strokeLinecap="round"/>
                <path d="M1805 609C2115.83 378.184 2242.21 246.493 2245 1" stroke="black" strokeLinecap="round"/>
                <path d="M2721 561C2093 829 1677 777 1385 753" stroke="black" strokeLinecap="round"/>
                <path d="M381 477L1 677" stroke="black" strokeLinecap="round"/>
                <path d="M1 677H332.255" stroke="black" strokeLinecap="round"/>
                <path d="M1581 1697L1489 1793" stroke="black" strokeLinecap="round"/>
                <path d="M1581 1697L1677 1793" stroke="black" strokeLinecap="round"/>
                <path d="M1581 1333V1697" stroke="black" strokeLinecap="round"/>
                <path d="M1033 1697L893 1765" stroke="black" strokeLinecap="round"/>
                <path d="M1033 1697L1113 1793" stroke="black" strokeLinecap="round"/>
                <path d="M1033 1696.76L1058 1519.38L1083 1342" stroke="black" strokeLinecap="round"/>
                <path
                    d="M656 501C652.908 501.386 653.808 507 657 507C660.337 507 661 504.014 661 501.5C661 500.173 658.381 496.773 657 498.5C654.638 501.452 654 500.576 654 505"
                    stroke="black" strokeWidth="8" strokeLinecap="round"/>
            </svg>


            <svg ref={sectionTwoCloudRef} className={`section-two-cloud ${sectionTwoCloudInView ? 'section-two-cloud-animate' : ''}`} width="1653" height="403" viewBox="0 0 1653 403" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M133 393C219 417.571 300 371 381 307" stroke="black" strokeLinecap="round"/>
                <path d="M381 307C462 243 453 369 499 393" stroke="black" strokeLinecap="round"/>
                <path d="M499 393C545 417 593.138 393.243 775 307" stroke="black" strokeLinecap="round"/>
                <path d="M775 307C853 267 1039.89 270.694 1151 339" stroke="black" strokeLinecap="round"/>
                <path d="M1151 339C1200.8 375.558 1271.94 382.993 1337 368.527" stroke="black" strokeLinecap="round"/>
                <path d="M1499 225C1490.64 297.792 1418.6 350.385 1337 368.527" stroke="black" strokeLinecap="round"/>
                <path d="M1499 225C1601 267 1721 177 1603 81" stroke="black" strokeLinecap="round"/>
                <path d="M1603 81C1695 18 1551 -24.071 1367 18" stroke="black" strokeLinecap="round"/>
                <path d="M963 57C1017.77 87.7778 1113.62 75.9341 1367 18" stroke="black" strokeLinecap="round"/>
                <path d="M963 57C885 -3.00003 773.843 -10.9374 693 57" stroke="black" strokeLinecap="round"/>
                <path d="M693 56.9999C583 149.439 518.814 110.146 436 63.9999" stroke="black" strokeLinecap="round"/>
                <path d="M436 64C403.667 49 381 27 309 81" stroke="black" strokeLinecap="round"/>
                <path d="M309 81C279.667 103 257 103 187 103" stroke="black" strokeLinecap="round"/>
                <path d="M1 241C55.2561 238.906 21 361 133 393" stroke="black" strokeLinecap="round"/>
            </svg>


            <svg ref={sectionTwoCloudTwoRef} className={`section-two-cloud-two ${sectionTwoCloudTwoInView ? 'section-two-cloud-two-animate' : ''}`} width="1745" height="716" viewBox="0 0 1745 716" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M734 576C730.5 572.276 721.5 564.5 714 550" stroke="black" strokeLinecap="round"/>
                <path d="M1002 95.9998C1094 -44 1352 -18.0001 1430 95.9998" stroke="black" strokeLinecap="round"/>
                <path d="M1430 95.9998C1564 42 1658 148 1582 228" stroke="black" strokeLinecap="round"/>
                <path d="M1582 228C1778 228 1800 402 1630 428" stroke="black" strokeLinecap="round"/>
                <path d="M1630 428C1754 540 1458 686 1266 608" stroke="black" strokeLinecap="round"/>
                <path d="M1266 608C944 754 852.947 702.542 734 576" stroke="black" strokeLinecap="round"/>
                <path d="M734 576C718 730 562 738 546 608" stroke="black" strokeLinecap="round"/>
                <path d="M546 608C376 784 130 720 238 576" stroke="black" strokeLinecap="round"/>
                <path d="M238 576C-42 664 -111.593 394.138 238 252.535" stroke="black" strokeLinecap="round"/>
                <path d="M510 168C422 68 238 130 238 252.535" stroke="black" strokeLinecap="round"/>
                <path d="M510 168C610 7.99998 860 -2.28882e-05 1002 95.9998" stroke="black" strokeLinecap="round"/>
                <path d="M1086 506C1088 532 1126.8 568.4 1266 506" stroke="black" strokeLinecap="round"/>
                <path d="M1472 406C1488.67 433.333 1484 486 1332 478" stroke="black" strokeLinecap="round"/>
            </svg>


            <svg ref={lightningRef} className={`lightning ${lightningInView ? 'lightning-animate' : ''}`} width="170" height="390" viewBox="0 0 170 390" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M117.17 87.5538L169 1" stroke="black" strokeLinecap="round"/>
                <path d="M61.7659 1H169" stroke="black" strokeLinecap="round"/>
                <path d="M8.14893 112.426H61.7659" stroke="black" strokeLinecap="round"/>
                <path d="M61.7659 1C40.8272 44.5144 29.0877 68.9112 8.14893 112.426" stroke="black"
                      strokeLinecap="round"/>
                <path d="M61.7659 112.426L34.9574 174.108L8.14893 235.79" stroke="black" strokeLinecap="round"/>
                <path d="M8.14893 235.79H61.7659" stroke="black" strokeLinecap="round"/>
                <path d="M169 185.051H117.17" stroke="black" strokeLinecap="round"/>
                <path d="M1 389L169 185.051" stroke="black" strokeLinecap="round"/>
                <path d="M61.766 235.79L1 389" stroke="black" strokeLinecap="round"/>
                <path d="M117.17 185.051L169 87.5538" stroke="black" strokeLinecap="round"/>
                <path d="M117.25 87.5H169" stroke="black" strokeLinecap="round"/>
            </svg>


            <svg ref={lightningTwoRef} className={`lightning-two ${lightningTwoInView ? 'lightning-two-animate' : ''}`} width="144" height="354" viewBox="0 0 144 354" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M52.3617 214.005L1 353" stroke="black" strokeLinecap="round"/>
                <path d="M1 353L143 167.974" stroke="black" strokeLinecap="round"/>
                <path d="M143 167.974H121.096H99.1915" stroke="black" strokeLinecap="round"/>
                <path d="M7.04254 214.005H52.3617" stroke="black" strokeLinecap="round"/>
                <path d="M52.3617 102.087L7.04254 214.005" stroke="black" strokeLinecap="round"/>
                <path d="M7.04254 102.087H52.3617" stroke="black" strokeLinecap="round"/>
                <path d="M99.1915 167.974L143 79.5231" stroke="black" strokeLinecap="round"/>
                <path d="M143 79.5231H121.096H99.1915" stroke="black" strokeLinecap="round"/>
                <path d="M99.1915 79.5231L121.096 40.2615L143 1" stroke="black" strokeLinecap="round"/>
                <path d="M52.3617 1L7.04254 102.087" stroke="black" strokeLinecap="round"/>
                <path d="M52.3617 1H143" stroke="black" strokeLinecap="round"/>
            </svg>


            <svg ref={photographerStickmanRef} className={`photographer-stickman ${photographerStickmanInView ? 'photographer-stickman-animate' : ''}`} width="716" height="1512" viewBox="0 0 716 1512" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M301.753 155.365C309.144 157.532 329.056 160.565 349.58 155.365" stroke="black"
                      strokeLinecap="round"/>
                <path d="M352.236 177.365L350.908 166.365L349.58 155.365" stroke="black" strokeLinecap="round"/>
                <path d="M352.236 177.365H300.236" stroke="black" strokeLinecap="round"/>
                <path d="M300.236 177.365L301.753 155.365" stroke="black" strokeLinecap="round"/>
                <path d="M301.753 155.365C301.753 148.365 343.236 144.865 349.58 155.365" stroke="black"
                      strokeLinecap="round"/>
                <path d="M233.736 321.866C292.736 316.865 275.236 347.866 288.736 347.866" stroke="black"
                      strokeLinecap="round"/>
                <path d="M370.736 180.026C370.715 355.479 369.406 347.866 288.736 347.866" stroke="black"
                      strokeLinecap="round"/>
                <path d="M346.644 122.58C367.914 134.995 368.389 169.711 370.736 180.026" stroke="black"
                      strokeLinecap="round"/>
                <path d="M250.736 238.365C231.236 237.365 232.736 287.473 250.736 287.473" stroke="black"
                      strokeLinecap="round"/>
                <path d="M250.736 238.365C243.236 241.141 236.736 271.865 250.736 287.473" stroke="black"
                      strokeLinecap="round"/>
                <path d="M276.736 287.473H263.236C258.411 287.559 254.43 287.473 250.736 287.473" stroke="black"
                      strokeLinecap="round"/>
                <path d="M273.736 238.365H250.736" stroke="black" strokeLinecap="round"/>
                <path d="M353.736 301.365V233.365" stroke="black" strokeLinecap="round"/>
                <path d="M353.736 301.365C353.736 307.365 349.403 308.865 347.236 308.865H325.986" stroke="black"
                      strokeLinecap="round"/>
                <path d="M302.553 308.711C303.205 308.811 303.93 308.865 304.736 308.865H325.986" stroke="black"
                      strokeLinecap="round"/>
                <path
                    d="M296.736 233.365V299.865C296.736 300.442 296.718 301.131 296.748 301.865C296.736 306.365 297.236 307.894 302.553 308.711"
                    stroke="black" strokeLinecap="round"/>
                <path d="M326.486 222.865H346.736C352.236 222.865 353.736 223.865 353.736 228.865V233.365"
                      stroke="black" strokeLinecap="round"/>
                <path d="M296.736 233.365C296.736 229.865 296.736 222.365 306.236 222.865H326.486" stroke="black"
                      strokeLinecap="round"/>
                <path d="M296.736 233.365H326.425H353.736" stroke="black" strokeLinecap="round"/>
                <path d="M326.486 222.865L326.425 233.365L325.986 308.865" stroke="black" strokeLinecap="round"/>
                <path d="M374.237 153.865C380.68 153.865 384.293 153.865 390.737 153.865" stroke="black"
                      strokeLinecap="round"/>
                <path d="M374.237 161.865H390.737" stroke="black" strokeLinecap="round"/>
                <path d="M374.237 169.365H390.737" stroke="black" strokeLinecap="round"/>
                <path d="M370.736 180.026C400.236 183.365 397.5 167 397.736 160.865" stroke="black"
                      strokeLinecap="round"/>
                <path d="M385.236 130.865C395.736 129.881 397.736 144.865 397.736 160.865" stroke="black"
                      strokeLinecap="round"/>
                <path d="M346.644 122.58C358.611 127.344 370.202 132.275 385.236 130.865" stroke="black"
                      strokeLinecap="round"/>
                <path
                    d="M336.736 118.866C300.21 111.56 253.121 112.594 229.736 121.205C225.131 122.676 223.817 127.258 223.736 129.365"
                    stroke="black" strokeLinecap="round"/>
                <path d="M121.736 180.026C113.736 195.866 113.736 289.865 121.736 341.026" stroke="black"
                      strokeLinecap="round"/>
                <path
                    d="M233.736 195.866C236.956 185.402 234.733 164.569 228.736 156.841C224.735 156.022 223.736 151.849 223.736 149.865V129.365"
                    stroke="black" strokeLinecap="round"/>
                <path d="M233.736 195.866V321.866" stroke="black" strokeLinecap="round"/>
                <path d="M233.736 321.866L181.292 341.026H143.736M121.736 341.026H75.7356" stroke="black"
                      strokeLinecap="round"/>
                <path d="M233.736 195.866L181.292 180.026H139.236M121.736 180.026H74.2356" stroke="black"
                      strokeLinecap="round"/>
                <path d="M45.2928 180.026C-13.7644 147.365 -13.7641 376.365 45.2928 341.026" stroke="black"
                      strokeLinecap="round"/>
                <path d="M407.335 150.911C377.174 108.08 338.326 88.5289 283 113" stroke="black"
                      strokeLinecap="round"/>
                <path d="M407.335 150.911C435.29 190.61 455.781 250.309 475.01 313.491" stroke="black"
                      strokeLinecap="round"/>
                <path d="M475.01 313.491C493.532 374.349 510.883 438.439 532.606 491" stroke="black"
                      strokeLinecap="round"/>
                <path d="M529.703 529C416.106 681 415 349 295 349" stroke="black" strokeLinecap="round"/>
                <path d="M569 957C518.333 1063.67 521.2 1363.8 406 1511" stroke="black" strokeLinecap="round"/>
                <path d="M569 957C637 1029 658 1245 682 1511" stroke="black" strokeLinecap="round"/>
                <path d="M569 957C526 782 532.606 682 529.703 529" stroke="black" strokeLinecap="round"/>
                <path d="M529.703 529C530.495 516.008 531.473 503.325 532.606 491" stroke="black"
                      strokeLinecap="round"/>
                <path d="M558 337C548.165 374.827 538.373 428.28 532.606 491" stroke="black" strokeLinecap="round"/>
                <path
                    d="M407.335 150.911C419.873 73.3158 477.185 1.00024 558 1.00024C760 1.00031 773.505 351.611 558 337C524.409 334.723 496.936 326.287 475.01 313.491C416.123 279.124 397.252 213.31 407.335 150.911Z"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M126.736 180.026C120.236 205.865 121.736 315.365 129.236 341.026M126.736 180.026H121.736M126.736 180.026H139.236C133.736 250.365 135.236 280.365 143.736 341.026H129.236M129.236 341.026H121.736M44.7922 181.865C45.2912 179.677 44.8115 181.726 45.2928 180.026H74.2356C74.1622 180.618 74.0882 181.232 74.0139 181.865M44.7922 181.865H74.0139M44.7922 181.865C44.5755 182.816 44.3571 183.816 44.1378 184.865M74.0139 181.865C73.902 182.82 73.7893 183.821 73.6764 184.865M44.1378 184.865H73.6764M44.1378 184.865C43.8739 186.129 43.6089 187.463 43.3448 188.865M73.6764 184.865C73.5392 186.134 73.4017 187.469 73.2647 188.865M43.3448 188.865H73.2647M43.3448 188.865C43.1042 190.143 42.8644 191.477 42.6267 192.865M73.2647 188.865C73.1391 190.147 73.0139 191.481 72.8899 192.865M42.6267 192.865H72.8899M42.6267 192.865C42.4602 193.839 42.2947 194.839 42.1308 195.865M72.8899 192.865C72.8026 193.841 72.7159 194.841 72.63 195.865M42.1308 195.865H72.63M42.1308 195.865C41.8996 197.314 41.6715 198.815 41.448 200.365M72.63 195.865C72.5082 197.318 72.3882 198.819 72.2706 200.365M41.448 200.365H72.2706M41.448 200.365C41.1931 202.134 40.9441 203.969 40.7032 205.865M72.2706 200.365C72.1358 202.14 72.0042 203.974 71.877 205.865M40.7032 205.865H71.877M40.7032 205.865C40.4974 207.487 40.2974 209.154 40.1046 210.865M71.877 205.865C71.7677 207.491 71.6616 209.159 71.5595 210.865M40.1046 210.865H71.5595M40.1046 210.865C39.9392 212.333 39.7792 213.834 39.6253 215.365M71.5595 210.865C71.4715 212.337 71.3864 213.837 71.3047 215.365M39.6253 215.365H71.3047M39.6253 215.365C39.4613 216.997 39.3044 218.664 39.1553 220.365M71.3047 215.365C71.2172 217.001 71.1337 218.668 71.0546 220.365M39.1553 220.365H71.0546M39.1553 220.365C39.0262 221.84 38.903 223.34 38.7865 224.865M71.0546 220.365C70.9932 221.681 70.9346 223.015 70.8789 224.365M38.7865 224.865L70.8789 224.365M38.7865 224.865C38.6613 226.504 38.5438 228.171 38.4348 229.865M70.8789 224.365C70.8045 226.169 70.7353 228.003 70.6719 229.865M38.4348 229.865H70.6719M38.4348 229.865C38.3292 231.507 38.2315 233.174 38.1425 234.865M70.6719 229.865C70.6159 231.51 70.5645 233.178 70.5181 234.865M38.1425 234.865H70.5181M38.1425 234.865C38.0732 236.184 38.0091 237.517 37.9507 238.865M70.5181 234.865C70.4817 236.186 70.4484 237.52 70.4184 238.865M37.9507 238.865H70.4184M37.9507 238.865C37.8723 240.673 37.804 242.506 37.7467 244.365M70.4184 238.865C70.3779 240.677 70.3434 242.511 70.3152 244.365M37.7467 244.365H70.3152M37.7467 244.365C37.7009 245.85 37.6621 247.35 37.6307 248.865M70.3152 244.365C70.2926 245.853 70.2741 247.353 70.26 248.865M37.6307 248.865H70.26M37.6307 248.865C37.5931 250.677 37.5661 252.511 37.5504 254.365M70.26 248.865C70.243 250.682 70.2323 252.516 70.2284 254.365M37.5504 254.365H70.2284M37.5504 254.365C37.5364 256.016 37.5313 257.682 37.5357 259.365M70.2284 254.365C70.2248 256.02 70.2267 257.687 70.2343 259.365M37.5357 259.365H70.2343M37.5357 259.365C37.54 261.017 37.5534 262.684 37.5763 264.365M70.2343 259.365C70.2417 261.021 70.2547 262.688 70.2736 264.365M37.5763 264.365H70.2736M37.5763 264.365C37.5989 266.018 37.6307 267.685 37.6721 269.365M70.2736 264.365C70.2922 266.022 70.3166 267.689 70.3469 269.365M37.6721 269.365H70.3469M37.6721 269.365C37.7129 271.019 37.7631 272.686 37.8231 274.365M70.3469 269.365C70.439 274.456 70.5865 279.632 70.7975 284.865M37.8231 274.365H70.2284M37.8231 274.365C37.8822 276.02 37.9509 277.687 38.0294 279.365M38.0294 279.365H70.5981M38.0294 279.365C38.1146 281.185 38.2115 283.019 38.3205 284.865M38.3205 284.865H70.7975M38.3205 284.865C38.4183 286.522 38.526 288.188 38.6438 289.865M70.7975 284.865C70.8645 286.527 70.9379 288.194 71.0179 289.865M38.6438 289.865H71.0179M38.6438 289.865C38.7718 291.687 38.9118 293.521 39.0644 295.365M71.0179 289.865C71.1925 293.512 71.3987 297.181 71.6394 300.865M39.0644 295.365H71.3046M39.0644 295.365C39.2151 297.188 39.378 299.021 39.5537 300.865M39.5537 300.865H71.6394M39.5537 300.865C39.7273 302.689 39.9134 304.522 40.1124 306.365M71.6394 300.865C71.7589 302.696 71.8869 304.529 72.0238 306.365M40.1124 306.365H72.0238M40.1124 306.365C40.3271 308.355 40.5568 310.355 40.802 312.365M72.0238 306.365C72.1727 308.363 72.332 310.363 72.5022 312.365M40.802 312.365H72.5022M40.802 312.365C41.0649 314.52 41.3456 316.687 41.645 318.865M72.5022 312.365C72.6863 314.531 72.8831 316.698 73.0932 318.865M41.645 318.865H73.0932M41.645 318.865C41.964 321.187 42.3041 323.52 42.6662 325.865M73.0932 318.865C73.5138 323.204 73.9875 327.542 74.5187 331.865M42.6662 325.865H73.8188M42.6662 325.865C42.9737 327.857 43.2971 329.858 43.6369 331.865M43.6369 331.865H74.5187M43.6369 331.865C43.9461 333.693 44.2688 335.526 44.6056 337.365M74.5187 331.865C74.7443 333.702 74.9803 335.536 75.227 337.365M44.6056 337.365C44.8285 338.583 45.0575 339.803 45.2928 341.026H75.7356C75.5612 339.808 75.3917 338.587 75.227 337.365M44.6056 337.365H75.227M126.236 182.865H138.736M125.736 186.365H138.736M125.236 190.365H138.236M124.736 194.865H137.736M124.236 199.365H137.736M124.236 203.365H137.236M123.736 207.365H137.236M123.736 211.865H136.736M123.236 216.365H136.736M123.236 221.365H136.236M123.236 226.865H136.236M122.736 231.365H136.236M122.736 236.365H136.236M122.736 241.865H135.736M122.736 247.365H135.736M122.736 251.865H135.736M122.736 256.365H135.736M122.736 261.865H136.236M123.236 268.365H136.236M123.236 273.865H136.236M123.236 279.865H136.736M123.736 286.865H137.236M124.236 294.365H137.736M124.236 301.365H138.736M124.736 307.865H139.236M125.236 313.365H139.736M125.736 318.865H140.236M126.736 324.865H141.236M127.236 331.365H142.236M128.236 336.865H142.736M304.736 160.115C304.764 160.346 304.817 160.281 304.986 160.365M304.486 166.365V166.615M304.236 173.615C304.213 173.438 304.063 173.271 303.986 173.115M311.736 160.365V160.615M319.986 161.365V161.865M328.985 161.615C328.69 161.578 328.735 161.364 328.735 161.115M337.486 160.865V161.365M344.486 160.615V160.865M310.736 168.115V168.615M318.986 168.365C319.281 168.402 319.236 168.617 319.236 168.865M328.736 168.115C328.576 167.936 328.556 167.828 328.486 167.615M337.736 167.365V167.115M344.986 167.115V167.615M310.486 174.615H310.986M319.736 174.365H319.486M329.486 174.115H329.986M337.486 173.115H337.986M344.486 173.365H344.986"
                    stroke="black" strokeLinecap="round"/>
                <path d="M336.5 118.8L346.644 122.58" stroke="black" strokeLinecap="round"/>
            </svg>


            <svg ref={cowRef} className={`cow ${cowInView ? 'cow-animate' : ''}`} width="2276" height="1743" viewBox="0 0 2276 1743" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M729 1144C749.473 1199.92 785.916 1237.76 749.473 1144" stroke="black" strokeLinecap="round"/>
                <path d="M674.697 1144C667.281 1194.28 686.232 1242.05 692 1144" stroke="black" strokeLinecap="round"/>
                <path d="M645.803 1134C632.448 1186.83 638.709 1229.99 665 1144.62" stroke="black"
                      strokeLinecap="round"/>
                <path d="M549.03 1054C545.597 1208.57 841 1245.14 841 1054" stroke="black" strokeLinecap="round"/>
                <path
                    d="M1532.66 413C1500.69 358.746 1485.3 308.606 1482.48 263.66C1479.43 215.112 1491.06 172.622 1512.3 137.55C1522.82 120.191 1535.69 104.649 1550.31 91.0889C1566.81 75.7865 1585.53 63.0081 1605.59 52.9905C1670.5 20.5853 1749.49 17.0696 1812.79 50.4606C1831.93 60.556 1843.75 66.5579 1859.2 83.6219C1867.31 92.5771 1880.68 109.989 1887.43 120.957C1903.04 146.329 1914.69 183.808 1920.91 220.517C1929.97 274.019 1927.5 333.346 1908.93 413"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M1483 412.415C924.308 415.105 564.464 396.72 493.135 412.415C467.008 418.163 439.638 426.648 416 441"
                    stroke="black" strokeLinecap="round"/>
                <path d="M1813 50C1886.98 37.9385 1893.91 30.8828 1951 1" stroke="black" strokeLinecap="round"/>
                <path d="M1951 1C1920.16 40.8232 1922.66 39.5657 1859 84" stroke="black" strokeLinecap="round"/>
                <path d="M1550 91C1495.73 60.5833 1485.58 57.5495 1445 1" stroke="black" strokeLinecap="round"/>
                <path d="M1445 1C1492.3 28.223 1535.87 37.8558 1606 53" stroke="black" strokeLinecap="round"/>
                <path d="M1533 413C1598.7 388.852 1765.89 355.045 1909 413" stroke="black" strokeLinecap="round"/>
                <path d="M1532.45 413C1405.03 657.704 2021.03 733.761 1908.1 413" stroke="black"
                      strokeLinecap="round"/>
                <path
                    d="M1512 137.971C1449.65 136.041 1150.69 47.3879 1132.44 121.502C1114.18 195.615 1271.84 347.642 1482.14 263.141"
                    stroke="black" strokeLinecap="round"/>
                <path d="M1606 1083C1695.85 1056.45 2150.5 911.672 1921 348" stroke="black" strokeLinecap="round"/>
                <path d="M1577.4 1540C1569.11 1638.93 1693.49 1691.69 1666.03 1540" stroke="black"
                      strokeLinecap="round"/>
                <path d="M1578 1540H1666" stroke="black" strokeLinecap="round"/>
                <path d="M1650 1068C1661.91 1389.05 1666 1402.28 1666 1540" stroke="black" strokeLinecap="round"/>
                <path d="M1541 1152C1563.79 1326.65 1564.55 1415.64 1578 1540" stroke="black" strokeLinecap="round"/>
                <path d="M1412 1599C1412 1738.35 1512 1715.12 1512 1599" stroke="black" strokeLinecap="round"/>
                <path d="M1412 1599H1512" stroke="black" strokeLinecap="round"/>
                <path d="M1510 1035C1523.58 1345.39 1522.12 1487.22 1512.83 1599" stroke="black"
                      strokeLinecap="round"/>
                <path d="M1387 1016C1387 1287.62 1404.45 1469.81 1412 1599" stroke="black" strokeLinecap="round"/>
                <path d="M634 994C740.15 1034.8 1039.36 1110.12 1387 1084.98" stroke="black" strokeLinecap="round"/>
                <path d="M669 1603C669 1731.04 846.535 1749.33 775.022 1603" stroke="black" strokeLinecap="round"/>
                <path d="M666 1595H712.617H779" stroke="black" strokeLinecap="round"/>
                <path d="M775 1174C775 1298.35 788.5 1526.29 775 1603" stroke="black" strokeLinecap="round"/>
                <path d="M665.132 1292C669.567 1376.39 660.052 1532.18 669 1603" stroke="black" strokeLinecap="round"/>
                <path d="M503 1646C503 1785.35 629.165 1762.12 619.468 1646" stroke="black" strokeLinecap="round"/>
                <path d="M503 1646H619" stroke="black" strokeLinecap="round"/>
                <path d="M619 1185C619 1385.35 619 1537.07 619 1646" stroke="black" strokeLinecap="round"/>
                <path d="M493 1185C503 1412.58 503 1552.63 503 1646" stroke="black" strokeLinecap="round"/>
                <path d="M493 1192C485.717 1019.64 366.923 1016.16 304 910" stroke="black" strokeLinecap="round"/>
                <path d="M304.265 910C219.843 767.477 221.16 557.836 416 441" stroke="black" strokeLinecap="round"/>
                <path d="M416 441C311.1 452.037 100.38 588.007 42 984" stroke="black" strokeLinecap="round"/>
                <path
                    d="M28 984.574C62.8181 980.613 100.296 997.025 78.569 1037.7C59.5021 1073.39 56.1862 1106.59 51.2118 1129"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M1643.51 515.438C1642.38 524.162 1632.28 514.104 1638.63 512.348C1648.26 509.683 1640.13 523.449 1640.13 515.438C1640.13 509.295 1648.59 516.085 1645.2 518.71C1637.66 524.548 1634.62 513.457 1638.63 512.348C1644.3 510.778 1646.34 522.527 1636.75 521.982C1631.3 521.671 1631.78 510.559 1638.25 512.348C1641.92 513.363 1646.87 521.982 1640.13 521.982C1634.14 521.982 1631.39 515.438 1640.13 515.438"
                    stroke="black" strokeWidth="8" strokeLinecap="round"/>
                <path
                    d="M1793.28 512C1799.28 512.779 1795.85 522.931 1794 521.444C1789.68 517.952 1789.85 511.373 1796.55 514.644C1807.85 520.164 1790 537.069 1790 520.5C1790 503.59 1811.05 529 1794.91 529C1787.31 529 1791.44 508.19 1799.83 525.6"
                    stroke="black" strokeWidth="8" strokeLinecap="round"/>
                <path d="M1697 107C1707.98 119.333 1726.64 151.4 1713.47 181" stroke="black" strokeLinecap="round"/>
                <path d="M1650 105C1655.67 115.091 1667 144.018 1667 179" stroke="black" strokeLinecap="round"/>
                <path
                    d="M1607.42 262.863C1607.86 259.133 1613.84 264.187 1613.84 267.096C1613.84 270.434 1608.86 273.221 1606.17 270.952C1597.88 263.964 1611.1 255.692 1613.76 265.497C1616.28 274.794 1598.37 271.649 1603.85 265.873C1604.86 264.802 1612.38 263.314 1611.97 265.685C1611.42 268.885 1606.38 277.16 1602.6 272.174C1596.43 264.052 1609.02 259.36 1609.02 267.096C1609.02 280.262 1595.77 276.307 1599.74 267.942C1604.05 258.873 1614.38 265.532 1612.15 273.773C1609.57 283.273 1599.38 274.736 1599.38 267.942"
                    stroke="black" strokeWidth="8" strokeLinecap="round"/>
                <path
                    d="M1804.28 257.987C1804.28 249.578 1816.57 262.249 1805.13 264.844C1796.92 266.707 1795.31 251.264 1799.17 251.033C1813.28 250.186 1801.76 266.068 1797.47 260.594C1792.81 254.649 1799.33 249.062 1803.9 254.896C1810.09 262.799 1786.27 261.568 1794.91 254.51C1799.05 251.132 1806.48 253.592 1807.68 259.725C1808.24 262.568 1802.45 263.838 1800.87 264.554C1795.39 267.039 1789.53 254.51 1803.33 254.51C1813.72 254.51 1804.18 269.96 1800.87 263.202"
                    stroke="black" strokeWidth="8" strokeLinecap="round"/>
                <path d="M27.0731 985C3.05441 987.759 -25.9864 1020.42 50 1129" stroke="black" strokeLinecap="round"/>
                <path d="M1735 108C1740.67 114.727 1752 138.945 1752 182" stroke="black" strokeLinecap="round"/>
                <path d="M1888 120.596C1985.42 110.959 2161 11 2250.37 11C2339.73 11 2175.9 313.219 1921.42 220.228"
                      stroke="black" strokeLinecap="round"/>
                <path d="M769 1137.66C781.469 1172.11 842.153 1234.03 781.469 1127" stroke="black"
                      strokeLinecap="round"/>
            </svg>


            <svg ref={horseRef} className={`horse ${horseInView ? 'horse-animate' : ''}`} width="2850" height="1879" viewBox="0 0 2850 1879" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M1553 548.312C1358.99 566.896 1035.67 522.459 810 548.312" stroke="black"
                      strokeLinecap="round"/>
                <path d="M1553 548C1682.03 522.518 1816.65 524.526 1867 449" stroke="black" strokeLinecap="round"/>
                <path d="M1867 449C1928.73 356 1980.17 323.967 2007.13 302.267C2028.83 289.867 2078.57 267.133 2109 263"
                      stroke="black" strokeLinecap="round"/>
                <path d="M2123 302C2119.55 279.041 2111.82 286.952 2109 263" stroke="black" strokeLinecap="round"/>
                <path d="M2300 273C2257.29 43.7337 2424 -202.694 2424 273" stroke="black" strokeLinecap="round"/>
                <path
                    d="M2300 273C2230.47 -102.604 2109.5 -32.4366 2109.5 188.386C2110.78 202.383 2107.9 248.534 2109.5 262.681"
                    stroke="black" strokeLinecap="round"/>
                <path d="M2430 284C2471.4 280.566 2554.2 255.564 2637 216" stroke="black" strokeLinecap="round"/>
                <path d="M2453 290C2527.92 283.077 2654.67 257.6 2719 236" stroke="black" strokeLinecap="round"/>
                <path d="M2701 381C2601.78 327.178 2494.28 267.838 2424 273.358" stroke="black" strokeLinecap="round"/>
                <path d="M2651 657.243C2853.54 760.319 2948.61 381 2700.6 381" stroke="black" strokeLinecap="round"/>
                <path d="M2650.99 657C2604.31 485.633 2671.83 433.179 2701 381" stroke="black" strokeLinecap="round"/>
                <path d="M2122.55 302C2134.03 382.743 2101.93 457.304 2092 508" stroke="black" strokeLinecap="round"/>
                <path d="M2424 644.959C2537.5 614.853 2547.82 621.878 2651 657" stroke="black" strokeLinecap="round"/>
                <path d="M2424 645.184C2310.65 676.129 2046.84 735.952 2092.19 508" stroke="black"
                      strokeLinecap="round"/>
                <path d="M1929 1186C2010.13 1161.22 2300.25 1033.2 2424 645" stroke="black" strokeLinecap="round"/>
                <path
                    d="M1764 1185.63C1453.43 1255.12 1114.23 1214.58 983.455 1185.63C961.773 1180.83 885.37 1169.08 810 1104"
                    stroke="black" strokeLinecap="round"/>
                <path d="M1976 1673H2042.5H2109" stroke="black" strokeLinecap="round"/>
                <path d="M2067 1120C2102.83 1395.52 2109.25 1569.78 2108.99 1673" stroke="black"
                      strokeLinecap="round"/>
                <path d="M1929 1186C1946.71 1311.2 1976 1569.82 1976 1673" stroke="black" strokeLinecap="round"/>
                <path d="M1976 1673C1976 1891.39 2159.32 1813.1 2109.38 1673" stroke="black" strokeLinecap="round"/>
                <path d="M1784 1706C1784 1865.42 1976.94 1913.04 1940.39 1706" stroke="black" strokeLinecap="round"/>
                <path d="M1784 1706H1940" stroke="black" strokeLinecap="round"/>
                <path d="M1929 1186C1929 1368.62 1945.24 1623.46 1939.93 1706" stroke="black" strokeLinecap="round"/>
                <path d="M1764 1186C1770.35 1315.24 1784 1602.83 1784 1706" stroke="black" strokeLinecap="round"/>
                <path d="M670 1728H740H810" stroke="black" strokeLinecap="round"/>
                <path d="M849 1674L908.785 1673L983 1674" stroke="black" strokeLinecap="round"/>
                <path d="M849 1674C849 1895.7 1040.94 1833.83 983.153 1674" stroke="black" strokeLinecap="round"/>
                <path d="M822 1186C828.155 1315.35 834.017 1572.78 849 1674" stroke="black" strokeLinecap="round"/>
                <path d="M983 1186C967.25 1362.07 983 1587.34 983 1674" stroke="black" strokeLinecap="round"/>
                <path d="M670.169 1728C651.444 1896.54 864.612 1957.17 810.033 1728" stroke="black"
                      strokeLinecap="round"/>
                <path d="M822 1186C798.377 1358.64 809.724 1641.28 809.724 1728" stroke="black" strokeLinecap="round"/>
                <path d="M682 1186C668.637 1331.06 665.207 1631.94 670.15 1728" stroke="black" strokeLinecap="round"/>
                <path d="M653 699C541.484 729.277 147.462 1173.8 182.155 1405" stroke="black" strokeLinecap="round"/>
                <path d="M653 688C512.743 734.054 122.912 1156.01 135.288 1405" stroke="black" strokeLinecap="round"/>
                <path d="M653 674C529.937 685.013 118.4 1105.99 92 1405" stroke="black" strokeLinecap="round"/>
                <path d="M653 666C495.073 695.587 88.3847 1059.24 44 1405" stroke="black" strokeLinecap="round"/>
                <path d="M653 657C530.234 687.994 20.6013 976.243 1 1405" stroke="black" strokeLinecap="round"/>
                <path d="M1897 407C1845.31 439.672 1675.29 542.762 1545 570" stroke="black" strokeLinecap="round"/>
                <path d="M1928 371C1897.08 390.987 1735.06 482.377 1563 532" stroke="black" strokeLinecap="round"/>
                <path d="M1950 350C1890.88 374.094 1670.52 471.522 1578 493" stroke="black" strokeLinecap="round"/>
                <path d="M1997 310C1970.86 329.957 1768.28 433.971 1590 457" stroke="black" strokeLinecap="round"/>
                <path
                    d="M2781.96 515.843C2781.96 513.936 2783.11 513.458 2783.93 515.626C2784.57 517.314 2781.63 517.072 2782.21 515.843C2784.64 510.642 2788.35 517.794 2784.73 517.794C2781.25 517.794 2783.67 513.023 2785.84 513.023C2789.06 513.023 2786.47 520.361 2783.31 517.577C2781.15 515.67 2787.5 511.405 2787.5 516.818C2787.5 519.796 2782.63 520.978 2782.02 517.74C2781.16 513.17 2788.38 511.085 2788.6 514.867C2788.95 520.632 2781.96 518.935 2781.96 513.511C2781.96 510.284 2788.6 509.756 2788.6 514.379C2788.6 518.629 2779.99 518.359 2781.1 515.843C2783.49 510.432 2791.27 513.762 2788.36 519.746C2786.14 524.303 2783.12 514.975 2786.94 514.975C2788.9 514.975 2788.34 521.462 2783.62 517.306C2779.22 513.424 2787.5 512.746 2787.5 515.843C2787.5 517.88 2784.82 515.611 2784.42 514.867C2783.43 513.007 2786.98 515.207 2784.67 515.788C2783.82 516.001 2784.17 512.739 2784.17 513.511C2784.17 515.197 2786.24 514.735 2785.28 513.891"
                    stroke="black" strokeWidth="8" strokeLinecap="round"/>
                <path
                    d="M2425.55 386.876C2424.18 386.501 2425.76 384.333 2426.61 385.351C2427.86 386.859 2428.99 387.75 2428.66 389.926C2428.12 393.576 2423.43 391.388 2424.72 388.91C2427.12 384.298 2428.52 391.847 2426.02 391.847C2422.85 391.847 2421.95 385.002 2426.61 386.085C2431.96 387.333 2429.79 393.538 2425.02 393.937C2417.01 394.606 2413.39 380.82 2422.14 384.052C2426.98 385.839 2424.91 393.177 2420.31 391.339C2412.49 388.207 2413.32 378.072 2423.37 380.323C2445.32 385.243 2403.8 398.042 2415.08 385.407C2417.74 382.421 2428.72 381.009 2428.72 387.102C2428.72 392.054 2422.49 391.863 2422.49 386.819C2422.49 382.545 2426.55 376.739 2429.55 382.809C2432.58 388.96 2419.56 392.402 2415.67 391.903C2414.02 391.692 2412.47 389.064 2412.02 387.667C2410.44 382.785 2413.96 382.555 2418.02 382.018C2423.96 381.231 2425.32 387.064 2422.14 390.943C2417.69 396.366 2414.02 390.884 2417.19 386.311C2420.5 381.553 2427.97 380.432 2427.66 387.667C2427.54 390.72 2419.61 388.159 2419.25 385.746C2418.68 381.899 2425.62 378.134 2427.43 381.792C2430.86 388.756 2422.11 394.374 2416.08 394.954C2410.63 395.477 2409.05 390.156 2413.9 387.893C2417.52 386.205 2422.78 390.416 2419.72 393.937C2417.35 396.667 2415.52 389.729 2416.19 387.78C2418.64 380.722 2424.62 382.456 2427.66 387.102C2430.79 391.872 2422.59 398.76 2419.78 394.841C2417.46 391.597 2416.11 381.792 2422.37 381.792C2427.33 381.792 2422.73 390.957 2420.78 392.412C2415.87 396.084 2414.87 387.48 2414.96 385.068C2415.1 381.07 2421.36 379.159 2423.9 382.3C2429.38 389.068 2407.95 393.925 2414.96 383.826"
                    stroke="black" strokeWidth="8" strokeLinecap="round"/>
                <path d="M682.107 1186C269.548 1018.76 539.774 578.971 810 548" stroke="black" strokeLinecap="round"/>
                <path d="M1872 441C1829.38 484.874 1689.98 598 1528 598" stroke="black" strokeLinecap="round"/>
            </svg>


            <svg className={"grass"} width="18566" height="1200" viewBox="0 0 18566 1200" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M18269 927C18368.1 863.832 18428.1 836.129 18565 839" stroke="black" strokeLinecap="round"/>
                <path d="M18357 839C18304 865 18275 899 18269 927" stroke="black" strokeLinecap="round"/>
                <path d="M18037 927C18149.5 871.051 18219.1 850.961 18357 839" stroke="black" strokeLinecap="round"/>
                <path d="M18109 839C18062 859 18037 894 18037 927" stroke="black" strokeLinecap="round"/>
                <path d="M17765 894C17863 847 18011 822 18109 839" stroke="black" strokeLinecap="round"/>
                <path d="M17981 687C17876 746 17810 802 17765 894" stroke="black" strokeLinecap="round"/>
                <path d="M17473 816C17570 721 17820 660 17981 687" stroke="black" strokeLinecap="round"/>
                <path d="M17701 415C17569 496 17410.2 693.54 17473 816" stroke="black" strokeLinecap="round"/>
                <path d="M17301 839C17352 665 17538 470 17701 415" stroke="black" strokeLinecap="round"/>
                <path d="M17029 495C17136.1 590.548 17196 649.557 17301 839" stroke="black" strokeLinecap="round"/>
                <path d="M17125 927C17143.7 752.662 17110.3 659.315 17029 495" stroke="black" strokeLinecap="round"/>
                <path d="M16877 759C16991.8 789.626 17045.9 826.85 17125 927" stroke="black" strokeLinecap="round"/>
                <path d="M16943 975C16962.1 884.553 16934.8 839.008 16877 759" stroke="black" strokeLinecap="round"/>
                <path d="M15653 975H16825" stroke="black" strokeLinecap="round"/>
                <path d="M15693 839C15553 839 15438 975 15653 975" stroke="black" strokeLinecap="round"/>
                <path d="M15461 887C15555.3 838.347 15605.9 829.936 15693 839" stroke="black" strokeLinecap="round"/>
                <path d="M15461 687C15454 769.753 15450.9 815.64 15461 887" stroke="black" strokeLinecap="round"/>
                <path d="M15325 975C15394.3 873.815 15420.4 808.205 15461 687" stroke="black" strokeLinecap="round"/>
                <path d="M15109 759C15201 814.411 15246.7 867.612 15325 975" stroke="black" strokeLinecap="round"/>
                <path d="M15157 927C15156.8 855.627 15141.4 820.369 15109 759" stroke="black" strokeLinecap="round"/>
                <path d="M14853 687C14950.2 711.695 15013 752.058 15157 927" stroke="black" strokeLinecap="round"/>
                <path d="M14949 1047C14999 927 14935 790 14853 687" stroke="black" strokeLinecap="round"/>
                <path d="M14685 927.425C14773.5 922.404 14835 961.8 14949 1047.43" stroke="black"
                      strokeLinecap="round"/>
                <path d="M14733 1047C14726.7 1000.31 14717.2 974.057 14685 927" stroke="black" strokeLinecap="round"/>
                <path d="M14413 927C14532.2 917.396 14603.2 953.024 14733 1047" stroke="black" strokeLinecap="round"/>
                <path d="M14461 1047C14481 1011 14461 961 14413 927" stroke="black" strokeLinecap="round"/>
                <path d="M14005 1047H14461" stroke="black" strokeLinecap="round"/>
                <path d="M14083 733C13948 850.231 13859 1047 14005 1047" stroke="black" strokeLinecap="round"/>
                <path d="M13813 887C13908 781.45 13971 745 14083 733" stroke="black" strokeLinecap="round"/>
                <path d="M13721 629C13791 687 13829 777 13813 887" stroke="black" strokeLinecap="round"/>
                <path d="M13661 887C13763.7 836.634 13745 705 13721 629" stroke="black" strokeLinecap="round"/>
                <path d="M13661 777V832V887" stroke="black" strokeLinecap="round"/>
                <path d="M13589 839L13622 810L13661 777" stroke="black" strokeLinecap="round"/>
                <path d="M13365 687C13453 687 13559 759 13589 839" stroke="black" strokeLinecap="round"/>
                <path d="M13493 1047C13527 975 13477 823 13365 687" stroke="black" strokeLinecap="round"/>
                <path d="M13109 887C13253.7 911.285 13338.4 950.907 13493 1047" stroke="black" strokeLinecap="round"/>
                <path d="M13173 975C13172.2 960.233 13153.5 941.577 13109 887" stroke="black" strokeLinecap="round"/>
                <path d="M12821 927C12956.4 928.759 13033.4 938.44 13173 975" stroke="black" strokeLinecap="round"/>
                <path d="M13021 1047C13001.4 1017.14 12955.2 990.37 12821 927" stroke="black" strokeLinecap="round"/>
                <path d="M12549 1047H13021" stroke="black" strokeLinecap="round"/>
                <path
                    d="M12055 321C11988 303 11933 351 11977 421C11901 421 11902 528 11977 543C11929 600 11993 630.315 12041 589C12041 635 12096 658 12135 613C12135 667 12243 630.315 12211 589C12259 630.315 12331 564 12277 523C12354 523 12363 435 12293 435C12364 404 12319 334 12259 351C12277 294 12223 256 12173 303C12135 256 12055 263 12055 321Z"
                    stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12117 1087C12098.3 1007 12069.2 803.115 12114 630.315" stroke="black" strokeLinecap="round"/>
                <path d="M11571 985C11535.6 1022.1 11517.8 1043.67 11499 1087" stroke="black" strokeLinecap="round"/>
                <path d="M11315 1087C11428.4 1026.09 11485.5 1002.06 11571 985" stroke="black" strokeLinecap="round"/>
                <path d="M11403 985C11357 1026.13 11336.7 1048.58 11315 1087" stroke="black" strokeLinecap="round"/>
                <path d="M11127 1087C11249.9 1028.4 11307.8 1009.14 11403 985" stroke="black" strokeLinecap="round"/>
                <path d="M10989 1087C11106.7 1017.62 11159.6 992.783 11229 975" stroke="black" strokeLinecap="round"/>
                <path d="M11067 975C11024.1 1016.7 11007.9 1041.36 10989 1087" stroke="black" strokeLinecap="round"/>
                <path d="M10853 1047C10987.9 991.374 11039.6 972.993 11067 975" stroke="black" strokeLinecap="round"/>
                <path d="M10951 947C10895.5 977.491 10876.3 1000.54 10853 1047" stroke="black" strokeLinecap="round"/>
                <path d="M10789 975C10853.5 950.26 10889.2 942.332 10951 947" stroke="black" strokeLinecap="round"/>
                <path d="M11003 617C10853 685 10689 907 10789 975" stroke="black" strokeLinecap="round"/>
                <path d="M10429 927C10575 747 10767 643 11003 617" stroke="black" strokeLinecap="round"/>
                <path d="M10597 519C10470.8 663.189 10434.9 752.715 10429 927" stroke="black" strokeLinecap="round"/>
                <path d="M10133 927C10205 715 10353 575 10597 519" stroke="black" strokeLinecap="round"/>
                <path d="M9789 559C9983.35 671.217 10062.5 749.793 10133 927" stroke="black" strokeLinecap="round"/>
                <path d="M9917 1087C9949 927 9897 741 9789 559" stroke="black" strokeLinecap="round"/>
                <path d="M9669 759C9794.49 806.695 9851.34 871.346 9917 1087" stroke="black" strokeLinecap="round"/>
                <path d="M9725 1087C9767 1007 9740.07 853 9669 759" stroke="black" strokeLinecap="round"/>
                <path d="M9501 887C9593 903 9669 965 9725 1087" stroke="black" strokeLinecap="round"/>
                <path d="M9565 1087C9585 1033 9565 965 9501 887" stroke="black" strokeLinecap="round"/>
                <path d="M8821 1087H9565" stroke="black" strokeLinecap="round"/>
                <path d="M8821 927C8853 969 8849 1049 8821 1087" stroke="black" strokeLinecap="round"/>
                <path d="M8685 1087C8758.35 1038.73 8787.37 1001.59 8821 927" stroke="black" strokeLinecap="round"/>
                <path d="M8685 839C8733 899 8743 1011 8685 1087" stroke="black" strokeLinecap="round"/>
                <path d="M8525 1087C8618.37 1015.68 8647.11 956.175 8685 839" stroke="black" strokeLinecap="round"/>
                <path d="M8293 839L8525 1087" stroke="black" strokeLinecap="round"/>
                <path d="M8293 1087C8353 1025 8337 927 8293 839" stroke="black" strokeLinecap="round"/>
                <path d="M7669 1087H8293" stroke="black" strokeLinecap="round"/>
                <path d="M7733 839C7694.02 935.444 7677.52 989.671 7669 1087" stroke="black" strokeLinecap="round"/>
                <path d="M7533 927L7733 839" stroke="black" strokeLinecap="round"/>
                <path d="M7533 759V927" stroke="black" strokeLinecap="round"/>
                <path d="M7213 1087C7323.09 914.425 7393.45 843.498 7533 759" stroke="black" strokeLinecap="round"/>
                <path d="M7013 687C7133.43 823.324 7181.52 908.883 7213 1087" stroke="black" strokeLinecap="round"/>
                <path d="M7069 1135C7075.48 989.219 7065.64 893.621 7013 687" stroke="black" strokeLinecap="round"/>
                <path d="M6717 519C6883.47 713.548 6964.6 841.975 7069 1135" stroke="black" strokeLinecap="round"/>
                <path d="M6837 1135C6832.6 941.447 6801.9 801.674 6717 519" stroke="black" strokeLinecap="round"/>
                <path d="M6477 799C6618.64 884.089 6697.35 962.654 6837 1135" stroke="black" strokeLinecap="round"/>
                <path d="M6597 1135C6585.68 1019.74 6556.61 944.916 6477 799" stroke="black" strokeLinecap="round"/>
                <path d="M6317 887C6434.26 943.038 6494.99 1000.32 6597 1135" stroke="black" strokeLinecap="round"/>
                <path d="M6437 1135C6423.04 1054.63 6392.79 998.34 6317 887" stroke="black" strokeLinecap="round"/>
                <path d="M6037 927C6209.66 943.01 6296.53 991.375 6437 1135" stroke="black" strokeLinecap="round"/>
                <path d="M6229 1199C6154.02 1092.78 6111.98 1033.22 6037 927" stroke="black" strokeLinecap="round"/>
                <path d="M2734 1078C2847.24 994.978 2904.93 938.281 2990 806V942V1078" stroke="black"
                      strokeLinecap="round"/>
                <path d="M1097 1046C1066.2 848.781 1027.93 707.284 921 398C1152.06 576.541 1293 742 1401 974"
                      stroke="black" strokeLinecap="round"/>
                <path d="M137 1046C130.986 817.177 92.3671 677.759 1 422C308.408 566.48 457 758 529 1046" stroke="black"
                      strokeLinecap="round"/>
                <path
                    d="M1550.52 539.115C1600.52 634.115 1742.52 576.115 1684.52 471.115C1771.52 560.115 1867.52 439.115 1730.52 397.115C1849.52 429.115 1900.52 281.115 1742.52 281.115C1812.52 268.115 1817.52 153.115 1718.52 207.115C1833.52 153.115 1752.52 67.1146 1684.52 105.115C1713.52 61.1146 1660.52 10.1146 1600.52 61.1146C1593.52 -25.8857 1492.52 -11.8856 1502.52 61.1146C1458.52 -24.8857 1335.52 33.1143 1412.52 127.115C1349.52 61.1146 1254.52 175.114 1372.52 197.115C1258.52 169.114 1286.52 281.115 1354.52 281.115C1260.52 269.114 1297.52 358.114 1354.52 339.115C1219.52 368.114 1277.52 481.114 1372.52 429.115C1286.52 476.188 1354.52 593.114 1434.52 519.115C1372.52 611.115 1536.52 644.115 1550.52 539.115Z"
                    stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path
                    d="M1536.52 233.115C1446.52 233.115 1426.52 387.115 1536.52 397.115C1646.52 407.115 1658.52 233.115 1536.52 233.115Z"
                    stroke="black" strokeLinecap="round"/>
                <path d="M1492.52 1199.11C1552.52 1079.11 1590.52 657.115 1550.52 539.115" stroke="black"
                      strokeLinecap="round"/>
                <path d="M12135 421C12059 421 12055 523 12135 523C12215 523 12211 421 12135 421Z" stroke="black"
                      strokeLinecap="round"/>
                <path d="M18565 839C18489.1 864.789 18461 908 18461 927" stroke="black" strokeLinecap="round"/>
                <path d="M11229 975C11206 993 11189.1 1003 11167.5 1025C11145.9 1047 11139.1 1058.74 11127 1087"
                      stroke="black" strokeLinecap="round"/>
            </svg>


        </section>
    );
}
