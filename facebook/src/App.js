import React from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
 

function App() {
  return (
    <div className="parent">
      <div className= "container">
        <div className = "info">
          <h1>facebook</h1>
          <p>Facebook helps you connect and 
            share with the people in your life.</p>
        </div>
        <div className= "login">
          <div className= "login-holder">
            <input className= "input-holder" placeholder
             ="Email address or Phone Number" />
           <input className= "input-holder" placeholder
             ="Password" />
            <button className = "login-Button"> 
            Login</button>

            <div>
            <p className = "link">
              <a href="https://facebook.com" className = "link">
                Forget Passoword? </a>
            </p>
            <hr></hr>
            </div>

            <button className = "create-button">
              Create New Account
            </button>



          </div>

          <div className = "last"> 
            <p>
               <b> <a href = "https://www.facebook.com" className = "lastl"> Create a Page </a></b> 
               for a celebrity, band or business.</p>
            </div>

        </div>
       </div>
      
    </div>
     );
  }


export default App;
    