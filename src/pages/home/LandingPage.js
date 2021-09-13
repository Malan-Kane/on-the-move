import { Link } from 'react-router-dom';
import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import SignUpModal from '../../components/layout/SignInModal';

import Styling from '../../styles/layout/Layout.module.css';

import Image1 from '../../components/images/MK1.png';
import Button from '@restart/ui/esm/Button';

function LandingPage(){

    return (
        <div>

            


                <Row>
                    <Col>
                        <h1>ON THE MOVE</h1>
                        <h3 className={Styling.subheading}>Be your own boss</h3>

                        <Container>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Lorem dolor sed viverra 
                                ipsum. Ac tortor dignissim convallis aenean et. Ultricies leo integer 
                                malesuada nunc vel. Turpis egestas maecenas pharetra convallis posuere 
                                morbi leo. Placerat in egestas erat imperdiet sed euismod nisi porta 
                                lorem. Morbi tempus iaculis urna id volutpat lacus. Porttitor massa id neque 
                                aliquam. Lacinia at quis risus sed. Tellus pellentesque eu tincidunt tortor aliquam nulla. 
                                Nullam non nisi est sit. Tellus rutrum tellus pellentesque eu tincidunt. Pulvinar elementum 
                                integer enim neque. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum. 
                                Pretium aenean pharetra magna ac placerat vestibulum. Ultricies tristique nulla aliquet enim. 
                                Nulla porttitor massa id neque aliquam vestibulum morbi. Vulputate sapien nec sagittis aliquam. 
                                Semper risus in hendrerit gravida. Fermentum iaculis eu non diam phasellus vestibulum lorem sed.
                            </p>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            
                            <div className={Styling.control}>
                                <h2>New here? Register a new account.</h2>

                                <Link to='/SignUp'><h3 className={Styling.subheading}>Register as a User</h3></Link>
                                <div className={Styling.bottomline}/>
                                <Link to='/SignUpDriver'><h3 className={Styling.subheading}>Register as a Driver</h3></Link>
                            </div>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col>1 of 3</Col>
                    <Col>2 of 3</Col>
                    <Col>3 of 3</Col>
                </Row>
        </div>
    );

    
}

export default LandingPage;