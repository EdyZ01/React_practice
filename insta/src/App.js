import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="parent">
       <div className= "container">
          <div>
            <img className = "photo" src={require('./insta.png')}></img>
           </div>
        

        <div className= "login">
          
          <div className = "login-holder">
          
          <h1>Instagram</h1>
          <input className= "input-holder" placeholder 
             = "Phone number, username, or email"/>
          <input className= "input-holder" placeholder
             ="Password" />
           <button className = "login-Button"> 
            Log In</button>
         <h3>or</h3>
          <div>
            <p className = "link">
              <a href="https://facebook.com" className = "link">
                Log in with facebook?</a>
                <br></br>
                <br></br>
                </p>
                <p className = "linktwo">
                <a href="https://facebook.com" className = "link">
                Forget Password? </a>
               </p>
            
            </div>
            </div>
            <div className = "text-holder">
            <p>Don't Have an account? Sign Up</p>
          </div>
          <div className = "last">
            Get the app
          </div>
        </div>
    </div>
    </div>
  );
}

export default App