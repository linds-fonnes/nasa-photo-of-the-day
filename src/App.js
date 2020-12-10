import React, { useState, useEffect} from "react";
import axios from 'axios';
import APOD from './APOD'
import "./App.css";

const API_KEY = 'Xt2B5L8vTdWhqdlhWlf1KUaS0Z2BAYy9cn6svr28'
const URL = 'https://api.nasa.gov/planetary'

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
