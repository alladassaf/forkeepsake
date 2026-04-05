import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer' 
import Home from './components/home/Home'
import Collection from './components/collection/Collection'
import Repair from './components/repair/Repair'
import Checkout from './components/checkout/Checkout';
import { CartProvider } from './context/CartContext' 
import './App.css';

function App() {
  return (
    <div className="container">
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/repair" element={<Repair />} />
          <Route path="/cart" element={<Checkout />} />
        </Routes>
        <Footer />
      </CartProvider>
    </div>
  );
}

export default App;
