import React, { useState } from 'react';
import '../Styles/Form.css';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Error from '../Components/Error';

const Form = (props) => {

    const [input, setInput] = useState("");
    const [error, seterror] = useState(false);


    const handleclick = (event) => {
        event.preventDefault();
        if (input === "") {
            seterror(true);
            event.preventDefault();
        } else {
            props.addTodo(input)
            setInput("");
            seterror(false);
            props.handleClose();
        }
    }

    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title><h3 className="modaltitle">Add Todo</h3></Modal.Title>
                </Modal.Header>
                <form>
                    <Modal.Body>
                        <textarea className={ error ? 'textarea-error' : 'textarea' }value={input} onChange={(event) => setInput(event.target.value)} rows="4" cols="50"></textarea>
                        {error ? <Error /> :   ' ' } 
                    </Modal.Body>
                    <Modal.Footer>
                        <button className="button-cancel" onClick={props.handleClose}>
                            Cancel
                        </button>
                        <button className="button-done" onClick={handleclick}>
                            Done
                        </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    );
}

export default Form;
