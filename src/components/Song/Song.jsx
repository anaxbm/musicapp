import './songstyles.scss'

const Song = ({currentSong})=>{
    //console.log(currentSong)
    return (
        <main className="song-data">
        <img  className= "song-cover" src={currentSong.cover} alt="cover"/>
         <h2> {currentSong.name}</h2> 
         <h3>{currentSong.artist}</h3>
        </main>
        
    )
}

export default Song;