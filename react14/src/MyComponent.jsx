import React, {useState} from "react";

function MyComponent(){
    
    const [car, setCar] = useState({year: 2024, 
                                    make: "Ford", 
                                    model: "Mustang"});

    function handleChangeYear(event){
        setCar(c => ({...c, year: event.target.value}));
    } 
    function handleChangeMake(event){
        setCar(c => ({...c, make: event.target.value}));
    } 
    function handleChangeModel(event){
        setCar(c => ({...c, model: event.target.value}));
    } 

    return(
        <div>
            <p>Your favourite car is: {car.year} {car.make} {car.model}</p>
            <input type="number" value={car.year} onChange={handleChangeYear}/><br/>
            <input type="text" value={car.make} onChange={handleChangeMake}/><br/>
            <input type="text" value={car.model} onChange={handleChangeModel}/><br/>
        </div>
    )
}

export default MyComponent