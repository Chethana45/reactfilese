import React, {useState} from 'react';

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1); // c represents the count variable
        setCount(c => c  +1); // arrow function takes the pending value  without
        setCount(c=> c + 1);  // function it takes the current the value and the count is
                              // incremented by 1 only when the button is clicked
                              //Allow for safe updates based on the previous state not on the current state
    };
    const decrement = () =>
    {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }; 
    const reset = () => {
        setCount(c => c = 0); // same as setCount(0);j
    };

    return(
        <div className="counter-container">
            <p className="count-display">Count: {count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter