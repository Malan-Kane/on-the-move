import {Modal, Button, Card, Container, Row, Col} from "react-bootstrap";
import Styling from '../../styles/layout/SignUpModal.module.css';
import {Icon} from '@iconify/react';
import {Link} from 'react-router-dom';

function SignUpModal(props){
    return(
        <Modal {...props} size='lg' centered>
            <Modal.Header closeButton>
                <Modal.Title>
                    <h3>Choose your option</h3>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col>
                        <Link to='/signup' className={Styling.card} onClick={props.onHide}>
                            <Card>
                            <Card.Body>
                                <Icon icon="bi:person-fill" width='68'/>
                                <Card.Title>Client</Card.Title>
                                <Card.Text>
                                    Have your cargo delivered.{' '}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link to='/signup-driver' className={Styling.card} onClick={props.onHide}>
                            <Card>
                            <Card.Body >
                                <Icon icon="mdi:truck" width='68'/>
                                <Card.Title>Driver</Card.Title>
                                <Card.Text>
                                    Become an approved driver.{' '}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <button className={Styling.button} onClick={props.onHide}>Close</button>
            </Modal.Footer>
        </Modal>
    );

}

export default SignUpModal;