function NavBar() {
  return (
    <nav className='navbar'>
      <div className='navbar-brand'>
        <a href="#home">Movie App</a>
      </div>
      <div className='navbar-links'>
        <a href='#home' className='nav-link'>Home</a>
        <a href='#favorites' className='nav-link'>Favorites</a>
      </div>
    </nav>
  )
}

export default NavBar
