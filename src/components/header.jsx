const Header = (props) =>{
  const menuHeader = props.navMenu; 
  
  return (
    <header>
      <div className="whiteBar">
        <div className = "navInt container d-flex justify-content-between">          
            <div>
            <nav className="navbar">
                <div className="container">
                  <a className="navbar-brand" href="#">
                    <img src="../../public/img/dc-logo.png" alt="LogoDc"/>
                  </a>
                </div>
              </nav>
            </div>
             <div className="navList">
                <ul className="d-flex align-content-center">
                  { menuHeader.map((link) => (
                    <li key={link.id}><a href={link.url}>{link.name}</a></li>
                  ))}
                </ul>                
             </div>
          </div>
          
        </div>      
    </header>
  )
}

export default Header