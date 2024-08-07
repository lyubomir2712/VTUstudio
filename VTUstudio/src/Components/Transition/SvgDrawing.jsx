import { motion } from "framer-motion";

function SvgDrawing({ isInView }) {
    return (
        <div style={{ height: "850px", position: "relative" }}>
            <svg
                version="1.1"
                id="print-svg"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 1169 699"
                style={{ enableBackground: "new 0 0 1169 699" }}
                xmlSpace="preserve"
                className="svg-drawing"
            >
                <motion.path
                    id="colibri"
                    className="st0"
                    d="M303.2,260.8l38.3,19.1c0,0,22.1-7.6,22.8,1.8c0.4,5.6-7.7,2.4-4.6-1.8c2.6-3.6,8.1-2.4,19.1,6.4 c5.9,4.7,11.3,0.1,19.1-7.3c21.3-19.9,80.9-34.5,39.2-4.6s-49.6,30.2-40.1,22.8c6.9-5.3,18.6-13.5,31.9-21.9 c17.8-11.2,42-23.1,79.3-22.8c30.5,0.3-20.1,21.4-28.3,16.4s42.3-4.4,2.7,16.4c-28.9,15.2-46.8,3.2-27.4,1.8s32.6,14.5-21.9,26.4 c-29.8,6.5-29.7-8.5-17.3-3.6c18.5,7.3,19.4,48-18.2,18.2c-15.2-12,6.4-32.1,15.5,21.9s-0.6,63,18.2,75.7s16.7-10.6-26.4-44.7 c-36.8-29-49.5-28.7-50.2-61.1c-0.6-29.3-7-31.2-10.9-34.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.75 }}
                />
                <motion.path
                    className="st0"
                    d="M56.8,96.8C24.3,76,85.5,67.4,100.7,85c36.3-39.7,112,8,55.9,20.6c41.5,34.1-69.5,55.1-69.5,14.4 c-52,34.9-80.2,21-84.7,1.8s19.4-34.9,35.1-31.4s10.7,3.7,16,5.6"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.75 }}
                />
                <motion.path
                    className="st0"
                    d="M120,106.3c8.2-3.6,17,1.9,11.7,15.2"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.75 }}
                />
                <motion.path
                    id="cloud_3"
                    className="st0"
                    d="M730.1,45c9.6-38.5,69.2-38.5,69.2-9.1c16.1,0,29.3-34.7,56.4-34.7C870.2,1,882.6,13,880.3,27.7 c-2.7,11.6-7.3,12.8-10.9,19.2c14.1-1.3,33.2-17,42.2-3.6c1.7,5.8,2.7,9.6,9.7,7.3c0-12.8,15.5-17.5,24.6-11.9 c4.9,4.6,4.2,11.9,3.6,13.7c38.2-9.7,46.4-0.7,46.4,16.5c-4,7-3.3,19.9-69.2-1c-21-6.6-47.9,0.8-71,9.1c-24.4,8.2-61.1-0.9-91-0.9"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.75 }}
                />
                <motion.path
                    className="st1"
                    d="M1043.3,150.8c-22-6.7-14.8-33.6,16.4-21.9c2.3,1.5,5.3,4.2,7.5,5.7c0-5.6,10.5-7.5,18.9-5.7 c10.2,3.5,8.9,13,8.9,13c0-5.3,46.7-13.7,46.7,6.2c-0.3,4.6-3.9,5.4-5.7,7.5c1.1,0.2,2.1,0.3,3.2,0.5c9.3,0,17.1,1.2,23.3,7.3 c8.8,10.3,4.3,23.7-10.5,27.9c-5.5,0-21-0.5-21-8.2c0,0-1.8,8.7-7.5,12.6c-10.7,7.6-37.5,20-54.5,3c-12.3-12.4,13.3-19.9-2.7-12.8 c-15.2,3-22.2,3-31.9-1.8c-0.2-0.2-0.3-0.3-0.5-0.5c-15.8-15.8-1.8-32,9.1-32"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.75 }}
                />
                <motion.path
                    className="st1"
                    d="M1057.7,176.1c-2.2-7.6,11.9-13.6,15.5-8.7"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.75 }}
                />
                <motion.path
                    className="st1"
                    d="M1110.6,152.8c10.3,2.6,7.8,8.5,7.8,10.5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: isInView ? 1 : 0 }}
                    transition={{ duration: 1.75 }}
                />
            </svg>
        </div>
    )
}

export default SvgDrawing;