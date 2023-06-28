import './headerstyles.scss'
const Header = () => {
    return (
        <header className='header'>
        <div className='title'>
        <h1>Lofi Tunes</h1>
        </div>
        <nav className='nav-links'>
         <ul className='nav-links-list'>
            <li>Home</li>
            <li>Explore</li>
            <li>Library</li>
         </ul>
        </nav>
       </header>
    )
}

export default Header