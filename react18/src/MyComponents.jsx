import React, {useState, useEffect} from "react";

function MyComponents(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title=`Count: ${count} ${color}`
    }, [count, color]
    );  // re-renders 
    /*
    useEffect(() => {
        document.title=`Count: ${count} ${color}`
        
    }, []
    );  // mount
    useEffect(() => {
        document.title=`Count: ${count} ${color}`
    }, [count]
    );  // mount + when value changes here count value
    */
    
    function addCount(){
        setCount(c => c+1);
    }
    function subtractCount(){
        setCount(c => c-1);
    }
    function changeColor(){
        setColor(c => c==="green" ? "red": "green");
    }

    return(
        <>
         <p style={{color: color}}>Count: {count}</p>
         <button onClick={addCount}>Add</button>
         <button onClick={subtractCount}>Subtract</button>
         <button onClick={changeColor}>Change Color</button>
        </>
        
    );
}

export default MyComponents