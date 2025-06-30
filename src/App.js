import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './Component/Home/HomePage';
import ContactPage from './Component/ContactUs/ContactPage';
import AboutusSec from './Component/Aboutus/AboutusSec';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/aboutus' element={<AboutusSec />} />
          <Route path='/contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;