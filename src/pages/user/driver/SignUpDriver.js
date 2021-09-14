
import {useRef} from 'react';

import Card from 'react-bootstrap/Card'
import Styling from '../../../styles/user/UserInputForm.module.css';

function SignUpDriver(props){
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const locationRef = useRef();

    function submit(event){
        event.preventDefault();

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        const enteredFirstName = firstNameRef.current.value;
        const enteredLastName = lastNameRef.current.value;
        const enteredLocation = locationRef.current.value;
    
        const signupdriverData = {
            email: enteredEmail,
            password: enteredPassword,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            location: enteredLocation
        };
        props.addSignUpDriver(signupdriverData);
    }

    

    return (
        <Card className={Styling.card2}>
            <div className={Styling.container}>
                <h2>Sign up</h2>

                <form onSubmit={submit}>
                    <div className={Styling.control}>
                        <label htmlFor='firstName'>First Name</label>
                        <input type='text' required id='firstName' ref={firstNameRef}/>
                    </div>

                    <div className={Styling.control}>
                        <label htmlFor='lastName'>Last Name</label>
                        <input type='text' required id='lastName' ref={lastNameRef}/>
                    </div>

                    <div className={Styling.control}>
                        <label htmlFor='email'>Email Address</label>
                        <input type='email' required id='email' ref={emailRef}/>
                    </div>

                    <div className={Styling.control}>
                        <label htmlFor='location'>City of Residence</label>
                        <input type='text' required id='location' ref={locationRef}/>
                    </div>

                    <div className={Styling.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' required id='password' ref={passwordRef}/>
                    </div>
                    <div className={Styling.control}>
                        <label htmlFor='conPassword'>Confirm Password</label>
                        <input type='password' required id='conPassword' ref={confirmPasswordRef}/>
                    </div>

                    <div className={Styling.actions}>
                        <button>SignUpDriver</button>
                    </div>
                </form>
            </div>
        </Card>
    );
}

export default SignUpDriver;