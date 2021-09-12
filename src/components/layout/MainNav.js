import {Link} from 'react-router-dom';
import {Icon} from '@iconify/react';

import logo from '../logo/otm_logo.svg';
import styling from '../../styles/layout/MainNav.module.css';

function MainNav(){
    return <header className={styling.header}>
        <div className={styling.container}>
            <div className={styling.logo}><Link to='/'><img src={logo} alt="Logo"/></Link></div>
            <nav>
                <ul>
                    <li><Link to='/Services'>Services</Link></li>
                    <li><Link to='/Company'>Company</Link></li>
                    <li><Link to='/Help'>Help</Link></li>
                    <li>
                        <Link to='/Login'>
                            <span className={styling.icon}><Icon icon="ic:baseline-login" /></span>Login
                        </Link>
                    </li>
                    <li>
                        <Link to='/SignUp'>
                            <button className={styling.button}>Sign Up</button>
                        </Link>
                    </li>
                    <li>
                        
                    </li>
                </ul>
            </nav>
        </div>
    </header>;
}

export default MainNav;