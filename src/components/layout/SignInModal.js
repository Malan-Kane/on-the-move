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
                        <Link>
                            <Card className="text-center">
                            <Card.Body className={Styling.card}>
                                <Icon icon="bi:person-fill" width='72'/>
                                <h4>Client</h4>
                                <Card.Text>
                                    Have your cargo delivered,{' '}
                                </Card.Text>
                            </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                    <Col>
                        <Link>
                            <Card className={Styling.card}>
                            <Card.Body >
                                <Icon icon="mdi:truck" width='72'/>
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
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );

}

export default SignUpModal;