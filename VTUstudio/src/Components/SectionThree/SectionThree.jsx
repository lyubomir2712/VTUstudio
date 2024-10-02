import {motion} from "framer-motion";
import "./SectionThree.css"
import MonaLisaPaintingImg from "../../assets/Images/SectionThree/MonaLisa.png";
import GreenButterflyImg from "../../assets/Images/SectionThree/greenButterfly.png";
import shadow from '../../assets/Images/Main/Shadow.png'
import {useInView} from "react-intersection-observer";
import {useEffect, useState} from "react";

function SectionThree() {

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


    const { ref: sectionThreeBorderRef, inView: sectionThreeBorderInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: painterStickmanRef, inView: painterStickmanInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionThreeCloudRef, inView: sectionThreeCloudInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionThreeCloudTwoRef, inView: sectionThreeCloudTwoInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionThreeBirdRef, inView: sectionThreeBirdInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionThreeBirdTwoRef, inView: sectionThreeBirdTwoInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionThreeMiniCloudRef, inView: sectionThreeMiniCloudInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sectionThreeMiniCloudTwoRef, inView: sectionThreeMiniCloudTwoInView } = useInView({ triggerOnce: false, threshold: 0.1 });


    return (
        <section id="sectionThree">
            <svg ref={sectionThreeCloudRef}
                 className={`section-three-cloud ${sectionThreeCloudInView ? 'section-three-cloud-animate' : ''}`}
                 width="572" height="270" viewBox="0 0 572 270" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M190 178C186.667 197 194.4 228 252 200" stroke="black"/>
                <path d="M71 178C-15 200 -24 98 59 98" stroke="black"/>
                <path d="M71 178C22.6266 273.962 102 292 257 238" stroke="black"/>
                <path d="M442 200C338 284 275 284 257 238" stroke="black"/>
                <path d="M541 105C599 133 566 238 442 200" stroke="black"/>
                <path d="M442 32C541 -9 616 32 541 105" stroke="black"/>
                <path d="M225 51C343 -18 415.63 -7.21112 442 32" stroke="black"/>
                <path d="M59 98C59 32 159 -7.00002 225 51" stroke="black"/>
            </svg>

            <svg ref={sectionThreeMiniCloudRef}
                 className={`section-three-mini-cloud ${sectionThreeMiniCloudInView ? 'section-three-mini-cloud-animate' : ''}`}
                 width="235" height="103" viewBox="0 0 235 103" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99998 102H220" stroke="black" strokeLinecap="round"/>
                <path d="M3.99999 102C-14.4 42 51 21 77 54.5" stroke="black" strokeLinecap="round"/>
                <path d="M220 102C261 66 204.5 3.49999 160.5 54.5" stroke="black" strokeLinecap="round"/>
                <path d="M166 49C181.5 -5.00001 68 -27 73 56" stroke="black" strokeLinecap="round"/>
            </svg>

            <svg ref={sectionThreeMiniCloudTwoRef}
                 className={`section-three-mini-cloud-two ${sectionThreeMiniCloudTwoInView ? 'section-three-mini-cloud-two-animate' : ''}`}
                 width="227" height="82" viewBox="0 0 227 82" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M3.99998 81H220" stroke="black" strokeLinecap="round"/>
                <path d="M3.99999 81C-14.4 21 51 -9.53674e-07 77 33.5" stroke="black" strokeLinecap="round"/>
                <path d="M220 81C245.5 47.5 184.5 11.5 160.5 33.5" stroke="black" strokeLinecap="round"/>
                <path d="M166 28C153.5 -8.5 85.5 -10.5 73 35" stroke="black" strokeLinecap="round"/>
            </svg>

            <svg ref={sectionThreeCloudTwoRef}
                 className={`section-three-cloudTwo ${sectionThreeCloudTwoInView ? 'section-three-cloudTwo-animate' : ''}`}
                 width="640" height="371" viewBox="0 0 640 371" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M154 119C-25 34.9998 -60 294 121 232" stroke="black" strokeLinecap="round"/>
                <path d="M346 247C384 352 257 401 231 255" stroke="black" strokeLinecap="round"/>
                <path d="M241.132 292C201.798 312.667 109.1 328.7 95.5 241.5" stroke="black" strokeLinecap="round"/>
                <path d="M140.5 119C119.5 89.9999 154 68.5 169 101" stroke="black" strokeLinecap="round"/>
                <path d="M256.5 285C258.5 289.833 267.5 299.3 287.5 298.5" stroke="black" strokeLinecap="round"/>
                <path d="M105 119C29.5 107 -5 223 80 223" stroke="black" strokeLinecap="round"/>
                <path d="M550 223C644 384 340 448 406 232" stroke="black" strokeLinecap="round"/>
                <path d="M478 96.9999C661.077 39.2657 688 231 561 246" stroke="black" strokeLinecap="round"/>
                <path d="M325 96.9999C319 -50 521 -8.99999 496 87.9999" stroke="black" strokeLinecap="round"/>
                <path d="M375 42C377.667 33.3333 389.2 16.6 414 19" stroke="black" strokeLinecap="round"/>
                <path d="M223 61C225.333 52 237 34.2 265 35" stroke="black" strokeLinecap="round"/>
                <path d="M164 126C154 28 274 -16 333.053 47" stroke="black" strokeLinecap="round"/>
            </svg>

            <svg ref={sectionThreeBirdRef}
                 className={`section-three-bird ${sectionThreeBirdRef ? 'section-three-bird-animate' : ''}`} width="493"
                 height="192" viewBox="0 0 493 192" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M156 55C229 3.5 283 39 283 39C283 39 287.718 40.8413 292.119 45.5C292.834 46.2575 293.542 47.0894 294.219 48C295.673 49.9563 296.989 52.2758 297.952 55C299.053 58.1163 299.691 61.7622 299.546 66C299.17 76.9904 293.523 91.9616 277 112"
                    stroke="black" strokeLinecap="round"/>
                <path d="M292.119 45.5L330 33.5L297.952 55" stroke="black" strokeLinecap="round"/>
                <path d="M277 112C230 169 81.9004 185.31 1 191" stroke="black" strokeLinecap="round"/>
                <path d="M1 191C37 173 122.2 114.1 143 88.5" stroke="black" strokeLinecap="round"/>
                <path d="M34 1C65.2082 38.2921 89.6836 52.3207 156 55" stroke="black" strokeLinecap="round"/>
                <path d="M311.5 66C333.204 60.034 345.5 69.7372 366.5 75.6186C387.5 81.5 463.685 82.1579 492.5 66"
                      stroke="black" strokeLinecap="round"/>
                <path d="M245 56H246" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>

            <svg ref={sectionThreeBirdTwoRef}
                 className={`section-three-bird-two ${sectionThreeBirdTwoInView ? 'section-three-bird-two-animate' : ''}`}
                 width="639" height="166" viewBox="0 0 639 166" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M235 29C308 -22.5 362 13 362 13C362 13 366.718 14.8413 371.119 19.5C371.834 20.2575 372.542 21.0894 373.219 22C374.673 23.9563 375.989 26.2758 376.952 29C378.053 32.1163 378.691 35.7622 378.546 40C378.17 50.9904 372.523 65.9616 356 86"
                    stroke="black" strokeLinecap="round"/>
                <path d="M371.119 19.5L409 7.5L376.952 29" stroke="black" strokeLinecap="round"/>
                <path d="M356 86C309 143 160.9 159.31 80 165" stroke="black" strokeLinecap="round"/>
                <path d="M1 19C32.2082 56.2921 180 56 235 29" stroke="black" strokeLinecap="round"/>
                <path d="M390.5 40C412.204 34.034 442 64 478 85C514 106 609.185 85.1579 638 69" stroke="black"
                      strokeLinecap="round"/>
                <path d="M324 30H325" stroke="black" strokeWidth="3" strokeLinecap="round"/>
                <path d="M9 157C63 140.317 190.8 85.7268 222 62" stroke="black" strokeLinecap="round"/>
            </svg>

            <motion.div className={"greenButterfly-container"}
                        ref={ref}
                        initial={{x: '-25rem'}}
                        animate={isAnimating ? {x: 0} : {}}
                        transition={{duration: 1, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img src={GreenButterflyImg} className={"greenButterfly-img"} alt={"green butterfly img"}/>
            </motion.div>

            <motion.div className={"monaLisa-container"}
                        ref={ref}
                        animate={isAnimating ? {y: 0, rotate: 0} : {}}
                        initial={{y: '-35rem', rotate: -90}}
                        transition={{duration: 2, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={MonaLisaPaintingImg} className={"monaLisa-img"} alt={"Mona Lisa painting"}/>
            </motion.div>

            <img className={"monaLisa-shadowImg"} src={shadow} alt={"Mona Lisa shadow"}/>

            <svg ref={sectionThreeBorderRef}
                 className={`section-three-border ${sectionThreeBorderInView ? 'section-three-border-animate' : ''}`}
                 width="958" height="546" viewBox="0 0 958 546" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M1 545H149" stroke="black"/>
                <path d="M1 397V545" stroke="black"/>
                <path d="M1 1V149" stroke="black"/>
                <path d="M149 1H1" stroke="black"/>
                <path d="M957 545H809" stroke="black"/>
                <path d="M957 397V471V545" stroke="black"/>
                <path d="M809 1H957" stroke="black"/>
                <path d="M957 1V75V149" stroke="black"/>
                <path
                    d="M20 29C14.0346 29 15.8293 34.3345 20.8889 32.8889C24.6981 31.8005 24.6981 26.1994 20.8889 25.1111C15.6479 23.6137 13.7483 30.3046 18 32.5555C22.9787 35.1913 26.6538 29.3269 22 27"
                    stroke="black" strokeWidth="5" strokeLinecap="round"/>
                <path d="M889.001 502C889.001 516.138 888.674 515.448 904 515.276M904 515.276V502M904 515.276V532"
                      stroke="black" strokeLinecap="round"/>
                <path d="M38.0004 505C38.0004 514.897 37.7613 514.414 49 514.293M49 514.293V505M49 514.293V526"
                      stroke="black" strokeLinecap="round"/>
                <path
                    d="M916 502V519.586M916 532V519.586M916 519.586C919.175 509.586 922.192 504.912 927.994 502M916 519.586C924.466 519.586 928.171 524.073 927.994 532"
                    stroke="black" strokeLinecap="round"/>
                <path d="M24 511.667L28.4333 506.89C31 504.375 31 504.124 31 507.644V526" stroke="black"
                      strokeLinecap="round"/>
                <path d="M61 511.985L64.8 506.98C67 504.346 67 504.082 67 507.77V527" stroke="black"
                      strokeLinecap="round"/>
                <path
                    d="M85.3249 507.923C78.9251 499.021 66.3389 512.161 74.8719 524.454M74.8719 524.454C79.5651 530.6 88.5248 524.454 85.3249 518.308C82.125 512.161 71.4587 515.976 74.8719 524.454Z"
                    stroke="black" strokeLinecap="round"/>
                <path d="M56 526.25V526" stroke="black" strokeWidth="3" strokeLinecap="round"/>
            </svg>

            <h3 className={"sectionThree-header"}>
                Фотография
            </h3>

            <p className={"sectionThree-text"}>
                Професионални фотографски решения: интериорно и<br/> екстериорно заснемане, продуктова фотография.
            </p>

            <svg ref={painterStickmanRef}
                 className={`painter-stickman ${painterStickmanInView ? 'painter-stickman-animate' : ''}`} width="951"
                 height="689" viewBox="0 0 951 689" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M675 364C707 327.835 725.5 329 757 353.5C757 353.5 765 361.5 785.105 358.972C805.21 356.445 834 328 871 352.5C908 377 922 367.5 937.5 347"
                    stroke="black" strokeLinecap="round"/>
                <path d="M685 218.5C689.295 189.509 693.511 175.359 737 192C747.702 156.808 759.256 153.821 787 170"
                      stroke="black" strokeLinecap="round"/>
                <path d="M937 451.402H675" stroke="black" strokeLinecap="round"/>
                <path d="M937 451V334" stroke="black" strokeLinecap="round"/>
                <path d="M937 88V334.5" stroke="black" strokeLinecap="round"/>
                <path d="M934.5 609.134H674.5" stroke="black" strokeLinecap="round"/>
                <path d="M707 451L691 530L675 609L659 688" stroke="black" strokeLinecap="round"/>
                <path d="M902 451L918 530L934 609L950 688" stroke="black" strokeLinecap="round"/>
                <path d="M675 451V355.5V87" stroke="black" strokeLinecap="round"/>
                <path d="M937 88L833.5 87.6144L771.5 87.3835L675 87.024" stroke="black" strokeLinecap="round"/>
                <path d="M771.5 87.3835L789 0.500005L817 0.500005L833.5 87.6144" stroke="black" strokeLinecap="round"/>
                <path
                    d="M248.5 262C270.946 291.304 265.763 447.214 247.6 481.126M284 686.491C257.074 686.491 252.191 689.497 251.729 667.958C251.747 661.061 252.191 651.671 252.191 638.907C249.028 602.799 252.184 548.602 247.6 481.126M247.6 481.126C224.575 532.486 191.316 609.834 156.495 650.427C123.411 688.996 128.427 690.498 102 686.491"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M36.5249 189.818C73.6711 161.323 107.673 229.478 101.205 259.314C94.7365 289.15 84.1753 310.407 36.5249 319.714C2.33357 323.086 -5.27074 295.673 5.62241 289.878C26.8229 278.598 36.5249 272.777 36.5249 259.314C36.5249 241.799 7.7784 211.87 36.5249 189.818Z"
                    stroke="black"/>
                <path
                    d="M289.244 204.1H201.217M289.244 204.1C289.244 230.073 268.433 262 248.579 262C228.725 262 213.895 249.249 201.217 204.1M289.244 204.1C294.028 202.158 294.923 201.628 296.667 200.701C298.986 199.47 306.957 195.604 304.553 183.224C301.915 169.631 294.369 160.546 287.331 155.794C277.824 148.531 264.367 150.697 254.32 154.581C244.274 158.465 229.443 170.116 219.396 167.203C209.35 164.29 197.638 166.475 190.692 170.602C183.745 174.728 181.483 177.472 183.99 191.477C185.891 198.162 194.527 204.1 201.217 204.1"
                    stroke="black"/>
                <path
                    d="M65.5 241.067C77.8095 239.679 75.8133 260.163 65.5 261.899C55.1867 263.635 53.1905 242.456 65.5 241.067Z"
                    stroke="black"/>
                <path
                    d="M55.3411 198.476C70.1874 194.763 71.5698 214 55.3411 214C42.4484 214 43.332 201.479 55.3411 198.476Z"
                    stroke="black"/>
                <path
                    d="M48.4033 284.413C58.0561 287.877 51.1627 304.44 40.1251 302.899C21.8606 300.35 38.7453 280.947 48.4033 284.413Z"
                    stroke="black"/>
                <path d="M228.5 166.5L225 155" stroke="black" strokeLinecap="round"/>
                <path d="M258 292C213 368.336 148 318.248 102 262" stroke="black" strokeLinecap="round"/>
                <path
                    d="M414.582 368C410.035 257.819 433.337 222.176 442.567 225.172C446.377 225.678 447.174 230.618 448.548 238.157C451.188 252.639 442.567 295.587 414.582 368Z"
                    stroke="black"/>
                <path
                    d="M441.645 224.967C430.59 222.886 428.053 208.333 434.467 198.756C445.151 182.626 450.445 171.369 451.864 167C451.23 169.184 451.827 177.888 458.433 201.276C461.158 212.366 453.816 225.747 441.645 224.967Z"
                    stroke="black"/>
                <path
                    d="M825 189.826C829.513 165.746 836.533 156.638 873 163.826C882.02 139.355 892.048 133.467 920 138.826"
                    stroke="black" strokeLinecap="round"/>
                <path d="M798 265C799.729 251.211 803.595 247.444 818 251C822.511 236.475 827.667 233.168 841 235"
                      stroke="black" strokeLinecap="round"/>
                <path d="M918 530.268H691" stroke="black" strokeLinecap="round"/>
                <path d="M258 292C283.833 307.234 342 338.336 414 318.248" stroke="black" strokeLinecap="round"/>
            </svg>
        </section>
    )
}

export default SectionThree;