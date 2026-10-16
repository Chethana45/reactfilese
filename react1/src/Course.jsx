import html from './assets/html.png'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

function Course(props){

    // const styles={
    //     backgroundColor : "green"
    // }
    const [purchased, setPurchased] = useState(true);
    const [discount, setDiscount] = useState(props.price);

    function BuyCourse(amt){
        // console.log(props.name," purchased with ", discount,"% discount");
        setDiscount(discount-amt);
        console.log(discount);
    }

    useEffect(()=>{
        console.log('inside course use effect');
        console.log(purchased);
    });

    let pr = props.price
        return (
            <div className="card">
                <img src={props.img} alt=""/>
                <h3>{props.name}</h3>
                <p>{discount}</p>
                <span>{props.rating}</span>
                <button onClick={(event)=> {BuyCourse(20); console.log(event)}}>Discount</button>
                <button onClick={()=>props.delete(props.id)}>Delete</button>
                {/* <p>{purchased ? "Already Purchased" : "Get it Now"}</p> */}
            </div>
        );
}

Course.propTypes={
    name : PropTypes.string,
    rating : PropTypes.number,
}

Course.defaultProps = {
    name: "Code IO Course",
    price: "1 like + 1 sub",
    img: html,
    rating: 0,
}

export default Course