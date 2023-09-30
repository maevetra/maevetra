import React from 'react';
import Tag from './tags';

function Card(props) {
    return(
        <div className="container w-full flex-col mx-auto mt-4 p-0">
                <div className="grid grid-cols-10 w-full divide-x first-letter:space-y-3 rounded-md min-w-full bg-white ">
                    <div className='col-span-2 p-4'>
                        <span className="font-bold text-xl mb-4">{props.name}</span>
                        <div className="flex flex-col pt-2">
                            {props.languages.map(language => (
                                <Tag key={language} language={language} />
                            ))}
                        
                        </div>
                    </div>
                    <div className='col-span-7 p-8'>
                        <ul className='list-disc'>{props.description.map(line => (
                            <li>{line}</li>
                        ))}
                        </ul>
                    </div>
                    <div className='p-4 min-h-full content-end'>
                        <button className='align-middle'>
                            <a href={props.link} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512" color='#696969'>
                                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/>
                            </svg>
                            </a>
                        </button>
                   
                    </div>
                    
                </div>
        </div>
    )
}

export default Card;