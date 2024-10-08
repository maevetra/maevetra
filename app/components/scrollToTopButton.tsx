'use client'
import React, { useState, useEffect } from "react";
import { FaArrowCircleUp, FaChevronCircleUp, FaChevronUp } from "react-icons/fa";

const ScrollButton = () => {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const position = window.scrollY;
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
            /* you can also use 'auto' behaviour
         in place of 'smooth' */
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
    });

    return (
        <button className={`${visible ? 'inline' : 'hidden'} opacity-80 fixed bottom-[5%] left-[94%] hover:scale-110 text-center`}
                onClick={scrollToTop}>
            <FaChevronCircleUp className="h-[30px] w-[30px]"/>
        </button>
    );
};

export default ScrollButton;