import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import { Blockquote } from '../03-examples/Blockquote';

export const LayoutEffect = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];//if data exists, return pos 0


    return (
        <div>
            <h1>LayoutEffect</h1>
            <hr />

            <Blockquote author={author} quote={quote} />
            <button className="btn btn-primary" onClick={increment}>
                Next quote
            </button>
        </div>
    )
}
