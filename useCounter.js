import { useState } from "react"

export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)

    const increment = (value = 1) => {
        setCounter((current) => current + value);
    }

    const decrement = (value = 1) => {
        // if (counter > 0) 
            setCounter((current) => current - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        // counter: counter, // si se trata del mismo nombre, se puede resumir en
        counter,
        increment,
        decrement,
        reset
    }
}