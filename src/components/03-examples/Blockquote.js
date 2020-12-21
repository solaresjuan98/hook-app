import React, {useLayoutEffect, useRef, useState} from 'react';
import '../05-useLayoutEffect/layout.css';


export const Blockquote = ({quote, author}) => {
    
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({})
    
    useLayoutEffect(() => {
        
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [])

    return (
        <div>
            <blockquote className="blockquote text-right">
                <p 
                    className="mb-0"
                    ref={pTag}    
                >
                    {quote}
                </p>
                <br />
               {/*  <footer className="blockquote-footer">
                    {author}
                </footer> */}
            </blockquote>

            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
        </div>
    )
}
