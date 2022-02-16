
import '../Navbar/Navbar.css'

import { Link } from 'react-router-dom';
function Navbar() {
    return (

        <>
             <nav className="topnav">
                <Link to='/'>  Home Page </Link>
                <Link to='/favourite'> Favorit Movied Page </Link>
            </nav>
             
            
        </>

    );
}

export default Navbar;