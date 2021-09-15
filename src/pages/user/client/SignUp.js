import { Link, useHistory } from 'react-router-dom';
import {useRef, useState} from 'react';

import {Card, Alert} from 'react-bootstrap'
import Styling from '../../../styles/user/UserInputForm.module.css';
import {useAuth} from '../../../context/AuthContext';

function SignUp(props){
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const locationRef = useRef();
    const {signup} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function submit(event){
        event.preventDefault();

        if (passwordRef.current.value !== confirmPasswordRef.current.value){
            return setError('Passwords do not match.');
        }

        const enteredEmail = emailRef.current.value;
        const enteredPassword = passwordRef.current.value;
        const enteredFirstName = firstNameRef.current.value;
        const enteredLastName = lastNameRef.current.value;
        const enteredLocation = locationRef.current.value;
    
        const signupData = {
            email: enteredEmail,
            password: enteredPassword,
            firstName: enteredFirstName,
            lastName: enteredLastName,
            location: enteredLocation
        };

        try {
            setError('');
            setLoading(true);
            await signup(signupData.email, signupData.password);
            history.push('/client-dashboard')
        } catch {
            setError('Failed to create an account.');
        }
        setLoading(false);
    }

    

    return (
        <>
            <Card className={Styling.card2}>
                <div className={Styling.container}>
                    <h3>Sign up</h3>
                    {error && <Alert variant='danger'>{error}</Alert>}
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
                            <button disabled={loading} type='submit'>Sign Up</button>
                        </div>
                    </form>
                </div>
            </Card>
            <div className={Styling.content}>
                Already have an account?
                <Link to='/login'>
                    Login.
                </Link>
            </div>
        </>
    );
}

export default SignUp;