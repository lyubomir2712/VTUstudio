import bowImg from "../../assets/Images/SectionFive/bow.png";
import arrowImg from "../../assets/Images/SectionFive/arrow.png";
import Footer from "../Footer/Footer.jsx";
import './SectionFive.css'
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";
export default function SectionFive() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1,
    });

    return (
        <section id={"sectionFive"}>

            <img src={bowImg} className={"bow-img"} alt={"bow img"}/>

            <motion.div className={"arrow-container"}
                        ref={ref}
                        initial={{x: 0, y: 0}}
                        animate={inView ? {
                            x: '22.5rem',
                            y: '-16.5rem'
                        } : {}}
                        transition={{duration: 1.25, ease: 'easeInOut'}}
                        style={{
                            margin: '0 auto',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
            >
                <img src={arrowImg} className={"arrow-img"} alt={"arrow img"}/>
            </motion.div>


            <h3 className={"sectionFive-header"}>Контакти</h3>

            <p className={"sectionFive-text-one"}>
                Адрес: Дряново, п.код: 5370,<br/>
                ул."3-ти март" №12<br/>
            </p>

            <p className={"sectionFive-text-two"}>тел.: 0889 77 80 80</p>

            <p className={"sectionFive-text-three"}>e-mail: studio@sevenstudio.net</p>

            <svg className={"cloud-one"} width="409" height="280" viewBox="0 0 409 280" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M87.0001 49C89 52 91.3483 54 93.5 55M141 34C141.512 35 142.6 37.2 143 40" stroke="black"
                      stroke-linecap="round"/>
                <path d="M105 213C-7.99997 241 -33 164 49.0001 130" stroke="black" stroke-linecap="round"/>
                <path d="M49.0001 130C-2.99999 95.9999 8.00001 49 87.0001 49" stroke="black" stroke-linecap="round"/>
                <path d="M87.0001 49C69.0088 8.868 120 -7.00004 141 34" stroke="black" stroke-linecap="round"/>
                <path d="M141 34C194 -24 290 1.99998 345 54" stroke="black" stroke-linecap="round"/>
                <path d="M345 54C382 34 430 77 377 95.9999" stroke="black" stroke-linecap="round"/>
                <path d="M377 96C439 96 403 173 317 164" stroke="black" stroke-linecap="round"/>
                <path d="M317 164C368 196 317 254 263 223" stroke="black" stroke-linecap="round"/>
                <path d="M105 213C49.0001 297 190 302 263 223" stroke="black" stroke-linecap="round"/>
                <path d="M137 133C124 152.667 112.6 188 171 172" stroke="black" stroke-linecap="round"/>
                <path d="M245 57C257.333 52.6667 284 50.4 292 76" stroke="black"/>
            </svg>


            <svg className={"cloud-two"} width="658" height="420" viewBox="0 0 658 420" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M74.0997 340L65 334.063" stroke="black" stroke-linecap="round"/>
                <path d="M607 94C668 107 670 203 618 233" stroke="black" stroke-linecap="round"/>
                <path d="M618 233C739 259 548 403 453 361" stroke="black" stroke-linecap="round"/>
                <path d="M453 361C436 438 323 443 323 350" stroke="black" stroke-linecap="round"/>
                <path d="M323 350C275 476 40.5 399.5 74.0997 340" stroke="black" stroke-linecap="round"/>
                <path d="M93.0001 150C-27.9445 20.29 -21.9656 269.11 65 334.063" stroke="black" stroke-linecap="round"/>
                <path d="M93.0001 150C105 78 204 50 275 94" stroke="black" stroke-linecap="round"/>
                <path d="M422 309C452.333 311 519.2 300.4 544 242" stroke="black"/>
                <path d="M275 94C612.868 -35.7867 688.387 -23.159 607 94" stroke="black" stroke-linecap="round"/>
            </svg>


            <svg className={"contact-list"} width="334" height="403" viewBox="0 0 334 403" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M273.5 2.5C281 64.379 258.5 70.7085 287.5 70C298.375 70.487 315.511 70 332.5 70" stroke="black"
                      stroke-linecap="round"/>
                <path
                    d="M64.3626 52C64.3626 58.3513 59.2138 63.5 52.8626 63.5C46.5113 63.5 41.3626 58.3513 41.3626 52C41.3626 45.6487 46.5113 40.5 52.8626 40.5C59.2138 40.5 64.3626 45.6487 64.3626 52Z"
                    stroke="black"/>
                <path d="M33 98.3643H72.5C72.5 52 33 52.5 33 98.3643Z" stroke="black"/>
                <path
                    d="M64.3626 332C64.3626 338.351 59.2138 343.5 52.8626 343.5C46.5113 343.5 41.3626 338.351 41.3626 332C41.3626 325.649 46.5113 320.5 52.8626 320.5C59.2138 320.5 64.3626 325.649 64.3626 332Z"
                    stroke="black"/>
                <path d="M33 378.364H72.5C72.5 332 33 332.5 33 378.364Z" stroke="black"/>
                <path
                    d="M64.3626 240C64.3626 246.351 59.2138 251.5 52.8626 251.5C46.5113 251.5 41.3626 246.351 41.3626 240C41.3626 233.649 46.5113 228.5 52.8626 228.5C59.2138 228.5 64.3626 233.649 64.3626 240Z"
                    stroke="black"/>
                <path d="M33 286.364H72.5C72.5 240 33 240.5 33 286.364Z" stroke="black"/>
                <path
                    d="M64.3626 147C64.3626 153.351 59.2138 158.5 52.8626 158.5C46.5113 158.5 41.3626 153.351 41.3626 147C41.3626 140.649 46.5113 135.5 52.8626 135.5C59.2138 135.5 64.3626 140.649 64.3626 147Z"
                    stroke="black"/>
                <path d="M33 193.364H72.5C72.5 147 33 147.5 33 193.364Z" stroke="black"/>
                <path d="M82 81H110" stroke="black" stroke-linecap="round"/>
                <path d="M82 361H110" stroke="black" stroke-linecap="round"/>
                <path d="M82 269H110" stroke="black" stroke-linecap="round"/>
                <path d="M82 176H110" stroke="black" stroke-linecap="round"/>
                <path d="M139 64H249" stroke="black" stroke-linecap="round"/>
                <path d="M167 193H277" stroke="black" stroke-linecap="round"/>
                <path d="M167 159H277" stroke="black" stroke-linecap="round"/>
                <path d="M167 176H277" stroke="black" stroke-linecap="round"/>
                <path d="M139 98H249" stroke="black" stroke-linecap="round"/>
                <path d="M139 81H249" stroke="black" stroke-linecap="round"/>
                <path d="M167 252H277" stroke="black" stroke-linecap="round"/>
                <path d="M167 269H277" stroke="black" stroke-linecap="round"/>
                <path d="M167 286H277" stroke="black" stroke-linecap="round"/>
                <path d="M167 344H277" stroke="black" stroke-linecap="round"/>
                <path d="M167 361H277" stroke="black" stroke-linecap="round"/>
                <path d="M167 378H277" stroke="black" stroke-linecap="round"/>
                <path d="M267.385 0.916527L216.886 0.795929" stroke="black"/>
                <path d="M1.38588 46.4168C1.38589 71.1674 1.38601 283.01 1.38606 367.417" stroke="black"
                      stroke-linecap="round"/>
                <path d="M1.38606 367.417C1.38608 395.5 10.5 401.917 45.386 401.917" stroke="black"
                      stroke-linecap="round"/>
                <path d="M45.386 401.917H302.386" stroke="black" stroke-linecap="round"/>
                <path d="M333.385 362.917L333.33 72" stroke="black" stroke-linecap="round"/>
                <path d="M302.386 401.917C333.385 401.917 333.385 391 333.385 362.917" stroke="black"
                      stroke-linecap="round"/>
                <path
                    d="M267.385 0.916534C272.886 1.91671 277.386 1.91671 286.886 14.5457C290.71 18.6374 295.913 24.6136 303.209 33.4167C310.061 40.7945 318.456 50.359 329.423 63.4167C331.506 66.8066 333.33 69.5 333.33 72"
                    stroke="black" stroke-linecap="round"/>
                <path
                    d="M267.385 0.916522C267.385 0.916522 246.9 0.865436 216.886 0.795924C198.299 0.752879 167.5 0.795931 137 0.795927C87 0.79592 53 0.795924 28.7434 0.795924"
                    stroke="black" stroke-linecap="round"/>
                <path d="M1.38588 46.4168C1.38587 15.4167 -2.11404 0.795929 28.7434 0.795929" stroke="black"
                      stroke-linecap="round"/>
            </svg>


            <svg className={"pirateShip-stickman"} width="1049" height="787" viewBox="0 0 1049 787" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M210 523C265 811 882 733 808 511" stroke="black" stroke-linecap="round"/>
                <path d="M210 523L403.5 528" stroke="black" stroke-linecap="round"/>
                <path d="M350 490C357.5 496 380 514 403.5 528" stroke="black" stroke-linecap="round"/>
                <path d="M210 523L207 506.5L204.214 491.179C204.103 490.565 204.574 490 205.198 490H350" stroke="black"
                      stroke-linecap="round"/>
                <path d="M808 511C619.5 535.7 420.5 536 403.5 528" stroke="black" stroke-linecap="round"/>
                <path
                    d="M227.25 504.75C227.231 504.905 226.976 505.071 226.903 505.25C226.82 505.452 227.541 505.417 227.625 505.312C227.939 504.92 227.582 504.446 227.125 504.75"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M256 505.5C255.493 505.563 255.397 506.25 256.125 506.25C256.972 506.25 256.791 505.521 256.25 505.25"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M280.75 506.25C280.694 505.8 280.361 506.201 280.264 505.861C280.133 505.402 280.75 505.401 280.75 506"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M308.5 505.75C308.463 506.044 307.486 506.75 308.375 506.75C309.164 506.75 309.351 506.702 309 506"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M335 506.5C334.25 506.594 335.228 507.768 335.944 507.194C336.813 506.499 336.445 506.25 335.5 506.25"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M356.5 506.75C356.464 507.037 356.027 507.353 356.625 507.486C356.822 507.53 357.544 507.595 357.694 507.444C358.558 506.581 356.888 506.5 356.5 506.5"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M215 543.5C292.955 559.248 500.176 571.204 660.5 563M814 541.5C777.143 548.446 742.334 555.482 700.5 559"
                    stroke="black"/>
                <path d="M660.5 563C660.5 536.165 700.5 534.457 700.5 559C700.5 588.957 660.5 589.165 660.5 563Z"
                      stroke="black"/>
                <path d="M232 583C354.109 607.633 699.307 612.678 809.5 577" stroke="black"/>
                <path d="M280.5 639C419.5 668 635 663 769.5 634.5" stroke="black" stroke-linecap="round"/>
                <path d="M808 511L909.634 492.035C910.746 491.827 911.582 493.03 911 494V494L811 523" stroke="black"
                      stroke-linecap="round"/>
                <path d="M534 354C551.33 445.199 544.168 492.225 544.5 532.5" stroke="black" stroke-linecap="round"/>
                <path d="M509 533C516.349 459.275 517.954 415.779 516 354" stroke="black" stroke-linecap="round"/>
                <path d="M499 354C490.287 438.995 483.334 478.313 471 532.5" stroke="black" stroke-linecap="round"/>
                <path d="M483.219 474H545.5" stroke="black" stroke-linecap="round"/>
                <path d="M490 434H544.25" stroke="black" stroke-linecap="round"/>
                <path d="M494.5 399C512.18 399 522.82 399 540.5 399" stroke="black" stroke-linecap="round"/>
                <path d="M309 355.5C373.333 352.5 571.6 351.8 666 359" stroke="black" stroke-linecap="round"/>
                <path d="M666 359C660.333 328 648.6 248 647 176" stroke="black" stroke-linecap="round"/>
                <path d="M309 355.5C317 339.167 335.6 283.2 326 176" stroke="black" stroke-linecap="round"/>
                <path d="M495 8V79V154" stroke="black" stroke-linecap="round"/>
                <path d="M684 154L495 79" stroke="black" stroke-linecap="round"/>
                <path d="M288 154L495 79" stroke="black" stroke-linecap="round"/>
                <path d="M684 154H495H288" stroke="black" stroke-linecap="round"/>
                <path d="M288 176H684" stroke="black" stroke-linecap="round"/>
                <path
                    d="M684 175.988C686.352 179.711 688.345 181.549 690 181.999C691.025 181.999 691.789 181.063 692.353 179.488C693.262 171.958 692.73 155.634 692.47 149.186C692.404 147.559 691.228 145.992 689.677 146.488V146.488C688.147 146.976 686.263 149.235 684 153.988"
                    stroke="black" stroke-linecap="round"/>
                <path
                    d="M288 176C285.612 179.764 283.588 181.745 281.907 182.2C280.866 182.2 280.091 181.253 279.518 179.661C278.594 172.047 279.135 155.532 279.399 149.023C279.464 147.417 280.647 146.061 282.235 146.308V146.308C283.473 146.5 285.702 149.197 288 154"
                    stroke="black" stroke-linecap="round"/>
                <path
                    d="M493.536 4.25C493.474 3.75369 490.031 4.4177 491.439 6.13889C492.668 7.641 494.339 8.35727 496.189 7.36111C497.036 6.90491 499.359 5.46648 498.23 4.05556C497.053 2.58399 495.407 2 493.536 2C492.446 2 491.286 2.72832 491.286 3.875C491.286 4.35496 491.295 5.70706 491.661 6C491.88 6.17543 491.384 4.78174 491.272 4.38889C490.974 3.34466 490.932 4.53766 491.092 5.05556C491.324 5.81249 492.108 6.4528 492.98 6.19444C494.687 5.68886 494.901 5.32797 495.786 4"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M495 78.754C528.593 94.8742 552.5 88.1635 563 83.254C610.001 61.2772 644.701 68.1795 660 78.754"
                    stroke="black" stroke-linecap="round"/>
                <path d="M660 8.75403V43.754V78.754" stroke="black" stroke-linecap="round"/>
                <path
                    d="M495 8.75401C510.658 34.1611 544.5 32.2539 563 23.254C607.964 1.37967 639.429 -3.89438 660 8.75401"
                    stroke="black" stroke-linecap="round"/>
                <path d="M553 63.5L598.5 37" stroke="black" stroke-linecap="round"/>
                <path d="M599.152 36.25C598.622 36.3162 599.652 38.1334 599.652 36" stroke="black" stroke-width="3"
                      stroke-linecap="round"/>
                <path d="M598.586 63.25C597.135 63.25 598.836 64.8507 598.836 63" stroke="black" stroke-width="3"
                      stroke-linecap="round"/>
                <path d="M552.685 36C551.009 36.1862 552.935 37.7478 552.935 36" stroke="black" stroke-width="3"
                      stroke-linecap="round"/>
                <path
                    d="M552.028 63.5C551.989 63.8517 551.884 64.8665 552.639 64.1111C553.194 63.5562 552.781 63.5052 552.528 63"
                    stroke="black" stroke-width="3" stroke-linecap="round"/>
                <path
                    d="M707 411C709.082 417.112 711.145 425.456 712.444 435.06M690 523C703.302 508.877 709.868 491.348 712.444 474M712.444 474C721.462 471.5 740.3 476.8 743.5 518M712.444 474C714.474 460.323 714.026 446.757 712.444 435.06M712.444 435.06C718.796 433.373 733.9 426.8 743.5 414M743.5 414C748.5 412 763.2 399.1 766 389.5C768.645 395.348 770.5 411 752.773 414M743.5 414C747.187 414.395 750.247 414.362 752.773 414M743.5 414C743.5 421.5 752.773 420.5 752.773 414"
                    stroke="black" stroke-linecap="round"/>
                <path d="M707 411C690 414.5 686.5 390.5 701.5 387.5C716.5 384.5 724 407.5 707 411Z" stroke="black"
                      stroke-linecap="round"/>
                <path
                    d="M686.299 402.885C662.429 414.582 655.958 392.827 655 388.827C664.5 393 676 393.5 677 384C669 369 670.208 354.559 689 348.827C708.431 344.801 719.345 356.165 721.572 367.853C722.108 370.665 723.131 373.69 725.832 374.639C732.665 377.039 740.041 371.394 745.5 366.5C747 383 735.5 395.267 726 393C721.091 391.829 717.15 390.754 714.009 389.765C705.815 387.184 699.735 385.488 694.319 392.157C693.153 393.593 691.995 395.433 690.884 397.826C689.901 399.941 688.394 401.859 686.299 402.885Z"
                    stroke="black" stroke-linecap="round"/>
                <path d="M710.5 365L688 382M684 368.5L711.5 379" stroke="black" stroke-linecap="round"/>
                <path d="M688 382.125V382" stroke="black" stroke-width="2" stroke-linecap="round"/>
                <path d="M712.125 379C712.111 379.115 712.084 379.083 712 379.125" stroke="black" stroke-width="2"
                      stroke-linecap="round"/>
                <path d="M711.125 364.5C711.01 364.514 711.042 364.541 711 364.625" stroke="black" stroke-width="2"
                      stroke-linecap="round"/>
                <path d="M684.125 368.5H684" stroke="black" stroke-width="2" stroke-linecap="round"/>
                <path
                    d="M700.421 365.312L703.254 364.053C703.783 363.818 704.005 363.179 703.686 362.697C698.494 354.858 686.655 360.943 689.41 367.473C689.577 367.869 690.015 368.062 690.437 367.977L693.865 367.292C694.359 367.193 694.85 367.478 695.01 367.956L695.445 369.263C695.607 369.749 696.111 370.034 696.611 369.923L699.327 369.32C699.837 369.206 700.173 368.719 700.1 368.202L699.837 366.367C699.774 365.924 700.013 365.493 700.421 365.312Z"
                    stroke="black" stroke-linecap="round"/>
                <path
                    d="M581.889 35.8116L587.035 33.4961C587.559 33.2603 587.775 32.6224 587.478 32.1306C579.721 19.2855 560.998 29.0519 565.767 39.289C565.95 39.6817 566.391 39.8839 566.815 39.7979L572.783 38.5894C573.28 38.4889 573.773 38.7756 573.932 39.2568L574.88 42.1379C575.041 42.6269 575.547 42.9138 576.049 42.8008L581.06 41.6734C581.568 41.5591 581.903 41.0738 581.831 40.5581L581.309 36.8632C581.247 36.4227 581.483 35.9941 581.889 35.8116Z"
                    stroke="black" stroke-linecap="round"/>
                <path
                    d="M0.999993 678.844L23.6283 663.203C30.4716 658.473 39.5282 658.473 46.3715 663.203L60.0081 672.629C65.6115 676.502 72.8008 677.256 79.0864 674.632L104.89 663.856C110.913 661.341 117.784 661.923 123.298 665.416L141.093 676.686C143.342 678.11 145.861 679.104 148.502 679.433C166.544 681.681 171.324 676.175 184.634 669.14C190.858 665.849 198.22 665.601 204.844 667.987C231.585 677.619 235.263 683.91 259 678.844C285.5 673.187 292.5 656 310.5 660"
                    stroke="black" stroke-linecap="round"/>
                <path
                    d="M742 655C764.038 666.562 765.704 665.371 784.151 663.706C785.705 663.566 787.249 663.253 788.73 662.765L820.822 652.194C826.042 650.474 831.741 650.979 836.578 653.59L851.065 661.408C856.958 664.589 864.052 664.608 869.963 661.461L888.912 651.372C895.163 648.043 902.681 648.349 908.884 651.767C914.959 655.114 919.634 657.272 923.258 658.651C932.42 662.135 945.379 661.383 954.748 658.501L976.419 651.833C981.289 650.334 986.546 650.751 991.119 652.997L1004.62 659.628C1009.64 662.096 1015.47 662.346 1020.68 660.317L1048.5 649.5"
                    stroke="black" stroke-linecap="round"/>
                <path d="M913 711.834C929.667 705.168 969 695.834 993 711.834" stroke="black" stroke-linecap="round"/>
                <path d="M827 757C845 762.333 887.4 769.8 913 757" stroke="black" stroke-linecap="round"/>
                <path d="M718 714.834C736.667 708.168 781.2 698.834 810 714.834" stroke="black" stroke-linecap="round"/>
                <path d="M606 764C618 770 652.4 778.4 694 764" stroke="black" stroke-linecap="round"/>
                <path d="M495 733.718C509.667 726.385 548.2 716.118 585 733.718" stroke="black" stroke-linecap="round"/>
                <path d="M335 772C345.667 782.667 378.6 797.6 425 772" stroke="black" stroke-linecap="round"/>
                <path d="M225 742.628C239.667 731.961 275.8 715.028 303 732.628" stroke="black" stroke-linecap="round"/>
                <path d="M91 725.5C104.333 727.5 138.5 735.4 162.5 721" stroke="black" stroke-linecap="round"/>
                <path d="M553 37C570.769 47.3489 580.731 53.1511 598.5 63.5" stroke="black" stroke-linecap="round"/>
            </svg>


            <svg className={"questionMark-stickman"} width="302" height="493" viewBox="0 0 302 493" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M40.222 367C32.1527 408.658 40.0955 438.169 9.22173 492M40.222 367C81.222 411 73.6377 416.697 75.222 492M40.222 367C48.0126 306.265 48.4558 283.333 40.222 268M40.222 268C75.222 315 111.222 289 75.222 225M40.222 268L26.2215 349"
                    stroke="black"/>
                <path d="M117.222 85C117.222 85 125.968 11.3504 192.222 2" stroke="black"/>
                <path d="M162.222 164C109.572 138.363 117.222 85 117.222 85" stroke="black"/>
                <path d="M170 156C170 148 140.315 147.53 131.5 107.5" stroke="black"/>
                <path d="M166.5 25C180 16.8333 215.8 4.99999 251 23" stroke="black"/>
                <path d="M131.5 107.5C127.064 81.8519 138.5 41 166.5 25" stroke="black"/>
                <path
                    d="M251 23C261.197 26.8333 282.074 44.3 288 73.5C289.667 84.8333 288 115 251 179.5L244.111 191.5C240.195 200.387 238.5 212.061 239.075 220.666C239.254 223.339 239.993 225.929 240.88 228.457L251.094 257.567C252.135 260.536 255.432 262.048 258.362 260.902C261.094 259.833 262.524 256.824 261.628 254.03L254.434 236.564C247.995 220.929 249.935 203.122 258.628 188.619C276.993 157.978 305.605 103.694 300 71"
                    stroke="black"/>
                <path d="M162.222 164C162.222 164 170 164 170 156" stroke="black"/>
                <path d="M192.222 2.00001C258.475 -7.35042 294 36 300 71" stroke="black"/>
                <path d="M34.2218 188C-7.28465 188 -12.7782 254 34.2218 254C81.2218 254 75.7283 188 34.2218 188Z"
                      stroke="black"/>
                <path d="M267.5 268C246.445 268 247.225 298 267.5 298C287.775 298 288.555 268 267.5 268Z"
                      stroke="black"/>
            </svg>
            <Footer/>
        </section>
    )
}