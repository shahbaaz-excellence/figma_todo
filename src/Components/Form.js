
import React, { useState } from 'react';
import '../Styles/Form.css';
import { Modal } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

const Form = (props) => {

    const [input, setInput] = useState("");

    const handleclick = (event) => {
        event.preventDefault();
        if(input===""){
            alert("Please add some text");
            event.preventDefault();
        } else{
            props.addTodo(input)
            setInput("");
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
                    <Modal.Body><textarea className="textarea" value={input} onChange={(event)=>setInput(event.target.value)} rows="4" cols="50"></textarea></Modal.Body>
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
