import './App.scss'
import Player from './components/Player/Player'
import Song from './components/Song/Song'
import Header from './components/Header/Header'
import myMusic from '../utils.js'
import { useState } from 'react'
import Library from './components/Library/Library'


function App() {
  const [songs, setSongs] = useState(myMusic())
  const [firstSong] = songs
  const [currentSong, setCurrentSong] = useState(firstSong)
  return (
    <>
     <Header/>
     <Library currentSong= {currentSong} songs = {songs} setSongs= {setSongs}/>
      <Song currentSong= {currentSong}/>
      <Player currentSong= {currentSong}/>
    </>
  )
}

export default App
