import React, {useState} from 'react'

function MyComponents(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};
        setCars(c => [...c, newCar]);

        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");

    }
    function handleRemoveCar(i){
        setCars(cars.filter((element, index) => index!==i));
    }
    function handleYearChange(event){
        setCarYear(event.target.value)
    }
    function handleMakeChange(event){
        setCarMake(event.target.value)
    }
    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars.map((car, index) => 
                        <li key="index" onClick={() => handleRemoveCar(index)}>
                            {car.year} {car.make} {car.model}
                        </li>
                )}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange}/><br></br>
            <input type="text" value={carMake} onChange={handleMakeChange} 
                    placeholder="Enter car make"/><br></br>
            <input type="text" value={carModel} onChange={handleModelChange} 
                    placeholder="Enter car model"/><br></br>
            <button onClick={handleAddCar}>Add Car</button>

        </div>
    );
}

export default MyComponents