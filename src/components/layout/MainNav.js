import {Link} from 'react-router-dom';
import React from 'react';

import {Icon} from '@iconify/react';
import Styling from '../../styles/layout/MainNav.module.css';
import Logo from '../logo/otm_logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import SignUpModal from './SignInModal';

function MainNav(){
    const [modalShow, setModalShow] = React.useState(false);


    return (
        <div>
            <Navbar bg='light' expand='lg' >
                <div className={Styling.container}>
                    <Navbar.Brand>
                        <Link to='/on-the-move'>
                            <img src={Logo} className={Styling.logo} alt='Logo'/>
                        </Link>
                    </Navbar.Brand>
                    <Nav className={Styling.nav}>
                        <Nav.Link><Link to='/company'>Company</Link></Nav.Link>
                        <Nav.Link><Link to='/services'>Services</Link></Nav.Link>
                        <Nav.Link><Link to='/help'>Help</Link></Nav.Link>
                        <Nav.Link>
                            <Link to='/login'>
                                <Icon icon="ic:round-login" />Login
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to='#' className={Styling.button} onClick={() => setModalShow(true)}>
                                Sign Up</Link>
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>

            <SignUpModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
        );
}

export default MainNav;