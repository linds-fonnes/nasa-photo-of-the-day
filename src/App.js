import React, { useState, useEffect} from "react";
import axios from 'axios';
import {API_KEY, BASE_URL} from './constants/index';
import "./App.css";
import './index';
import Title from './title';
import Info from './info';
import Image from './image';


function App() {
  const [imageData, setImageData] = useState([]);
  const { copyright, date, explanation, title, url } = imageData;
  useEffect(() => {
    const fetchImage = () => {
      axios
      .get(`${BASE_URL}/apod?api_key=${API_KEY}`)
      .then((res) => {
        setImageData(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      fetchImage();
    }
  },[]);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <div className='App'>
        <Title />
        <Image url={url}/>
        <Info copyright={copyright} date={date} explanation={explanation} title={title}/>
      </div>
    </div>
  );
}

export default App;
