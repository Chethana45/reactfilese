

function List(){

    const fruits = [
        {id: 1, name:"apple", calories: 95}, 
        {id: 2, name:"orange", calories: 45}, 
        {id: 3, name:"banana", calories: 105}, 
        {id: 4, name:"coconut", calories:159}, 
        {id: 5, name:"pineapple", calories:37}
        ];

    // fruits.sort((a,b)=> a.name.localeCompare(b.name)); alphabetical order

    // fruits.sort((a,b)=> b.name.localeCompare(a.name)); reverse alphabetical order
    
    // fruits.sort((a, b) => a.calories - b.calories); numeric

    // fruits.sort((a, b) => b.calories - a.calories); reverse numeric

    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);
    const listItems = lowCalFruits.map(lowCalFruit => <li key={lowCalFruit.id}>
                                           {lowCalFruit.name}: &nbsp;
                                           <b>{lowCalFruit.calories}</b></li>);

    return(<ol>{listItems}</ol>);

    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    // const listItems = highCalFruits.map(highCalFruit => <li key={highCalFruit.id}>
    //                                        {highCalFruit.name}: &nbsp;
    //                                        <b>{highCalFruit.calories}</b></li>);

    // return(<ol>{listItems}</ol>);
}

export default List