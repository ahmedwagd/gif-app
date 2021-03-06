import {useState, useEffect} from 'react';
import axios from 'axios';

// App key
const API_KEY = process.env.REACT_APP_API_KEY;

const Tag = () => {
  const [tag,setTag] = useState('dogs')
  const [gif,setGif] = useState('');
  const fetchGif = async (tag)=>{
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    const imageSrc = data.data.images.downsized_large.url;
    setGif(imageSrc)
  }
  useEffect(()=>{
    fetchGif(tag);
  },[tag])
  const handelClick=()=> fetchGif(tag);
  return (
    <div className="container">
      <h1>Random {tag} GIF</h1>
      <img width="300" src={gif} alt="Random GIF"/>
      <input value={tag} onChange={e=> setTag(e.target.value)} />
      <button onClick={handelClick}>Click To Load</button>
    </div>
  )
}
export default Tag;