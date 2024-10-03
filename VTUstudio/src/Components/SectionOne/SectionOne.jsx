import {motion} from "framer-motion";
import lemon from "../../assets/Images/SectionOne/lemon.png";
import keycapImg from "../../assets/Images/Main/keycap.png";
import './SectionOne.css'
import TrampolineImg from "../../assets/Images/SectionOne/trampoline.png";
import Shadow from '../../assets/Images/Main/Shadow.png'
import { useInView } from 'react-intersection-observer';
import {useEffect, useState} from "react";

export default function SectionOne() {

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
            }, 135);

            return () => clearTimeout(delay);
        }
    }, [scrollDirection, entry]);

    useEffect(() => {
        if (inView && scrollDirection === 'down') {
            setIsAnimating(true);
        }
    }, [inView, scrollDirection]);





    const { ref: cloudBorderRef, inView: cloudBorderInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: starRainbowRef, inView: starRainbowInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: lightbulbStickmanRef, inView: lightbulbStickmanInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: fourEdgeStarOneRef, inView: fourEdgeStarOneInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: fourEdgeStarTwoRef, inView: fourEdgeStarTwoInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: fourEdgeStarThreeRef, inView: fourEdgeStarThreeInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: laptopStickmanRef, inView: laptopStickmanInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: svgTextSectionOneRef, inView: svgTextSectionOneInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sixEdgeStarRef, inView: sixEdgeStarInView } = useInView({ triggerOnce: false, threshold: 0.1 });
    const { ref: sateliteRef, inView: sateliteInView } = useInView({ triggerOnce: false, threshold: 0.1 });


    return (
        <section id={"sectionOne"} className={"sectionOne"}>

            <motion.div className={"keycap-container"}
                        ref={ref}
                        animate={isAnimating ? {y: 0} : {}}
                        initial={{y: '-33.5rem'}}
                        transition={{duration: 0.5, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                        }}
            >
                <img src={keycapImg} className={"keycap-img"} alt={"keycap image"}/>
            </motion.div>

            <svg ref={sixEdgeStarRef}
                 className={`six-edge-star ${sixEdgeStarInView ? 'six-edge-star-animate' : ''}`} width="75" height="73"
                 viewBox="0 0 75 73" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M24 0.5L53.5 72.5M53.5 0.5L24 72.5M0 36H75" stroke="black"/>
            </svg>

            <svg ref={fourEdgeStarOneRef}
                 className={`four-edge-star-one ${fourEdgeStarOneInView ? 'four-edge-star-one-animate' : ''}`}
                 width="64" height="63" viewBox="0 0 64 63" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0V63M0.5 32.5H63.5" stroke="black"/>
            </svg>

            <svg ref={fourEdgeStarTwoRef}
                 className={`four-edge-star-two ${fourEdgeStarTwoInView ? 'four-edge-star-two-animate' : ''}`}
                 width="64" height="63" viewBox="0 0 64 63" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0V63M0.5 32.5H63.5" stroke="black"/>
            </svg>

            <svg ref={fourEdgeStarThreeRef}
                 className={`four-edge-star-three ${fourEdgeStarThreeInView ? 'four-edge-star-three-animate' : ''}`}
                 width="64" height="63" viewBox="0 0 64 63" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M32 0V63M0.5 32.5H63.5" stroke="black"/>
            </svg>

            <svg ref={starRainbowRef}
                 className={`star-rainbow ${starRainbowInView ? 'star-rainbow-animate' : ''}`}
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M76 31.618L93.2611 84.7422L93.3733 85.0877H93.7366L149.595 85.0877L104.405 117.92L104.111 118.134L104.223 118.479L121.484 171.603L76.2939 138.771L76 138.557L75.7061 138.771L30.516 171.603L47.7771 118.479L47.8894 118.134L47.5955 117.92L2.40539 85.0877L58.2634 85.0877H58.6267L58.7389 84.7422L76 31.618Z"
                    stroke="black"/>
                <path d="M88.3867 70.0122C123.812 46.5124 278.5 -7.50003 396.5 1.5" stroke="black"
                      strokeLinecap="round"/>
                <path d="M149 85.5C170.787 77.5916 297 52 396.5 79.5" stroke="black" strokeLinecap="round"/>
                <path d="M111 85.0891C165.5 61.5001 289 31 396 52" stroke="black" strokeLinecap="round"/>
                <path d="M114.5 110.5C163.907 92.6922 294.278 69.2443 396.5 101.5" stroke="black"
                      strokeLinecap="round"/>
                <path d="M92.0002 81C127.315 59.3253 285.5 6.50002 396.5 27" stroke="black" strokeLinecap="round"/>
            </svg>

            <svg ref={sateliteRef}
                 className={`satelite ${sateliteInView ? 'satelite-animate' : ''}`} width="661" height="402"
                 viewBox="0 0 661 402" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M311 252V401M262.5 86.5V244.5C286.833 249.833 308.7 257.3 357.5 244.5V86.5M262.5 86.5C271 51.5 352.5 57.5 357.5 86.5M262.5 86.5C270.5 90.5 277 92 301 93C301 93 325.547 92.8053 333 91.5C358.123 87.0999 351.742 88.3792 357.5 86.5"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M357.5 140.5C363.268 140.321 370.736 140.343 370.5 140.5C370.264 140.657 370.5 185 370.5 185C370.677 185.404 365.249 185.206 357.5 185"
                    stroke="black" strokeLinecap="round"/>
                <path d="M263 125C249.5 124.5 251 125 251 125C251 125 251 146.5 251 147C251 147.5 258.455 147 263 147"
                      stroke="black"/>
                <path d="M309.5 70.5V13" stroke="black" strokeLinecap="round"/>
                <circle cx="309.5" cy="6.5" r="6" stroke="black"/>
                <path d="M315.593 6.76471L346 6.76471M303.43 6.76471L273 6.76471M279.041 2V11" stroke="black"
                      strokeLinecap="round"/>
                <path d="M342 2.5V11" stroke="black" strokeLinecap="round"/>
                <circle cx="272" cy="125" r="5.5" stroke="black"/>
                <circle cx="272.5" cy="149.5" r="6" stroke="black"/>
                <path d="M458.75 221.5C458.493 223.734 657.95 222.914 659.5 221.5" stroke="black" strokeWidth="0.7"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M458.75 111V137.25V163.5C458.75 163.5 459.007 219.266 458.75 221.5" stroke="black"
                      strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M458.75 111C463.888 108.387 662.903 110.602 659.5 111" stroke="black" strokeWidth="0.7"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M218 78V130.5C218 130.5 218.257 185.766 218 188" stroke="black" strokeWidth="0.7"
                      strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M370.5 163.5H458.75" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M218 188H1" stroke="black" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M1 188V130V78" stroke="black" strokeWidth="0.7" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M1 78H218" stroke="black" strokeWidth="0.7" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M218 130H1" stroke="black" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M459 200H660.156" stroke="black" strokeWidth="0.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M459 163.5H619.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"
                      strokeLinejoin="round"/>
                <path d="M1 101H212" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M1 166H212.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M13 78L13 186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M35 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M198 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M178 78L179 186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M156 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M135 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M113 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M95 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M75 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M55 78V186" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M611 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M593.5 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M576 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M556.5 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M536.5 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M516.5 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M497.5 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M481.5 119.5V214.5" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M251 130H218" stroke="black"/>
                <path d="M326 92V250.5" stroke="black" strokeLinecap="round"/>
                <path d="M659.5 221.5C661.05 220.086 659.5 111 659.5 111" stroke="black" strokeWidth="0.7"
                      strokeLinecap="round" strokeLinejoin="round"/>
            </svg>

            <svg ref={svgTextSectionOneRef}
                 className={`svg-text-section-one ${svgTextSectionOneInView ? 'svg-text-section-one-animate' : ''}`}
                 width="121" height="85" viewBox="0 0 121 85" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M11.5 41C10.1188 34.0942 6.05976 37 3.80249 41C2.32017 43.6267 1.2779 46.9553 1.42474 49.5C2.5 55.5 7.5 57 14.5 49.5"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M41 38.5C35.5 37.5 31 40 31.5 43C31.6201 43.7206 32.1824 44.1982 33.3291 44.7464C36.494 46.2596 42.5799 47.0809 42.2 50.5C42.2 52.5 39.8128 53.4834 38.344 54.2192C36.6587 55.0634 34.5199 55.3588 31.5 55.5"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M26.538 38.224C21.038 37.2239 16.538 39.7239 17.038 42.7239C17.1581 43.4445 17.7204 43.9221 18.8672 44.4704C22.032 45.9836 28.1179 46.8048 27.738 50.2239C27.738 52.2239 25.3508 53.2073 23.882 53.9431C22.1967 54.7874 20.0579 55.0828 17.038 55.2239"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M47.5 43.5C46.2889 45.8333 44.9187 51.9 45.5 57.5M55 43C54.3333 46.3333 53.15 53.9 53.75 57.5M44.5 50C47.6667 49.6667 54.5 49 56.5 49"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M56.5 45.5C58.0354 45.0394 60.3415 44.4515 62.5 44.1076M68 44.5C67.3527 43.637 65.0277 43.705 62.5 44.1076M62.5 44.1076C61.6667 48.2384 60.2 56.8 61 58"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M69.5 58C69.5 55.6667 69.7 49.4 70.5 43M69.8 51C74.3 37.5 75.5 37 75.5 55.5C75.5 56.5 78.5 46.5 79.5 45.7904C80.5 45.0809 81.5 49 81.5 57.5"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M64 9C64 8.30543 64.0833 6.44003 64.4167 4.53493M64.125 6.9163C66 2.89774 66.5 2.74891 66.5 8.25582C66.5 8.55349 67.75 5.57678 68.1667 5.36557C68.5833 5.15436 69 6.32096 69 8.85116"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M31 61C31 61 29.6 60.5781 29.3 62C29 63.4219 30 63.5 30 64.5C30 65.5 28.5 65 28.5 65.5C28.5 66 29.5 65.5 29.5 66.5C29.5 67.5 29.1 68 29.3 69C29.5 70 30 69.8 30.5 69.8"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M61 13C61 13 59.6 12.5781 59.3 14C59 15.4219 60 15.5 60 16.5C60 17.5 58.5 17 58.5 17.5C58.5 18 59.5 17.5 59.5 18.5C59.5 19.5 59.1 20 59.3 21C59.5 22 60 21.8 60.5 21.8"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M86.8961 45C86.3961 47.5 85.8961 49.5 85.3961 53.5C84.8961 60 83.3961 57.5 92.8961 56.5"
                      stroke="black" strokeLinecap="round"/>
                <path d="M37.3107 64.9994C35.5 65.5 34.5 68 36.5 68.5995C38.5 69.1991 39.1214 64.4989 37.3107 64.9994Z"
                      stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M43.3117 65.0374C41.501 65.538 40.501 68.038 42.501 68.6375C44.501 69.237 45.1224 64.5368 43.3117 65.0374Z"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M40.5 69.5C39.5514 69.6679 41.0116 60.1749 41.5 61.5C41.9884 62.8251 40.2417 64.2428 40 65"
                      stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M34.4991 67.5C33.5 69.5 31.2672 69.172 31.5 67.5C31.7785 65.5 33.9991 62.944 33.9991 66"
                      stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M49 64C45.7 65.4219 46.5214 69.1712 46.5 69C46 65 46 65.5 45.7 64.5" stroke="black"
                      strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M49.9414 68.4414C49.9295 68.4401 49.9232 68.4273 49.9091 68.4258C49.8661 68.4213 49.8253 68.418 49.7819 68.418C49.7418 68.418 49.7061 68.4561 49.717 68.498C49.7242 68.5257 49.748 68.5438 49.7578 68.5699C49.7664 68.5927 49.7771 68.6126 49.7969 68.628C49.8402 68.6617 49.9536 68.6562 49.9727 68.5951C49.9898 68.5403 49.9979 68.4616 49.9434 68.4238C49.9061 68.398 49.873 68.395 49.8288 68.4041C49.8173 68.4065 49.7996 68.406 49.7891 68.411C49.7756 68.4174 49.772 68.4205 49.7804 68.4062C49.7861 68.3966 49.8091 68.3834 49.8203 68.3828C49.8359 68.3819 49.8542 68.3871 49.8691 68.3904C49.8952 68.3962 49.9003 68.4089 49.916 68.4316C49.931 68.4533 49.9248 68.478 49.9327 68.5009C49.9427 68.5297 49.9267 68.5497 49.9054 68.5694C49.8589 68.6126 49.7977 68.5712 49.7635 68.5369C49.7489 68.5224 49.7466 68.4954 49.7461 68.4753C49.7458 68.4622 49.7714 68.4247 49.7656 68.4219"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M49.8125 65.1C49.7838 65.1036 49.8125 65.1417 49.8203 65.149C49.8321 65.1603 49.8791 65.1661 49.8945 65.1605C49.9076 65.1559 49.919 65.1505 49.9314 65.1449C49.9458 65.1384 49.9418 65.1458 49.9418 65.1527C49.9418 65.1559 49.9508 65.1521 49.9483 65.1469C49.9461 65.1423 49.9391 65.1418 49.9357 65.1451C49.9293 65.1515 49.9259 65.1546 49.9179 65.1586"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M54.8 63.5C54.8 63.5 52.008 68.5917 51.5 70M56.8 63.8C56 65.5 54.6 69 54.1 70M52 66C53.9302 65.9054 57.2 66.1 57.2 66.1M51.5 67.5C52.9667 67.3854 56.16 67.2406 57.2 67.5781"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M59 62.8C58.6265 63.8271 58.3402 65.2028 58.1818 66.5M58.2 70C57.9867 69.3602 58.0009 67.9814 58.1818 66.5M63.5 62.8C63.1667 62.7 61.7 62.7 58.5 63.5M62.5 65.5C62.4545 65.3333 61.5272 65.3 58.1818 66.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M65 62.8C64.768 63.728 64.4929 65.0866 64.3047 66.3962M64.2 70C63.9856 69.3568 64.0872 67.9092 64.3047 66.3962M69.5 62.8C69.5 62.7 68.5 62.7 64.5 63.5M68.5 65.5C68.3698 65.2642 67.3484 65.1132 64.3047 66.3962"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M71 62.5C70.7049 63.5277 70.3985 64.9949 70.2 66.3645M70.2 70C69.8719 69.6512 69.9508 68.0848 70.2 66.3645M70.5 63.5C72.1667 63 75.5 62.4 75.5 62.8M70.2 66.3645C71.4667 65.9097 74.1 65.1 74.5 65.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M75.9687 65C75.9608 65.0636 75.7378 65.1645 75.816 65.2622C75.8767 65.338 76.067 65.1388 76.0625 65.0625C76.0548 64.9317 75.7046 65.0711 75.9375 65.1875"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M75.8125 68.5C76.2659 68.7148 76.25 69.0428 76.25 69.4861C76.25 69.8599 76.0276 70.0385 75.875 70.3438"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M46.4 71.5C46.0453 72.3868 45.6434 73.972 45.4654 75.7434M45.7 80.5C45.3257 79.0027 45.3089 77.3011 45.4654 75.7434M45.3 72.1C46.809 71.9114 48 71.9689 49.2466 72.5683C50.4933 73.1676 51 74.5 45.5 75.5M45.4654 75.7434C46.4769 75.4956 50.5 77.5 51.4 81.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M55.5 79.5C54.7679 80.9641 51.973 81.5 51.973 79.5M51.973 79.5C52 79 52 78 53.5 76.5C55 75 56.5 77.5 51.973 79.5Z"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M68 73.5C67.5 74.5 66.6 77.4 67 81M65.2 76.7C66 76.5 66.5 76.5 67 76.1256C68.3448 75.8928 69.5275 75.7362 69 76"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M77.6 25C77.1 26 76.2 28.3 76.6 31.9M75 28.1C75.8 27.9 75.8 28 76.6 27.6256C77.9448 27.3928 79.1275 27.2362 78.6 27.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M85.8 14C85.3 15 84.4 17.3 84.8 20.9M83.2 17.1C84 16.9 84 17 84.8 16.6256C86.1448 16.3928 87.3275 16.2362 86.8 16.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M59 76.5C59 75.5 56 77.5 57 80.5C57.2544 81.2633 58.8685 79.9873 59.6182 78.2286M59.6182 78.2286C59.9628 76.1682 60.0569 76.3235 60 76.5C59.8628 76.9117 59.7029 77.5437 59.6182 78.2286ZM59.6182 78.2286C59.4971 79.2073 59.5293 80.294 60 81"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M65 79.5C63.6077 81.9366 62 81 61.7952 79.5C61.5 78.5 64 74 64.5 77.5" stroke="black"
                      strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M68.9687 80.2813C68.6803 80.2813 69.0007 80.6722 69.1493 80.375C69.1755 80.3226 69.2274 80.1527 69.1806 80.1007C69.145 80.0612 68.9179 80.0327 68.8819 80.0938C68.8388 80.167 68.7814 80.3207 68.8194 80.4063C68.8416 80.4562 68.8861 80.5841 68.9132 80.6181C68.968 80.6865 68.9395 80.756 69.0625 80.6944C69.1557 80.6478 69.1676 80.5768 69.2187 80.5"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M71.3125 73.9063C71.2994 73.8018 70.7008 73.9657 70.9687 74.2188C71.1515 74.3914 71.8571 74.2321 71.5625 73.9375"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M71.5 76.5C71.67 77.1799 71.7533 77.9175 71.7646 78.6565C71.9316 81.0283 71.5 84 69.5 84.0299C69.1024 84.1525 68.7872 83.8719 68.7 83"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M10.75 25.6L8.5 28.5M10.7 30.4C9.63705 29.4507 8.39999 28.1 8.39999 28.1" stroke="#FF0000"
                      strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M10.75 25.6L8.5 28.5M10.7 30.4C9.63705 29.4507 8.39999 28.1 8.39999 28.1" stroke="black"
                      strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M54.75 3.6L52.5 6.5M54.7 8.4C53.6371 7.45069 52.4 6.1 52.4 6.1" stroke="black"
                      strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M76.2 75.4C76.5 75 74.6941 75.5 74.232 75.8089C73.4378 76.3398 73.356 77.126 74 77.354C74.5148 77.6169 75.5846 77.7758 76.3134 78.1197C76.7435 78.3226 76.8 78.6434 76.5 79.1036C76.1246 79.6793 75.3408 80.12 74 80.5C73.7816 80.5414 73.6861 80.5353 74 80"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M73.9298 26.6487C74.2298 26.2487 72.4239 26.7487 71.9617 27.0576C71.1675 27.5885 71.0857 28.3747 71.7297 28.6027C72.2445 28.8656 73.3144 29.0245 74.0432 29.3684C74.4733 29.5713 74.5298 29.8921 74.2297 30.3523C73.8544 30.928 73.0706 31.3687 71.7297 31.7487C71.5113 31.79 71.4159 31.784 71.7297 31.2487"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M80 28C80 28.8111 80.0328 29.7218 80.1152 30.5C80.284 32.094 80.9036 32.6831 81.6049 31.2253C81.8482 30.7197 81.9598 29.8646 82.2768 28.8736C82.3416 28.6708 82.4151 28.4623 82.5 28.25C82.6099 28.116 82.1803 29.2649 82.404 30.4614C82.5469 31.2253 83 32 83.1 32.35"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M14.7 31.2C14.4726 30.9725 14.2658 30.7451 14.2021 30M14.2021 30C14.1517 29.4101 14.1909 28.4957 14.3805 27M14.2021 30C13.7424 30.3824 13.0613 30.7356 12.6246 30.7575C12.2948 30.774 11.6993 30.6093 11.6071 30.1224C11.5021 29.5683 11.6071 28.1562 14.3805 27M14.3805 27C14.4779 26.2316 14.615 25.3099 14.8 24.2C14.9597 24.1989 15 24 14.3805 24.3281"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M16.7344 24.6875C16.7344 24.7069 16.7239 24.7639 16.7378 24.7778C16.7668 24.8067 16.7812 24.734 16.7812 24.7188C16.7812 24.6593 16.6836 24.6538 16.6406 24.6753C16.5251 24.7331 16.6585 24.9219 16.75 24.9219"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M18.5 27.3C18.8785 27.9712 19.161 29.1767 19.4298 30.2365C19.5776 30.8191 19.756 31.0643 19.83 31.0637C20.0747 31.0616 20.1271 28.3729 22.2 26.3"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M16.5 26.5C16.3333 28 16.1 30.7 16.5 30.7" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path
                    d="M28.6 29.5C28.213 30.0191 27.8804 30.3868 27.5965 30.6308C26.9565 31.0524 26.514 31.1116 26.2267 30.9469C25.7365 30.5362 25.5776 29.8512 25.6268 29.1575C25.6832 28.3629 26.1776 27.4328 26.7006 26.9348C27.4213 26.2486 28.5 26.5 28 28"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M33.7041 26.7601C33.7041 25.7601 30.7041 27.7601 31.7041 30.7601C31.9585 31.5235 33.5726 30.2474 34.3223 28.4887M34.3223 28.4887C34.5547 27.9434 34.7041 27.3518 34.7041 26.7601C34.5669 27.1718 34.407 27.8038 34.3223 28.4887ZM34.3223 28.4887C34.2012 29.4674 34.2334 30.5541 34.7041 31.2601"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M30.5 32.1269C29.5514 32.2947 31.0116 22.8018 31.5 24.1269C31.9884 25.4519 30.2417 26.8696 30 27.6269"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M70.5 9.1269C69.9489 9.22441 70.2108 6.06156 70.6228 3.65334M70.6228 3.65334C70.92 1.91613 71.2953 0.5716 71.5 1.1269C71.8221 2.00077 71.1721 2.91491 70.6228 3.65334ZM70.6228 3.65334C70.3391 4.03462 70.0823 4.36905 70 4.6269"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M38.1298 26.6487C38.4298 26.2487 36.6239 26.7487 36.1617 27.0576C35.3675 27.5885 35.2857 28.3747 35.9297 28.6027C36.4445 28.8656 37.5144 29.0245 38.2432 29.3684C38.6733 29.5713 38.7298 29.8921 38.4297 30.3523C38.0544 30.928 37.2706 31.3687 35.9297 31.7487C35.7113 31.79 35.6159 31.784 35.9297 31.2487"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M42.1298 26.6487C42.4298 26.2487 40.6239 26.7487 40.1617 27.0576C39.3675 27.5885 39.2857 28.3747 39.9297 28.6027C40.4445 28.8656 41.5144 29.0245 42.2432 29.3684C42.6733 29.5713 42.7298 29.8921 42.4297 30.3523C42.0544 30.928 41.2706 31.3687 39.9297 31.7487C39.7113 31.79 39.6159 31.784 39.9297 31.2487"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M44.5 28.6L47.25 28.6M44.5 30H47" stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M49 25.2C49.1667 25.5333 49.5 26 48.9 27" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path d="M50.3 25.2C50.4667 25.5333 50.8 26 50.2 27" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path
                    d="M51.6 26.7C52 27.5 52.3073 28.2396 52.5 29C52.7721 29.6852 52.8253 30.4607 52.95 31C52.9772 32.1091 52.9497 32.5233 53.1307 32.3638C53.3874 31.4158 53.757 30.6342 54.5957 28.405C55 27.5 56.5 25 56 24.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M59.6037 32.3C59.2479 31.7307 59.5094 30.0836 59.9339 28.074C60.1059 27.2597 60.3047 26.3858 60.5 25.5M57 26C59.1086 25.5078 60.6297 25.1814 61.6788 25.0846C62.6888 24.9914 64 25 63.3 25.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M64.4 25.8C64.1868 27.0486 64.122 28.1187 64.1672 29C64.1672 30.6444 64.59 31.6358 65.1726 31.9211C65.6866 32.1453 66.3766 31.9077 67 31.2072C67.8144 29.8168 68.4298 28.5639 68.5222 26.2022C68.5576 25.2955 68.5371 25.0681 68.5 24.4"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M87.2622 25C86.8622 26.3 86.8622 27.3 86.6052 29.3936C86.6019 29.9137 86.6122 30.3897 86.6122 30.8M87.0622 31.9C86.895 32.0028 86.7155 31.5619 86.6122 30.8M86.6122 30.8C85.8587 31.2432 85.3096 31.4544 84.9296 31.4985C84.2461 31.4985 83.9817 31.2134 84.001 30.8C84.001 29.0969 85.8622 27.8 87.0622 27.8"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M89.2209 28C89.0542 29.5 88.8209 32.2 89.2209 32.2" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path d="M71.4209 16.6C71.2542 18.1 71.0209 20.8 71.4209 20.8" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path
                    d="M89.1386 26.0237C89.1386 26.0431 89.1282 26.1 89.1421 26.114C89.171 26.1429 89.1855 26.0702 89.1855 26.0549C89.1855 25.9955 89.0879 25.99 89.0449 26.0115C88.9294 26.0693 89.0628 26.258 89.1543 26.258"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M87.9386 20.4237C87.9386 20.4431 87.9282 20.5 87.9421 20.514C87.971 20.5429 87.9855 20.4702 87.9855 20.4549C87.9855 20.3955 87.8879 20.39 87.8449 20.4115C87.7294 20.4693 87.8628 20.6581 87.9543 20.6581"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M87.9386 17.0237C87.9386 17.0431 87.9282 17.1 87.9421 17.114C87.971 17.1429 87.9855 17.0702 87.9855 17.0549C87.9855 16.9955 87.8879 16.99 87.8449 17.0115C87.7294 17.0693 87.8628 17.258 87.9543 17.258"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M116.939 16.0237C116.939 16.0431 116.928 16.1 116.942 16.114C116.971 16.1429 116.986 16.0702 116.986 16.0549C116.986 15.9955 116.888 15.99 116.845 16.0115C116.729 16.0693 116.863 16.258 116.954 16.258"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path d="M92.25 14C91.5 19 91.5 18 91.3781 21.1" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path
                    d="M92.9117 28.0374C91.101 28.538 90.101 31.038 92.101 31.6375C94.101 32.237 94.7224 27.5368 92.9117 28.0374Z"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M95.1 26C95.2667 26.3333 95.6 26.8 95 27.8" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path d="M96.1 26C96.2667 26.3333 96.6 26.8 96 27.8" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path d="M97 31.8L99.25 28.9M97.05 27C98.1129 27.9493 99.35 29.3 99.35 29.3" stroke="black"
                      strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M118 22.8163C118 22.8163 119.4 23.2382 119.7 21.8163C120 20.3945 119 20.3163 119 19.3163C119 18.3163 120.5 18.8163 120.5 18.3163C120.5 17.8163 119.5 18.3163 119.5 17.3163C119.5 16.3163 119.9 15.8163 119.7 14.8163C119.5 13.8163 119 14.0163 118.5 14.0163"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M62.5002 13.5L62.0002 21C61.9485 21.6255 62 18.5 63.5003 17.0053C63.7854 16.6158 64.0671 16.5799 64.3001 17.2489C64.4049 17.5643 64.4922 18.0264 64.5551 18.668C64.6416 19.0669 64.7261 19.5309 64.808 20.0671C64.9026 20.2969 65 20.541 65.1001 20.8"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M56.562 1.5L56.062 9C56.0103 9.62545 56.0618 6.5 57.562 5.00533C57.8472 4.61577 58.1288 4.57989 58.3619 5.2489C58.4667 5.5643 58.554 6.02636 58.6168 6.66804C58.7033 7.06686 58.7879 7.53088 58.8698 8.06714C58.9644 8.29692 59.0617 8.54099 59.1618 8.8"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M79.512 13.5L79.012 21C78.9603 21.6255 79.0118 18.5 80.512 17.0053C80.7972 16.6158 81.0788 16.5799 81.3119 17.2489C81.4167 17.5643 81.504 18.0264 81.5668 18.668C81.6533 19.0669 81.7379 19.5309 81.8198 20.0671C81.9144 20.2969 82.0117 20.541 82.1118 20.8"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M70 19.8C69.9984 19.9764 68.5462 21.3408 67.5 20.7C67.0618 20.4316 66.7611 19.9824 66.7624 19.2617M66.7624 19.2617C66.7631 18.9095 66.8358 18.4924 67 18C67.2726 17.5911 67.1439 17.5465 67.6794 17.0733C68.2148 16.6 68.5 16.5 69 16.6C69.5 16.7 69.5 17.5 69.2 18C68.56 18.8 67.3083 19.1745 66.7624 19.2617Z"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M71.7386 14.7237C71.7386 14.7431 71.7282 14.8 71.7421 14.814C71.771 14.8429 71.7855 14.7702 71.7855 14.7549C71.7855 14.6955 71.6879 14.69 71.6449 14.7115C71.5294 14.7693 71.6628 14.9581 71.7543 14.9581"
                    stroke="black" strokeWidth="0.7" strokeLinecap="round"/>
                <path
                    d="M76.3 14.8C75.9736 14.4012 75.1689 14.1895 74.6315 15.1826C74.3803 15.6466 73.8052 16.5469 73.8159 17.5997C73.8203 18.0382 73.7428 18.7577 74.1165 18.6115C75.0469 18.2474 75.1051 18.279 75.7732 17.5997C75.9934 17.3181 76.2195 17.0105 76.4426 16.7037C76.6793 16.2918 76.855 15.8989 76.9165 15.6115C76.9848 15.505 77.0129 15.6761 76.8902 16.1911C77.1329 17.0718 77.1086 18.1734 76.9324 19.2309C76.5 22 76.0605 22.3077 75.5 22.8"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M97 14.15C96.3196 14.3813 95.7058 15.0609 95.2454 15.9194C94.9611 16.7369 94.7354 17.4872 94.5876 18.1549C94.4172 18.9244 94.3907 19.8248 94.665 20.5M94.665 20.5C94.717 20.6279 94.7798 20.7478 94.8544 20.8571C95.3969 21.652 95.6898 21.69 96.5 21.6C96.9966 21.4013 97.6472 20.8357 97.7531 19.9031C98 18.5 97.7531 17.5625 97 17.5C95.4 17.5 94.7767 19.5 94.665 20.5Z"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M99.6 22.2C100.207 22.1581 100.915 21.9717 101.588 21.6848C102.199 21.3315 102.756 20.968 103.202 20.5994C103.829 19.8675 104.237 19.2996 104.312 18.8173C104.453 17.9162 103.5 16 100.5 16.5C99.8818 17.0599 99.7011 17.2308 100 17C100.175 15.8827 101 15 101 14.5C101 14 104.376 14.48 104.8 14.2"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M107.1 23.8C106.776 22.982 106.804 18.7788 107.5 16.1M106.3 16.9C108 15.5 110.5 15.8615 110.499 16.7187C110.499 16.9295 110.375 17.2341 110.098 17.6606C109.947 17.8198 109.766 17.9965 109.551 18.1925C109.275 18.3971 108.927 18.6253 108.5 18.8794C107.939 19.1276 107.276 19.4005 106.5 19.7"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path
                    d="M111.9 20.4C111.982 19.8245 112 19 112.546 18C112.95 17.0585 113.587 16.1081 114.6 15.5M111.9 16C112.13 16.2614 112 16.5 112.694 17.1517C112.996 17.5967 113.381 18.1166 113.923 18.6759C114.345 19.2871 114.622 19.7403 114.5 19.7"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M116.85 19.5C117.017 19.8333 117.35 20.3 116.75 21.3" stroke="black" strokeWidth="0.5"
                      strokeLinecap="round"/>
                <path
                    d="M61.75 2C61.25 3 60.35 5.3 60.75 8.9M59.15 5.1C59.95 4.9 59.95 5 60.75 4.62562C62.0948 4.3928 63.2775 4.23624 62.75 4.5"
                    stroke="black" strokeWidth="0.5" strokeLinecap="round"/>
                <path d="M72.52 8.5L74.77 5.6M72.57 3.7C73.6329 4.6493 74.87 6 74.87 6" stroke="black"
                      strokeWidth="0.5" strokeLinecap="round"/>
            </svg>


            <svg ref={cloudBorderRef}
                 className={`cloud-border ${cloudBorderInView ? 'cloud-border-animate' : ''}`} width="4149"
                 height="1958" viewBox="0 0 4149 1958" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2970 214C3318.46 105.219 3698 166 3746 438" stroke="black" strokeLinecap="round"/>
                <path d="M1970 166C2210 -58 2730 -50 2970 214" stroke="black" strokeLinecap="round"/>
                <path d="M1210 166C1370 -41.9999 1794 -66 1970 166" stroke="black" strokeLinecap="round"/>
                <path d="M481.999 374C481.999 54.0001 946 -73.9999 1210 166" stroke="black" strokeLinecap="round"/>
                <path d="M57.9994 798C-142 486 234 262 481.999 374" stroke="black" strokeLinecap="round"/>
                <path d="M233.999 1622C169.999 1894 641.999 2030 818 1774" stroke="black" strokeLinecap="round"/>
                <path d="M818 1774C937.999 2018 1438 1938 1490 1774" stroke="black" strokeLinecap="round"/>
                <path d="M2098 1774C2218 2030 2630 2006 2730 1774" stroke="black" strokeLinecap="round"/>
                <path d="M3413 1750C3845 1806 3937 1730 3957 1598" stroke="black" strokeLinecap="round"/>
                <path d="M2981 1806C3257 1954 3445 1862 3413 1750" stroke="black" strokeLinecap="round"/>
                <path d="M3957 1598C4129 1598 4205 1438 4101 1294" stroke="black" strokeLinecap="round"/>
                <path d="M3746 438C3983.21 434.045 4133.86 497.631 4114 798" stroke="black" strokeLinecap="round"/>
            </svg>

            <h3 className={"sectionOne-header"}>
                Уеб дизайн
            </h3>

            <p className={'sectionOne-text'}>
                Проектираме и изработваме динамични уеб сайтове,<br/>
                съобразени със съвременните изисквания за визия и<br/> функционалност,
                уеб базирани приложения, системи с<br/> електронно разплащане, електронни магазини,<br/>
                индивидуални бизнес приложения.
            </p>

            <motion.div className={"lemon-container"}
                        ref={ref}
                        initial={{y: '36.3rem'}}
                        animate={isAnimating ? {y: 0} : {}}
                        transition={{duration: 1, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img src={lemon} className={"lemon-img"} alt="lemon logo"/>
            </motion.div>

            <img src={Shadow} alt="lemonShadow img" className={"lemonShadow-img"}/>

            <svg ref={laptopStickmanRef}
                 className={`laptop-stickman ${laptopStickmanInView ? 'laptop-stickman-animate' : ''}`} width="169"
                 height="299" viewBox="0 0 169 299" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_0_1)">
                    <path
                        d="M15.5005 102C12.7254 102.93 1.00057 147.5 0.500504 155C0.000442822 162.5 76.0006 178 76.0006 178"
                        stroke="black"/>
                    <path d="M15.5 102C15.5 102 25.5733 140.599 34.5 144C55.5 152 87.0001 159 87.0001 159"
                          stroke="black"/>
                    <path d="M145.5 118.5L154 138" stroke="black"/>
                    <path d="M125 129L140 144" stroke="black"/>
                    <path d="M102 144L125 159" stroke="black"/>
                    <path d="M68 181.5H136.5L168 129" stroke="black"/>
                    <path
                        d="M13 201.5C32.3883 199.654 46.935 198.216 58 197.688C72.3465 197.688 83.0179 197.117 91.0001 197.392C96.2101 197.572 100.288 197.451 103.5 197.801C106.475 198.126 108.533 197.867 110 198.283C115.07 199.502 118.5 222.5 115 267L130.5 282.5"
                        stroke="black"/>
                    <path
                        d="M25 67C21 81.5 15.5 102 15.5 102C11.481 121.044 10.4959 131.915 10 151.5C10 171.5 10 180 13 201.5C26.5566 207.1 38.3193 211.609 48.5 215.5C76.2506 226.106 96 233.5 96 233.5C102.5 235.5 108.93 272.594 109 290C114.637 294.427 117.538 296.342 123 298"
                        stroke="black"/>
                    <path
                        d="M65.0678 43.1822C58.0742 61.1542 39.8093 70.6775 24.8499 64.8562C9.8981 59.0379 3.25299 39.836 10.2501 21.855C17.2214 3.93999 33.8071 -2.60867 48.8186 3.23285C63.839 9.07784 72.0356 25.2762 65.0678 43.1822Z"
                        stroke="black"/>
                </g>
                <defs>
                    <clipPath id="clip0_0_1">
                        <rect width="169" height="299" fill="white"/>
                    </clipPath>
                </defs>
            </svg>


            <svg ref={lightbulbStickmanRef}
                 className={`lightbulb-stickman ${lightbulbStickmanInView ? 'lightbulb-stickman-animate' : ''}`}
                 width="589" height="1071" viewBox="0 0 589 1071" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M269.946 456H370.708C381.944 456 381.582 439 370.708 439H269.946M270.264 439C259.028 439.045 259.447 456.043 270.32 456"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M274.267 473H286C291.75 473 290 477 290 477C282 507.735 319.5 508.5 331 506.5M274.267 456L368.056 456C378 456 378.528 473 368.253 473L357.5 473M274.557 456C264.282 456.045 264.665 473.044 274.609 473"
                    stroke="black" strokeLinecap="round"/>
                <path d="M358 473C352.25 473 354 477 354 477" stroke="black" strokeLinecap="round"/>
                <path d="M354 477C362 507.734 324.5 508.5 313 506.5" stroke="black" strokeLinecap="round"/>
                <path
                    d="M274.267 439H366.417C376.693 439 376.361 422 366.417 422H274.267M274.557 422C264.282 422.045 264.665 439.043 274.609 439"
                    stroke="black" strokeLinecap="round"/>
                <path d="M428 310C433.227 282.868 434.277 260.136 433 239.399C427 142 225 123.5 206.8 239"
                      stroke="black" strokeLinecap="round"/>
                <path
                    d="M210 311C206.294 284.812 202.433 257.496 207 238M279.057 422C280 418.5 279.5 415.5 279.057 411.5M279.083 412C277.982 389.189 269.581 383.99 244.512 369C219.443 354.01 209.477 311.076 209.737 309"
                    stroke="black" strokeLinecap="round"/>
                <path
                    d="M359 422C359 418.262 358.152 416 358.321 412.5C359.422 389.689 368.001 383.99 393.071 369C418.14 354.01 428.106 311.076 427.846 309"
                    stroke="black" strokeLinecap="round"/>
                <path d="M262 263C256.5 248.5 269.838 252.593 320.75 263C358.657 257.656 389 248.5 380 263"
                      stroke="black" strokeLinecap="round"/>
                <path d="M380.5 262.5C329 355.5 337 381.5 337 422" stroke="black" strokeLinecap="round"/>
                <path d="M262 263C313.5 356 304.5 382 304.5 422.5" stroke="black" strokeLinecap="round"/>
                <path d="M588 302L469 292" stroke="black"/>
                <path d="M588 186L469 208" stroke="black"/>
                <path d="M506 34L432 130" stroke="black"/>
                <path d="M321.02 0L321.02 96" stroke="black"/>
                <path d="M137 34L203 130" stroke="black"/>
                <path d="M45 186L166 208" stroke="black"/>
                <path d="M33 302L166 292" stroke="black"/>
                <path d="M80 432L189 384" stroke="black"/>
                <path d="M158.5 673V736V856" stroke="black"/>
                <path d="M158.5 856C148.746 931.618 147.849 970.405 125 1034" stroke="black"/>
                <path d="M158.5 856C208 864 202 1025 210 1034" stroke="black"/>
                <path d="M158.5 736C146 740.128 121.5 757.5 110 833.5" stroke="black"/>
                <path d="M158.5 736C213 718 234.601 696.634 231 611" stroke="black"/>
                <path d="M84.5 1070H101.5M0 1070H18" stroke="black"/>
                <path
                    d="M198.5 633C198.5 654.815 180.815 672.5 159 672.5C137.185 672.5 119.5 654.815 119.5 633C119.5 611.185 137.185 593.5 159 593.5C180.815 593.5 198.5 611.185 198.5 633Z"
                    stroke="black"/>
                <path d="M522 427L437 366" stroke="black"/>
            </svg>


            <motion.div className={"trampoline-container"}
                        ref={ref}
                        initial={{x: '-45rem', y: 0}}
                        animate={isAnimating ? {x: 0, y: 0} : {}}
                        transition={{duration: 0.5, ease: 'easeOut'}}
                        style={{
                            margin: '0 auto',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img className={"trampoline-img"} src={TrampolineImg} alt="trampoline img"/>
            </motion.div>
            <img src={Shadow} alt="trampoline img" className={"trampolineShadow-img"}/>
        </section>
    )
}