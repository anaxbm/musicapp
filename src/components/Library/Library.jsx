import LibrarySong from '../LibrarySong/LibrarySong'
import './library.scss'

const Library = ({songs})=>{
    //console.log(songs)
    return (
        <div>
        <h2 className='library-title'>Library</h2>
        <section className='library-songs'>
           { songs.map( (song) =>{
            //console.log(song.cover)
            return <LibrarySong song={song}/>})}
            
        </section>
        </div>
    )
}
export default Library