const Main = () =>{
  return (
    <main>
      <div className="cardContent">
        <div className="container d-flex">
          <p className="align-items-center">Content goes here</p>
        </div>
        
      </div>
      <div className ="linkContent bg-primary">
        <div className="listNav container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src="../public/img/buy-comics-digital-comics.png" alt="buyLogo" />
            <a className="nav-link" href="#">DIGITAL COMICS</a>
          </div>           
           
           <a className="nav-link" href="#">Features</a>
           <a className="nav-link" href="#">Pricing</a>
           <a className="nav-link" href="#">Disabled</a>
           <a className="nav-link" href="#">Disabled</a>
          </div>
        </div>
    </main>
  )
}

export default Main