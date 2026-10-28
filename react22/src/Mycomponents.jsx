import React, {useState, useEffect, useRef} from 'react';

function Mycomponents(){

    // let [number, setNumber] = useState(0);
    // useState renders always

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    
    function handleClick1(){
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = "blue";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "";


    }
    function handleClick2(){
        inputRef2.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "blue";
        inputRef3.current.style.backgroundColor = "";
    }
    function handleClick3(){
        inputRef3.current.focus();
        inputRef1.current.style.backgroundColor = "";
        inputRef2.current.style.backgroundColor = "";
        inputRef3.current.style.backgroundColor = "blue";
    }

    useEffect(() => {
        console.log("COMPONENT RENDERED");
        });

    return(
        <div>
            <button onClick={handleClick1}>Click me1!</button>
            <input ref={inputRef1} />
            <button onClick={handleClick2}>Click me2!</button>
            <input ref={inputRef2} />
            <button onClick={handleClick3}>Click me3!</button>
            <input ref={inputRef3} />
        </div>
    );
}

export default Mycomponents