import {Modal,Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ModalMovie(props) {

    return (
        <>
               <Modal show={props.show} onHide={props.hclose}>
               <Modal.Header closeButton>

                <Modal.Title>{props.chosenMovie.title}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>comment</Form.Label>
                            <Form.Control type="text" placeholder="Enter comment" />
                            <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Button variant="primary" type="submit">submit</Button>
                    </Form>
                    <Button variant="secondary" onClick={props.hclose}>close</Button>
                    <Button variant="primary" onClick={props.hclose}>save</Button>

                </Modal.Footer>
                </Modal>
        </>
    )
}