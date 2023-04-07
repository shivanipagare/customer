import logo from './logo.svg';
import './App.css';
import NavbarCustomer from './Mainpage/Navbar';
import Mainpage from './Mainpage/Mainpage';
import {Routes, Route } from 'react-router-dom';
import Men from './Pages/Men';
import Women from './Pages/Women';
import Kids from './Pages/Kids';
import Beauty from './Pages/Beauty';
import Electronics from './Pages/Electronics';
import Navbar from './Mainpage/Navbar';

function App() {
  return (
    <div >
      <NavbarCustomer/>


   <Routes>
   <Route path='/' element={<Mainpage />} />
        <Route path='/men' element={<Men />} />
        <Route path='/women' element={<Women />} />
        <Route path='/kids' element={<Kids />} />
        <Route path='/beauty' element={<Beauty/>} />
        <Route path='/electronics' element={<Electronics />} />
      </Routes>
    </div>
  );
}

export default App;
