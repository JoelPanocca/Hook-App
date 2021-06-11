import React from 'react'
import { useCounter } from '../../hooks/useCounter'

import './counter.css'

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter(200);
    return (
        <>
            <h1>Contador con CustomHook: {state} </h1>
            <hr />
            <button type="button" className="btn btn-primary margin-left" onClick={decrement} > -1 </button>
            <button type="button" className="btn btn-primary margin-left" onClick={reset} > Reset </button>
            <button type="button" className="btn btn-primary margin-left" onClick={increment} > +1 </button>
        </>
    )
}
