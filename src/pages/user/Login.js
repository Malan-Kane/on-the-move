import {useRef, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {Card, Alert} from 'react-bootstrap'
import { useAuth } from '../../context/AuthContext';
import Styling from '../../styles/user/UserInputForm.module.css';

function Login(){
    const usernameRef = useRef();
    const passwordRef = useRef();
    const {login} = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function submit(event){
        event.preventDefault();

        

        const enteredUsername = usernameRef.current.value;
        const enteredPassword = passwordRef.current.value;
    
        const loginData = {
            username: enteredUsername,
            password: enteredPassword
        };

        try{
            setError('');
            setLoading(true);
            await login(loginData.username, loginData.password);
            history.push('/client-dashboard')
        } catch{
            setError('Login failed');
        }
        
    }

    

    return (
        <Card className={Styling.card}>
            <div className={Styling.container}>
                <h2>Login</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <form onSubmit={submit}>
                    <div className={Styling.control}>
                        <label htmlFor='username'>Username</label>
                        <input type='email' required id='username' ref={usernameRef}/>
                    </div>

                    <div className={Styling.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password' required id='password' ref={passwordRef}/>
                    </div>

                    <div className={Styling.actions}>
                        <button disabled={loading} type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </Card>
    );
}

export default Login;