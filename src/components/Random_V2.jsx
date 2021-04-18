import useGif from '../hooks/useGif';

const Random = ()=> {
  const {gif, fetchGif} = useGif();

  return (
    <div className="container">
      <h1>Random GIF</h1>
      <img width="280" src={gif} alt="Random GIF"/>
      <button onClick={fetchGif}>Click To Load</button>
    </div>
  )
}
export default Random;