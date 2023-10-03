import { playfair } from "../font";
const Heading = (props) => {
    return (
        <div className="mb-10">
            <h2 className="text-xl font-bold tracking-tight uppercase text-dgrey sm:text-xl">TRACK {props.number}.</h2>
            <h2 className="mt-1 text-4xl text-dred font-black uppercase tracking-wide sm:text-4xl">{props.title}</h2>
            <p className="mt-1 italic text-md text-dgrey leading-8 ">{props.description}</p>
            <div className="min-w-screen border-nblue border p-0 bg-white h-4 mb-4 mt-4">
                <div className={`bg-nblue h-3.5 ${props.width ? `w-${props.width}` : "w-1/5"}`}></div>
            </div>
            <div className='flex flex-cols justify-between'>
                <div className='inline-flex' id='info'>
                <svg className='inline-flex mr-4' fill="#580C0C"
                xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512">
                    <path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80V384 336 288C0 146.6 114.6 32 256 32s256 114.6 256 256v48 48 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48V304c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z"/></svg>
                    <div className="text-base">Portfolio - Maeve Tra</div>
                </div>
                <div className='inline-flex' id='play-btns'>
                    <svg
                        className='inline-flex mr-4'
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em" fill="#580C0C"
                        viewBox="0 0 320 512">
                        <path
                            d="M267.5 440.6c9.5 7.9 22.8 9.7 34.1 4.4s18.4-16.6 18.4-29V96c0-12.4-7.2-23.7-18.4-29s-24.5-3.6-34.1 4.4l-192 160L64 241V96c0-17.7-14.3-32-32-32S0 78.3 0 96V416c0 17.7 14.3 32 32 32s32-14.3 32-32V271l11.5 9.6 192 160z"/>
                    </svg>
                    <svg
                        className='inline-flex mr-4'
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em" fill="#580C0C"
                        viewBox="0 0 320 512">
                        <path
                            d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/>
                    </svg>
                    <svg
                        className='inline-flex mr-4'
                        xmlns="http://www.w3.org/2000/svg"
                        height="1.5em" fill="#580C0C"
                        viewBox="0 0 320 512">
                        <path
                            d="M52.5 440.6c-9.5 7.9-22.8 9.7-34.1 4.4S0 428.4 0 416V96C0 83.6 7.2 72.3 18.4 67s24.5-3.6 34.1 4.4l192 160L256 241V96c0-17.7 14.3-32 32-32s32 14.3 32 32V416c0 17.7-14.3 32-32 32s-32-14.3-32-32V271l-11.5 9.6-192 160z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 640 512" fill="#580C0C">
                        <path
                            d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"/></svg>
                </div>
            </div>
        </div>
    )
}

export default Heading;