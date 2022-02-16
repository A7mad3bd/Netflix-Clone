import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components /Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Switch } from 'react-router';
//https://trending-mov.herokuapp.com/trending
//import Fav from './components /FavList /FavList';
//import  Navbar  from './components /Navbar/Navbar';

export default function App() {

  return (
    <div className='App'>
    {/* <Navbar/> */}
   <Routes>
     {/* <Switch> */}
       <Route path='/' exact  element={<Home/>} />
       
     {/* </Switch> */}
   </Routes>
 </div>
     



  )
}