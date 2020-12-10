import React, {useEffect, useState} from 'react'
import axios from 'axios';

function GetPhoto(props) {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios.get('https://api.nasa.gov/planetary/apod?api_key=Xt2B5L8vTdWhqdlhWlf1KUaS0Z2BAYy9cn6svr28')
        .then((response) => {
            console.log(response);
            setPhoto(response.data);
        })
    }, [])

    return (
        <div>
           <h1>{photo.title}</h1>
           <h3>{photo.date}</h3>
           <img style={{ width: "800px"}} src={photo.hdurl} alt={photo.title} />
           <p style={{ width:"800px", textalign:"center", margin:"auto"}} >{photo.explanation}</p>
        </div>
    )
}

export default GetPhoto;