
import './App.css';
import {BrowserRouter as Router ,Routes,Route} from "react-router-dom"

import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Cart from './Pages/Cart/Cart';
import Products from './Products/Products';
import SingelProduct from './Pages/SingleProduct/SingelProduct';
import Error from './Pages/Error/Error';
import Header from './Component/Navbar_Header/Header';
import Footer from "./Component/Footer/Footer"
import Home from './Home/Home';



function App() {
  return (
   <Router> 
   <Header/>
       <Routes>
      <Route path ="/" element ={<Home/>} />
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
