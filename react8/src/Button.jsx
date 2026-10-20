

function Button(){

    // const handleClick = () => console.log("Ouch!");

    // const handleClick2 = (name) => console.log(`${name} stop clicking me`);
    // return(
    //     <button onClick={ () => handleClick2("Naveen")}>Click me</button> arrow should be used when any variable is passing as arguments otherwise no need
    // );




//     let count = 0;

//     const handleClick = (name) => {
//         if(count < 3){
//             count++;
//             console.log(`${name} you clicked me ${count} time/s`)
//         }
//         else{
//             console.log(`${name} stop clicking me`)
//         }
//     }

//     return(<button onClick={() => handleClick("Naveen")}>Click me</button>);


        const handleClick = (e) =>  e.target.textContent="OUCH!" // console.log(e);

       return(<button onDoubleClick={ (e) => handleClick(e)}>Click me</button>)
}

export default Button