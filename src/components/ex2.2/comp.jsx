//import React from "react";

const data = ["hello", "world"];
const number1 = 5;
const number2 = 6;
const string = "I love React!"


const Comp =()=>{
    return (
        <div>
            <div> {data[0]} {data[1]} </div>
            <div> {number1} + {number2} = {number1 + number2} </div>
            <div> {string} The string’s length is :{string.length} </div>
        </div>
    )
};

export default Comp ;