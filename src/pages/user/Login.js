import {useRef} from 'react';

import Card from 'react-bootstrap/Card'
import Styling from '../../styles/user/UserInputForm.module.css';

function Login(props){
    const usernameRef = useRef();
    const passwordRef = useRef();

    function submit(event){
        event.preventDefault();

        const enteredUsername = usernameRef.current.value;
        const enteredPassword = passwordRef.current.value;
    
        const loginData = {
            username: enteredUsername,
            password: enteredPassword
        };
        props.addLogin(loginData);
    }

    

    return (
        <Card className={Styling.card}>
            <div className={Styling.container}>
                <h2>Login</h2>

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
                        <button>Login</button>
                    </div>
                </form>
            </div>
        </Card>
    );
}

export default Login;