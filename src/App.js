import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components /Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Fav from './components /FavList /FavList';
import { Navbar } from 'react-bootstrap';

export default function App() {

  return (
    <div className='App'>
    <Navbar/>
    <Routes>
       <Route path='/' exact  element={<Home/>} />
       <Route path='/favourite' exact  element={<Fav/>} />
   </Routes>
 </div>
     



  )
}