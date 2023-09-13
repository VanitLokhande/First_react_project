import React, { useState } from "react";
import {Modal, Button} from 'react-bootstrap';

const Modalcomp =()=>{
    const[modalStatus,setmodalstatus]=useState(false)


    const showmodal = ()=>{
        setmodalstatus(true)
    }
    const handleClose = ()=>{
        setmodalstatus(false)
    }



    return(
        <>
        <button className="btn btn-success" onClick={showmodal}>show modal</button>

            <Modal
                    show={modalStatus}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  onClick={handleClose}>Understood</Button>
                    </Modal.Footer>
                </Modal>
        </>
    )
}
export default Modalcomp;