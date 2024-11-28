import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import Footer from './Components/Footer/Footer';
import Whatsapp from './Components/Whatsapp/Whatsapp';
import AboutPage from './Pages/AboutPage/AboutPage';
import ContactUs from './Pages/ContactUs/ContactUs';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home className='home' />} />
          <Route path='/products' element={<Cart />} />
          <Route path='/about' element={<AboutPage/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
        <Whatsapp/>
      </div>
      <Footer />
    </>
  );
}

export default App;
