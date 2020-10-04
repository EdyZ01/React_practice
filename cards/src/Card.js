import React from 'react';
import logo from './logo.svg';
import './App.css';

function Card(props) {
  return (
    <div className = "card">
        <img src= {props.person.picture} className = "image">

        </img>
        <h1>
            {props.person.name}
        </h1>
        <div>
            <p>
                Age: {props.person.age}
                <br/>
                Favourite Food: {props.person.food}
                <br/>
                Location: {props.person.location}
                <br/>
                Favourite ML Hero: {props.person.favorite}
                <br/>
               
            </p>
        </div>
    </div>  
  );
}

export default Card;