"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes'
//import ResumePDF from './resume.pdf';

const NavBar = () => {

    return (
        <div className='flex absolute top-6 right-0 z-10'>
                    <div className="w-1/3 px-10 flex items-stretch justify-center">
                            <button className='mx-2'>
                                <a title='GitHub' href="https://github.com/maevetra" target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="30"
                                        fill="none"
                                        stroke="#28364C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round">
                                        <path
                                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                    </svg>
                                </a>
                            </button>
                            <button className='mx-2'>
                                <a
                                    title='LinkedIn'
                                    href="https://www.linkedin.com/in/maeve-tra-3a65911b4/"
                                    target="_blank">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="28"
                                        stroke="#28364C"
                                        strokeWidth="1">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z" strokeWidth="3"/>
                                            <path
                                                d="M12 9.55C12.917 8.613 14.111 8 15.5 8a5.5 5.5 0 0 1 5.5 5.5V21h-2v-7.5a3.5 3.5 0 0 0-7 0V21h-2V8.5h2v1.05zM5 6.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 2h2V21H4V8.5z"/>
                                        </g>
                                    </svg>
                                </a>
                            </button>
                            <button className='mx-2'>
                                <Link title='Resume' target='_blank' href='/resume.pdf'>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        height="1.75em"
                                        strokeWidth='0.5'
                                        stroke="#28364C"
                                        viewBox="0 0 384 512">
                                        <path
                                            d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z"/>
                                    </svg>
                                </Link>
                            </button>
                    </div>
        </div>
    )
}

export default NavBar;