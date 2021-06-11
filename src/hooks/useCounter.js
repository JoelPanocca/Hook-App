import { useState } from "react"

export const useCounter = (valorInitial = 100) => {
    const [state, setState] = useState(valorInitial);
    
    const increment = ( ) =>{
        setState(state + 1);
    }

    const decrement = ( ) =>{
        setState(state - 1);
    }

    const reset = () => {
        setState(valorInitial)
    }

    return {state, increment, decrement, reset};
}
