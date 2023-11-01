import { useState } from "react";
import CounterButton from "./CounterButton";


export default function Counter() {

    const [count, setCount] = useState(0);

    function IncrementCounterParentFunction(by){
        return(
            setCount(count + by)
        )
    }

    function DecrementCounterParentFunction(by){
        return(
            setCount(count - by)
        )
    }

    function resetCounter(){
        return(
            setCount(count - count)
        )
    }

    return(
        <div>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} IncrementMethod={IncrementCounterParentFunction} DecrementMethod={DecrementCounterParentFunction}></CounterButton>
            <CounterButton by={2} IncrementMethod={IncrementCounterParentFunction} DecrementMethod={DecrementCounterParentFunction}></CounterButton>
            <CounterButton by={5} IncrementMethod={IncrementCounterParentFunction} DecrementMethod={DecrementCounterParentFunction}></CounterButton>
            <button className="resetButton" onClick={resetCounter}>Reset</button>
        </div> 
    )
}

<CounterButton></CounterButton>