import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/Header';
import Notfound from './components/Notfound';
import Homepage from './pages/Homepage';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Orderconfirmed from './pages/Orderconfirmed';
import AdminCanvas from './components/AdminCanvas';
import AdminProductList from './components/AdminProductList';
import Adminproductoperation from './pages/Adminproductoperation';
import Adminproductdetails from './pages/Adminproductdetails';

import Clientsignup from './pages/Clientsignup';
import Clientlogin from './pages/Clientlogin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/view-product' element={<Product />} />
          <Route path='/contact-us' element={<Header />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/order-confirmed' element={<Orderconfirmed />} />

          <Route path='/create-customer-account' element={<Clientsignup />} />
          <Route path='/customer-login' element={<Clientlogin/>} />

          <Route path='/Admin-Product-operation' element={<Adminproductoperation />} />
          <Route path='/Admin-Product-details' element={<Adminproductdetails />} />
          <Route path='*' element={<Notfound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
