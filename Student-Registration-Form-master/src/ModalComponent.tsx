import React, { Component } from 'react';
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import {MovementProp} from './Models/Movement';
import { Button } from 'react-bootstrap';

export default function ModalComponent(props: MovementProp){

    function AddNewMovement()
    {
    //     async function fetchMyAPI(){ let result = await refreshList(DateFrom,DateTo);
    //         setMovements(result);
    //     }
    // fetchMyAPI();
    }
    return(
      
        <div className="modal">
              <Modal 
                    onHide = { props.toggle }
                    show={props.isOpen} >
            <Modal.Header closeButton><Modal.Title>{"Movements"}</Modal.Title></Modal.Header>
            <Modal.Body>
            <Container>
            <Row>
                <Col xs={6} md={4}>
                Date From
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Form.Control type="Date" placeholder="DateFrom" value={props.from} onChange={(date) => props.ChangeDateFrom(date)} />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={4}>
                Data To
                </Col>
                <Col>
                    <Row>
                    <Col >
                        <Form.Control type="Date" placeholder="DateTo" value= {props.to} onChange ={(date) => props.ChangeDateTo(date)} />
                    </Col>
                    </Row>
                </Col>
            </Row>
            </Container>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={ props.toggle } >Show Movements</Button>
            </Modal.Footer>
            {/* <CustomSnackBar Msg={Message}></CustomSnackBar> */}
        </Modal>
        </div>     
    )
}