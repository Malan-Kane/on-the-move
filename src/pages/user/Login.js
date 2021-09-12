import {useRef} from 'react';
import styling from '../../styles/user/UserInputForm.module.css';

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

    

    return <div className={styling.container}>
        <h2>Login</h2>

        <form onSubmit={submit}>
            <div className={styling.control}>
                <label htmlFor='username'>Username</label>
                <input type='email' required id='username' ref={usernameRef}/>
            </div>

            <div className={styling.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' required id='password' ref={passwordRef}/>
            </div>

            <div className={styling.actions}>
                <button>Login</button>
            </div>
        </form>
    </div>
}

export default Login;