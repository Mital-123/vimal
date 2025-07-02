import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Component/Home/HomePage';
import ContactPage from './Component/ContactUs/ContactPage';
import AboutusSec from './Component/Aboutus/AboutusSec';
import Product from './Component/Product/Product';
import SubProductBrand from './Component/Home/SubProductBrand';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:id' element={<SubProductBrand />} />
          <Route path='/aboutus' element={<AboutusSec />} />
          <Route path='/product' element={<Product />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;