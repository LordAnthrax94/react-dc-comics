const Footer = (props) =>{
  const firstMenu = props.footerDCcomics;
  const secondMenu = props.footerShop;
  const thirdMenu = props.footerDC;
  const fourthMenu = props.footerSites;
  

  return (
    <footer>
     <div className="container d-flex justify-content-between">

      <div className="listeFinali d-flex mt-5">
          
        <div className="firstNav navStyle">
          <ul><span>DC COMICS</span>
            { firstMenu.map((link) => (
            <li key={link.id}><a href={link.url}>{link.name}</a></li>
            ))}
          </ul>
          <ul><span>SHOP</span>
            { secondMenu.map((link) =>(
              <li key={link.id}><a href={link.url}>{link.text}</a></li>
            ))}           
          </ul>

        </div>

        <div className="secondNav navStyle">
          <ul><span>DC</span>
            { thirdMenu.map((link) => (
            <li key={link.id}><a href={link.url}>{link.text}</a></li>
            ))}
          </ul>
        </div>

        <div className="thirdNav navStyle">
          <ul><span>SITES</span>
            { fourthMenu.map((link) => (
            <li key={link.id}><a href={link.url}>{link.text}</a></li>
            ))}
          </ul>

        </div>
      </div>

      <div className="logoFooter">
        <img src="../Public/img/dc-logo-bg.png" alt="LogoBg" />
      </div>


     </div>
      <div className="bg-dark d-flex">
        <div className="container d-flex justify-content-between align-items-center">
          <button type="button" className="btn">SIGN UP NOW!</button>
          <div className="linkList d-flex align-items-center">
          <span>FOLLOW US</span>
          <a href="#"><img src="../Public/img/footer-facebook.png" alt="facebook" /></a> 
          <a href="#"><img src="../Public/img/footer-twitter.png" alt="twitter" /></a>
          <a href="#"><img src="../Public/img/footer-youtube.png" alt="youtube" /></a>
          <a href="#"><img src="../Public/img/footer-pinterest.png" alt="pinterest" /></a>
          <a href="#"><img src="../Public/img/footer-periscope.png" alt="periscope" /></a>
        </div>
        </div>
        
      </div>

    </footer>
  )
}

export default Footer