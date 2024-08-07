import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children }) => {
    const svgRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (svgRef.current) {
            observer.observe(svgRef.current);
        }

        return () => {
            if (svgRef.current) {
                observer.unobserve(svgRef.current);
            }
        };
    }, []);

    return (
        <div ref={svgRef}>
            {React.Children.map(children, child =>
                React.cloneElement(child, { isInView })
            )}
        </div>
    );
};

export default ScrollAnimation;
