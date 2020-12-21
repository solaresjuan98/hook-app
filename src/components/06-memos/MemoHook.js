import React, { useMemo, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';
import { heavyProcess } from '../helpers/HeavyProcess';

export const MemoHook = () => {

    const { counter, increment } = useCounter(500);
    const [show, setShow] = useState(true);
    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div>
            <h1>MemoHook</h1>
            <h3>Counter: <small>{counter}</small> </h3>
            <hr />
            <p>{memoHeavyProcess}</p>
            <button
                className="btn btn-primary"
                onClick={increment}
            >
                Increment
            </button>

            <button
                className="btn btn-outline-primary ml-5"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </div>
    )
}
