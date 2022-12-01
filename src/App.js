
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Cart from './Cart';
import Products from './Products';
import SingelProduct from './SingelProduct';
import Error from './Error/Error';
import Header from './Component/Navbar_Header/Header';
import Footer from "./Component/Footer/Footer"


function App() {
  return (
   <Router>
   <Header/>
       <Routes>
      <Route path ="/" element ={<Home />} />
      <Route path ="/about" element ={<About />} />
      <Route path ="/contact" element ={<Contact />} />
      <Route path ="/cart" element ={<Cart />} />
      <Route path ="/products" element ={<Products />} />
      <Route path ="/SingleProduct/:id" element ={<SingelProduct />} />
      <Route path ="*" element ={<Error />}/>
    </Routes>
    <Footer/>
   </Router>
  );
}

export default  App;
