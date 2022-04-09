import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import app from '../../firebase.init';
import { Button, Form } from 'react-bootstrap';

const auth = getAuth(app);

const Passwprd = () => {
    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [registered,setregistred]=useState(false)

    const handleRegistered=(e)=>{
        setregistred(e.target.checked)
        console.log(e);
    }

    const handleEmail=(e)=>{
        // console.log(e.target.value);
       setEmail(e.target.value);
       
    }
    const handlePass=(e)=>{
        // console.log(e.target.value);
        setPass(e.target.value);
    }
    const handleSubmit=(e)=>{
        createUserWithEmailAndPassword(auth,email,pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                // ...
                veryfyEmail()
            })
            .catch((error) => {
                console.log(error);
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
            });
        // console.log('submited',email,pass);
        e.preventDefault();
    }
    const veryfyEmail=()=>{
        sendEmailVerification(auth.currentUser)
            .then(() => {
                // Email verification sent!
                // ...
                console.log('email verification sent');
            });
    }
    const resetPAss=()=>{
        sendPasswordResetEmail(auth, email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log('sent email');
            })
    }

    return (
        <div>
            <h2>{registered?'log in' :'fdojgho'}</h2>
           <div className="regestaion w-50 mx-auto">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={handleEmail} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={handlePass} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onChange={handleRegistered} type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        {registered?'log in': 'Submit'}
                    </Button>
                    <button onClick={resetPAss}>reset</button>
                </Form>
           </div>
        </div>
    );
};

export default Passwprd;