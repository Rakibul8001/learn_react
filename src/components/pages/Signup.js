import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import formClasses from '../../styles/Form.module.css';
import signupClasses from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';


export default function Signup({text}) {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [agree,setAgree] = useState("");
    const [error,setError] = useState();
    const [loading,setLoading] = useState();

    const { signup } = useAuth();
    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmPassword ){
            return setError("Password not matched !");
        }

        try{
            setError("")
            setLoading(true)
            await signup(email,password,username);
            navigate('/');

        }catch(err){
            console.log('something wrong');
            console.log(err);
            setLoading(false);
            setError("wrong");
        }
    }

  return (
      <>
        <h1>Create an account  {text}</h1>
        <div className="column">
           <Illustration/>

            <Form formClass={`${signupClasses.signup} ${formClasses.form}` } onSubmit={handleSubmit}>
                <TextInput type="text" placeholder="Enter name" icon="person" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" value={email}  onChange={(e)=> setEmail(e.target.value)}/>
                <TextInput type="password" placeholder="Enter password" icon="lock" value={password} onChange={(e)=> setPassword(e.target.value)}/>
                <TextInput type="password" placeholder="Confirm password" icon="lock_clock" value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}/>
                <Checkbox text="I agree to the Terms &amp; Conditions" value={agree} onChange={(e)=> setAgree(e.target.value)}/>
                <Button disabled={loading}>
                    <span>Signup</span>
                </Button>
                {error && <p className="error">{error}</p>}
                <div className="info">
                    Already have an account? <Link to="/login">Login</Link> instead.
                </div>
            </Form>
        </div>
    </>
  )
}
