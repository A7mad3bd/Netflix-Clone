import {Card,Button} from 'react-bootstrap'
import { useState } from 'react';
import ModalMovie from '../ModalMovie/ModelMovie';

export default function Movie(props) {
    const [show, setShow] = useState(false);
    const [chosenMovie, setChosenMovie] = useState();
    // const [cardinfo, ] = useState();

    const hclose = () => setShow(false);
    const hshow = () => setShow(true);
      function hshowmodal(movie) 
      {
      hshow();
      setChosenMovie(movie);
      }
      return(

        <>
        <Card style={{width:'50rem'}} >
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${props.movie.poster_path} `} />
        <Card.Body>

        <Card.Title>
        {props.movie.title}
        </Card.Title>

        <Card.Text> 
        {props.movie.release_date} 
        </Card.Text>

        <Card.Text> 
        {props.movie.overview}
        </Card.Text>


        <Button variant="primary" onClick={()=>{hshowmodal(props.movie) }}>Show Modal</Button>

         </Card.Body>

         </Card>
         {
        chosenMovie && <ModalMovie show={show} hclose={hclose} chosenMovie={chosenMovie}/>}
</>

 )}