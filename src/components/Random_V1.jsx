import {useState, useEffect} from 'react';
import axios from 'axios';

// App key
const API_KEY = process.env.REACT_APP_API_KEY;

const Random = () => {
  const [gif,setGif] = useState('');
  const fetchGif = async ()=>{
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {data} = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc)
  }
  useEffect(()=>{
    fetchGif();
  },[])
  const handelClick=()=> fetchGif();
  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img width="300" src={gif} alt="Random GIF"/>
      <button onClick={handelClick}>Click To Load</button>
    </div>
  )
}
export default Random;