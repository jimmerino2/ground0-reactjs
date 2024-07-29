import React from 'react';
import ReactDOM from 'react-dom/client';

import header from './header'



// Class Demonstration Section
class Car{
    constructor(brand){
        this.brand = brand;
    }
    present(){
        return "I have a car with the brand " + this.brand;
    }
}
const myCar = new Car("Ford");

// Array + List Section
const myArray = ['apple', 'orange', 'banana'];
const myList = myArray.map((item)=><h1>{item}</h1>);

// JSX Section
const root = ReactDOM.createRoot(document.getElementById('root'));
const header2 = ReactDOM.createRoot(document.getElementsByClassName('header')[0]);
//root.render(myList);
header2.render(header)
