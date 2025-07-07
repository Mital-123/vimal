import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Component/Home/HomePage';
import ContactPage from './Component/ContactUs/ContactPage';
import AboutusSec from './Component/Aboutus/AboutusSec';
import Product from './Component/Product/Product';
import SubProductBrand from './Component/Home/SubProductBrand';
import SubProducts from './Component/Product/SubProductPage';
import SpecificSubPro from './Component/Product/SpecificSubPro';
import BrandProductDetail from './Component/Home/BrandProductDetail';
import Blog from './Component/Blog/Blog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/:brand' element={<SubProductBrand />} />
          <Route path='/:brand/:brandproduct' element={<BrandProductDetail />} />
          <Route path='/aboutus' element={<AboutusSec />} />
          <Route path='/product' element={<Product />} />
          <Route path='/:id' element={<SubProductBrand />} />
          <Route path='/product/:id' element={<SubProducts />} />
          <Route path='/product/:id/:proid' element={<SpecificSubPro />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;