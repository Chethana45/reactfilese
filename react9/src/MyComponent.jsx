import React, {useState} from 'react';

function MyComponent(){
    
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)
    const updateName = () => {
        setName("Spongebob");
        console.log(name);
    };
    const incrementAge = () => {
        setAge(age+1);
    };
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };
    return(
        <div>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>IsEmployed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={updateName}>Set Name</button>
            <button onClick={incrementAge}>Increment Age</button>
            <button onClick={toggleEmployedStatus}>Set Employee</button>
        </div>
    );
}

export default MyComponent