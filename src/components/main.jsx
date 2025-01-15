const Main = (props) =>{
  const comicsList = props.comicsAccess
  console.log(comicsList);
  
  return (
    <main>
      <div className="cardContent">
        <div className="cardPos container">
          <h3 className="appendice">CURRENT SERIES</h3>
          <div className="col-12 d-flex justify-content-between flex-wrap">
          { comicsList.map(comic => (
            <div key={comic.id} className="card">
              <div className="cardImg">
                <img src={ comic.thumb } alt="Comic Thumb" />
              </div>              
              <div className="cardBody">
                <p className="cardText">{comic.series}</p>
              </div>
            </div>
            ))}
          </div>
          <button type="button" className="LoadButton">LOAD MORE</button>
        </div>
        
      </div>
      
      <div className ="linkContent bg-primary d-flex">
        <div className="listNav container d-flex justify-content-between align-items-center align-content-center">

          <div className="d-flex align-items-center">            
            <a className="nav-link" href="#"><img src="../Public/img/buy-comics-digital-comics.png" alt="buyLogo" /><span>DIGITAL COMICS</span></a>
          </div> 

          <div className="d-flex align-items-center">
            
            <a className="nav-link" href="#"><img src="../Public/img/buy-comics-merchandise.png" alt="buyLogo" /><span>DC MERCHANDISE</span></a>
          </div>
          <div className="d-flex align-items-center">
            
            <a className="nav-link" href="#"><img src="../Public/img/buy-comics-subscriptions.png" alt="buyLogo" /><span>SUBSCRIPTION</span></a>
          </div>
          <div className="d-flex align-items-center">
            
            <a className="nav-link" href="#"><img src="../Public/img/buy-comics-shop-locator.png" alt="buyLogo" /><span>COMIC SHOP LOCATOR</span></a>
          </div>
          <div className="d-flex align-items-center">
            
            <a className="nav-link" href="#"><img src="../Public/img/buy-dc-power-visa.svg" alt="buyLogo" /><span>DC POWER VISA</span></a>
          </div>          
           
           
          </div>
        </div>
    </main>
  )
}

export default Main