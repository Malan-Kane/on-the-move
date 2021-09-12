import { Link } from 'react-router-dom';

import styling from '../../styles/layout/Layout.module.css';

function LandingPage(){

    return (
    <div>
        <div className={styling.bottomline}>
            <h1>ON THE MOVE</h1>
            <h3>Become Your Own Boss</h3>

            <div className={styling.containerleft}>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
            </div>

            <Link to='/SignUp' className={styling.button}>Create New User Account</Link>
            <Link to='/SignUp' className={styling.button}>Create New Driver Account</Link>
            <p>Already have an account? <Link to='/Login'>Login.</Link></p>
        </div>
        

         {/*About Us Section*/}
        
        <div className={styling.bottomline}>
            <h2>About Us</h2>
            <div className={styling.containerleft}>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

         {/*About Us Section*/}
        
        <div className={styling.bottomline}>
            <h2>Features</h2>
            <div className={styling.containerleft}>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation 
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                    officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>

    </div>
    );

    
}

export default LandingPage;