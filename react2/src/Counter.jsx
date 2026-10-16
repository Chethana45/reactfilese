import { useEffect, useState, useContext, useRef } from "react";
import {dataContext} from './Home.jsx'

function Counter(){

    const [count, setCount] = useState(0);

    let refCount = useRef(0);

    const data = useContext(dataContext);

    function inc(){
        //setCount(preCount => preCount+1);
        refCount.current++;
    }

    useEffect(()=>{
        console.log(refCount.current)}
    , [count]);
    return (
        <>
        <h2>{data}</h2>
            <h2 className='m-5'>{refCount.current}</h2>
            <button className='mx-5'onClick={inc}>UP</button>
            <button className="btn btn-secondary" onClick={()=>setCount(refCount.current)}>Update</button>
        </>
    )
}

export default Counter