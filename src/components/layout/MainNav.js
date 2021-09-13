import {Link} from 'react-router-dom';
import React from 'react';
import {Icon} from '@iconify/react';
import Styling from '../../styles/layout/MainNav.module.css';
import Logo from '../logo/otm_logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import LandingPage from '../../pages/home/LandingPage';
import SignUpModal from './SignInModal';

function MainNav(props){
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
                        <Nav.Link><Link to='/Company'>Company</Link></Nav.Link>
                        <Nav.Link><Link to='/Services'>Services</Link></Nav.Link>
                        <Nav.Link><Link to='/Help'>Help</Link></Nav.Link>
                        <Nav.Link>
                            <Icon icon="ic:round-login" />
                            <Link to='/Login'>Login</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <button className={Styling.button} onClick={() => setModalShow(true)}>
                                Sign in</button>
                        </Nav.Link>
                    </Nav>
                </div>
            </Navbar>

            <SignUpModal show={modalShow} onHide={() => setModalShow(false)}/>
        </div>
        );
}

export default MainNav;