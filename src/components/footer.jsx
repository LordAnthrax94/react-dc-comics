const Footer = () =>{
  return (
    <footer>
     <div className="container d-flex justify-content-between">

      <div className="listeFinali d-flex mt-5">
          
        <div className="firstNav navStyle">
          <ul><span>DC COMICS</span>
            <li><a href="#">Characters</a></li>
            <li><a href="#">Comics</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Videos</a></li>
            <li><a href="#">News</a></li>
          </ul>
          <ul><span>SHOP</span>
            <li><a href="#">Shop DC</a></li>
            <li><a href="#">Shop DC Collectables</a></li>            
          </ul>

        </div>

        <div className="secondNav navStyle">
          <ul><span>DC</span>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy Policy(New)</a></li>
            <li><a href="#">Ad Choice</a></li>
            <li><a href="#">Advertising</a></li>
            <li><a href="#">Jobs</a></li>
            <li><a href="#">Subscription</a></li>
            <li><a href="#">Talent Workshop</a></li>
            <li><a href="#">CPSC Certificates</a></li>
            <li><a href="#">Ratings</a></li>
            <li><a href="#">Shop Help</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        <div className="thirdNav navStyle">
          <ul><span>SITES</span>
            <li><a href="#">DC</a></li>
            <li><a href="#">MAD Magazines</a></li>
            <li><a href="#">DC Kids</a></li>
            <li><a href="#">DC Universe</a></li>
            <li><a href="#">DC Power Visa</a></li>

          </ul>

        </div>
      </div>

      <div className="logoFooter">
        <img src="../Public/img/dc-logo-bg.png" alt="LogoBg" />
      </div>


     </div>
      <div className="bg-dark">
        <div className="container">
        
        </div>
      </div>
        

    </footer>
  )
}

export default Footer