const Main = () =>{
  return (
    <main>
      <div className="cardContent">
        <div className="container d-flex">
          <p className="align-items-center">Content goes here</p>
        </div>
        
      </div>
      <div className ="linkContent bg-primary">
        <div className="listNav container d-flex align-content-center justify-content-between">
          <div className="d-flex align-items-center">
            <img src="../Public/img/buy-comics-digital-comics.png" alt="buyLogo" />
            <a className="nav-link" href="#">DIGITAL COMICS</a>
          </div> 
          <div className="d-flex align-items-center">
            <img src="../Public/img/buy-comics-merchandise.png" alt="buyLogo" />
            <a className="nav-link" href="#">DC MERCHANDISE</a>
          </div>
          <div className="d-flex align-items-center">
            <img src="../Public/img/buy-comics-subscriptions.png" alt="buyLogo" />
            <a className="nav-link" href="#">SUBSCRIPTION</a>
          </div>
          <div className="d-flex align-items-center">
            <img src="../Public/img/buy-comics-shop-locator.png" alt="buyLogo" />
            <a className="nav-link" href="#">COMIC SHOP LOCATOR</a>
          </div>
          <div className="d-flex align-items-center">
            <img src="../Public/img/buy-dc-power-visa.svg" alt="buyLogo" />
            <a className="nav-link" href="#">DC POWER VISA</a>
          </div>          
           
           
          </div>
        </div>
    </main>
  )
}

export default Main