import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import '../02-useEffect/effects.css';
import { Blockquote } from './Blockquote';
import { LoadingMessage } from './LoadingMessage';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { author, quote } = !!data && data[0];//if data exists, return pos 0

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />
            { loading ? <LoadingMessage /> : <Blockquote quote={quote} author={author}  />}

            <button className="btn btn-primary" onClick={increment}>
                Next quote
            </button>
        </div>
    )
}
