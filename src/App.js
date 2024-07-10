import { Route,Routes } from 'react-router-dom';
import './App.css';
import ProductsList from './pages/ProductsList';
import Login from './pages/Login';
import Aboutus from './pages/Aboutus';
import Signup from './pages/Signup';
import Placeorder from './pages/Placeorder';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Contactus from './pages/Contactus';
import Confirmorder from './pages/Confirmorder';


const App = () =>{
  return (
   
      <Routes>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/' element={<ProductsList/>}/>
        <Route path='/products/:id' element={<Product/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/signin' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/confirmorder' element={<Confirmorder/>}/>
      </Routes>

  );
}

export default App;














