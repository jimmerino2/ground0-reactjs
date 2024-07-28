import React from 'react';
import ReactDOM from 'react-dom/client';

const myFirstElement = <h1>Hello React!</h1>
const mySecondElement = <h2>Hello Again!</h2>

const root = ReactDOM.createRoot(document.getElementById('root'));

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

root.render(myList);
