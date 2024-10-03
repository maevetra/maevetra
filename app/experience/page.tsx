"use client";

import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {experiences} from "@/lib/data";
import {useSectionInView} from "@/lib/hooks";
import Heading from "../components/heading";
import { motion } from "framer-motion";

//import { useTheme } from "@/context/theme-context";

export default function Experience() {
    const {ref} = useSectionInView("experience");

    return (
        <section
            id="experience"
            ref={ref}
            className="items-center justify-between -mt-12 pt-24 px-8 md:px-36 bg-[#F5F7FB]">
            <Heading
                number="03"
                title="My Experience & Education"
                description="My roles over the years"
                width="3/5"/>
            <div
                className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-dred">
                {
                    experiences.map((item, index) => (
                        <motion.div  initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }} viewport={{ once: true}}
                         key={index}
                            className=" border-dred relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">

                            <div
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-dred bg-white md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                            <div
                                className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow">
                                <div className="font-bold">{item.title}</div>

                                <time className="italic font-medium">{item.date}</time>
                                <div>{item.description}</div>
                            </div>
                        </motion.div>
                    ))
                }

            </div>
        </section>
    );
}