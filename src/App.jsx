import Footer from "./components/footer"
import Header from "./components/header"
import Main from "./components/main";
import links from "./data/menu";
import {footerDCcomics,footerShop,footerDC,footerSites} from "./data/menuFooter"

const App = () =>{
  return(
    <>
    <Header navMenu = { links }/>
    <Main />
    <Footer footerDCcomics ={footerDCcomics} footerShop={footerShop} footerDC={footerDC} footerSites={footerSites}/>
    </>
  )
}

export default App
