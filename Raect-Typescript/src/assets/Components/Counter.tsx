import { useState } from "react";

function Counter() {
    const [count, setCount] = useState<number>(0);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        const decrement = count > 0 ? count - 1 : 0;
        setCount(decrement);
    }

    const handleReset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1 className="font-bold text-amber-400">Counter</h1>
            <div className="">
                <button onClick={handleIncrement}>increment</button>
                <button onClick={handleDecrement}>decrement</button>
                <button onClick={handleReset}>Reset</button>
                <h1>Count : {count}</h1>
            </div>
        </div>
    )
}

export default Counter