import './App.scss'
import Player from './components/Player/Player'
import Song from './components/Song/Song'
import Header from './components/Header/Header'
import myMusic from '../utils.js'
import { useState, useRef} from 'react'
import Library from './components/Library/Library'


function App() {
  const [songs, setSongs] = useState(myMusic())
  const [firstSong] = songs
  const [currentSong, setCurrentSong] = useState(firstSong)
  const [playSong, setPlaySong] = useState(false);
  const iconRef = useRef(null);
  const songContainer = useRef(null)

  const playCurrentSong = () => {
    setPlaySong(true);
    iconRef.current.play();
  };

  return (
    <>
     <Header/>
     <Library currentSong= {currentSong} setCurrentSong= {setCurrentSong} songs = {songs} setSongs= {setSongs} iconRef={iconRef} playCurrentSong= {playCurrentSong} playSong={playSong} setPlaySong={setPlaySong} songContainer= {songContainer} />
     <section className='player-musicapp'> 
      <Song currentSong= {currentSong}/>
      <Player currentSong= {currentSong} setCurrentSong= {setCurrentSong} setPlaySong= {setPlaySong} iconRef= {iconRef}  playSong= {playSong}playCurrentSong= {playCurrentSong} songs= {songs}/>
      </section>
    </>
  )
}

export default App
