import norris from './norris.png';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

useEffect (() => {
  getData();
}, []);
const [quote, setQuote] = useState(); 


const getData = async () => {
  try{
    let chuckJokes = await fetch('https://api.chucknorris.io/jokes/random');
    let data = await chuckJokes.json();
    setQuote(data.value);
    
  
  }
  catch(error){
console.warn('We have an error:${error}');
  }
}


  return (
    <div className="container">
        <div className="header">
          <br></br>
          <br></br>
        <h1 className="title"> The Chuck Norris Api</h1>
        <img src={norris} alt="Chuck Norris"/>
        </div>
        <center>
          <div className="card">
            <div className="card-header">
               <span>Click Category</span>
            </div>
            <div className="card-body">
              <form>
              <div className="row">
    <div class="col-sm-12">
          <button className="btn btn-md" onClick={getData}>Travel Facts</button>
        
          <button className="btn btn-md" onClick={getData}>Science Facts</button>
       
          <button className="btn btn-md" onClick={getData}>Food Facts</button>

          <button className="btn btn-md" onClick={getData}>Religion Facts</button>
            </div>
        </div>
        </form>
      </div>
      </div>
      </center>
      <h2 className="subTitle">Here is the Fact!</h2>
      <p className="quote"><b className="co">"</b>{quote}<b className="co">"</b></p>
      
<br></br>
<br></br>
<br></br>
<br></br>
    <div className="footer">
<p>&#169; 2020 | <a href="https://github.com/monicaoyugi"> monicaoyugi</a> | All Rights Reserved.</p>
  </div>
  </div>
  );
}

export default App;
