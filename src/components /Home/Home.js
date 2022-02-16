// You should have Six main components in your project.
// Home
// Navbar(next task)
// MovieList
// Movie
// ModalMovie
// FavList (next task)
// Home component:
// Fetch data using the endpoint (‘/trending’) that you created in Task12.
// Render MovieList component.

import '../Home/Home.css';
import { useState, useEffect } from 'react';
import MovieList from '../MovieList/MovieList'
import Navbar from '../Navbar/Navbar';
 function HomePage() {
    const [data, setMovie] = useState();
    const getMovies = async () => {
        try {
            let res = await fetch(`https://movie-li.herokuapp.com/trending`)
            let data = await res.json();
            setMovie(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
        <div className='Homec'>
        <Navbar/>
            {
                    

                data && (<MovieList  movies={data} />)
            }
            </div>
        </>
    );
}
export default HomePage;