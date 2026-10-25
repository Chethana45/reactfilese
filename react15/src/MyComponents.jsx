import React, {useState} from "react";

function MyComponents(){

    const [foods, setFoods] = useState(["Apple","Orange","Banana"]);
    
    function handleAddFood(){
        const newFood =document.getElementById("foodInput").value;
        document.getElementById("foodInput").value="";
        setFoods(f => [...f, newFood]);
    }   
    function handleRemoveFood(i){
        setFoods(foods.filter((food, index) => index!==i));
    }

    return(
        <>
            <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFood(index)}>
                    {food}
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter food name"/>
            <button onClick={handleAddFood}>Add Food</button>
        </>
    )

}

export default MyComponents