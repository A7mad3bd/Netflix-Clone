
// MovieList component:

// Map the data that you have from the API.
// It returns and renders a Movie component.

import Movie from '../Movie/Movie';
export default function MovieList(props) {

    return (
        <>
            <div className='listc' >
                <h2 > Movies List </h2>
                {
                    props.movies.map(datas => {
                        return (
                           
                            <div key= {datas.id}>
                            {console.log(datas.id)}
                                <Movie movie={datas} />
                                </div>
                            
                        )
                    })}
            </div>
        </>
    );
}