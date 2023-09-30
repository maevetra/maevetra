"use client"

import {useState} from 'react';
import { playfair } from '../font';

const pages = [
    {
        title: 'Welcome',
        to: '/'
    },
    {
        title: 'About me',
        to: '/about'
    },
    {
        title: 'Treasures',
        to: '/projects'
    },
    {
        title: "Don't be a stranger",
        to: '/contact'
    }, 
    {
        title: "Outro",
        to: '/outro'
    }
]

const SideBar = () => {
    const [open, setOpen] = useState(false);
    const [heart, setHeart] = useState(true);
    return (
        <> {
            open
                ? (
                    <svg  className="flex items-center cursor-pointer fixed left-10 top-6 z-50" 
                    xmlns="http://www.w3.org/2000/svg" 
                    height="40" 
                    viewBox="0 0 384 512"
                    fill="#FFFFFF"
                    onClick={() => setOpen(!open)}>
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                    </svg>
                )
                : (
                    <svg
                        onClick={() => setOpen(!open)}
                        className="fixed z-30 flex items-center cursor-pointer left-10 top-6"
                        fill="#28364C"
                        viewBox="0 0 100 80"
                        width="40"
                        height="40">
                        <rect width="100" height="10"></rect>
                        <rect y="30" width="100" height="10"></rect>
                        <rect y="60" width="100" height="10"></rect>
                    </svg>
                )
        } 
            {open ? 
            <div className='fixed ease-in-out delay-150 duration-300 flex h-full w-4/6 shadow-lg'>
                <div className='w-2/5 h-full flex flex-col justify-center items-center bg-nblue'>
                    <div className='w-48 h-48 bg-white rounded-full'></div>
                    <div className={`text-white font-bold text-4xl mt-4 ${playfair.className}`}>Maeve Tra</div>
                    <div className='text-white mt-4 px-4 text-center'>"Enjoy your time while you're here."</div>
                    <div className='flex justify-evenly mt-10'>
                    <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 532 532" 
                    fill= {heart ? "#ff0000" : "#28364C"} stroke = {heart ? "none" : "#ffffff"} stroke-width="20"
                        onClick={() => setHeart(!heart)}>
                        <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"/></svg>
                    <svg className='mr-4' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" fill="#ffffff">
                            <path d="M403.8 34.4c12-5 25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V160H352c-10.1 0-19.6 4.7-25.6 12.8L284 229.3 244 176l31.2-41.6C293.3 110.2 321.8 96 352 96h32V64c0-12.9 7.8-24.6 19.8-29.6zM164 282.7L204 336l-31.2 41.6C154.7 401.8 126.2 416 96 416H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c10.1 0 19.6-4.7 25.6-12.8L164 282.7zm274.6 188c-9.2 9.2-22.9 11.9-34.9 6.9s-19.8-16.6-19.8-29.6V416H352c-30.2 0-58.7-14.2-76.8-38.4L121.6 172.8c-6-8.1-15.5-12.8-25.6-12.8H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H96c30.2 0 58.7 14.2 76.8 38.4L326.4 339.2c6 8.1 15.5 12.8 25.6 12.8h32V320c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l64 64c6 6 9.4 14.1 9.4 22.6s-3.4 16.6-9.4 22.6l-64 64z"/></svg>
                            <svg  className='mr-4' xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 448 512" fill="#ffffff">
                                <path d="M352 224c53 0 96-43 96-96s-43-96-96-96s-96 43-96 96c0 4 .2 8 .7 11.9l-94.1 47C145.4 170.2 121.9 160 96 160c-53 0-96 43-96 96s43 96 96 96c25.9 0 49.4-10.2 66.6-26.9l94.1 47c-.5 3.9-.7 7.8-.7 11.9c0 53 43 96 96 96s96-43 96-96s-43-96-96-96c-25.9 0-49.4 10.2-66.6 26.9l-94.1-47c.5-3.9 .7-7.8 .7-11.9s-.2-8-.7-11.9l94.1-47C302.6 213.8 326.1 224 352 224z"/></svg>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 128 512" fill="#ffffff">
                                    <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/></svg>
                    </div>
                </div>
                <div className='h-full w-3/5 flex flex-col justify-center bg-white px-20'>
                    <div>
                        <h2 className={`text-3xl font-black sm:text-3xl `}>THE CONTENT</h2>
                        <h2 className="text-2xl font-semibold sm:text-2xl text-dgrey">PLAYLIST <span className='text-lg font-normal'>/ {pages.length} tracks</span></h2>
                    </div>
                    <div className='mt-8 divide-y divide-solid w-full '>
                        {pages.map((page, index) => (
                            <div>
                                <a className='flex flex-cols justify-between pt-4' href={page.to}>
                            <div className='font-semibold text-lg text-dgrey'>0{index}. <span className='text-nblue'>{page.title}</span></div>
                            <div>
                            <svg className='inline-flex mr-4 pb-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
                                <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                            <svg className='inline-flex mr-4 pb-1' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                                <path d="M0 224c0 17.7 14.3 32 32 32s32-14.3 32-32c0-53 43-96 96-96H320v32c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l64-64c12.5-12.5 12.5-32.8 0-45.3l-64-64c-9.2-9.2-22.9-11.9-34.9-6.9S320 19.1 320 32V64H160C71.6 64 0 135.6 0 224zm512 64c0-17.7-14.3-32-32-32s-32 14.3-32 32c0 53-43 96-96 96H192V352c0-12.9-7.8-24.6-19.8-29.6s-25.7-2.2-34.9 6.9l-64 64c-12.5 12.5-12.5 32.8 0 45.3l64 64c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V448H352c88.4 0 160-71.6 160-160z"/></svg>
                            </div>
                            </a>
                        </div>
                        ))}
                        <div></div>

                    </div>
                </div>
            </div>
            : <></>}

</>
    )
}

export default SideBar;