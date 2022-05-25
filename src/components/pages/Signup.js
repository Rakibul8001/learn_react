import React, { useState } from 'react';
import useHistory  from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import formClasses from '../../styles/Form.module.css';
import signupClasses from '../../styles/Signup.module.css';
import Button from '../Button';
import Checkbox from '../Checkbox';
import Form from '../Form';
import Illustration from '../Illustration';
import TextInput from '../TextInput';


export default function Signup() {

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPassword,setConfirmPassword] = useState("");
    const [agree,setAgree] = useState("");
    const [error,setError] = useState();
    const [loading,setLoading] = useState();

    const history = useHistory();

    const {signup} = useAuth();

    async function handleSubmit(e){
        e.preventDefault();

        if(password !== confirmPassword ){
            return setError("Password not matched !");
        }

        try{
            setError("")
            setLoading(true)
            await signup(email,password,username);
            history.push("/");

        }catch{
            console.log('something wrong');
            setLoading(false);
            setError("wrong");
        }
    }

  return (
      <>
        <h1>Create an account</h1>
        <div className="column">
           <Illustration/>

            <Form formClass={`${signupClasses.signup} ${formClasses.form}` } method="post" onSubmit={handleSubmit}>
                <TextInput type="text" placeholder="Enter name" icon="person" onchange={(e)=> setUsername(e.target.value)}/>
                <TextInput type="text" placeholder="Enter email" icon="alternate_email" onchange={(e)=> setEmail(e.target.value)}/>
                <TextInput type="password" placeholder="Enter password" icon="lock" onchange={(e)=> setPassword(e.target.value)}/>
                <TextInput type="password" placeholder="Confirm password" icon="lock_clock" onchange={(e)=> setConfirmPassword(e.target.value)}/>
                <Checkbox text="I agree to the Terms &amp; Conditions" onchange={(e)=> setAgree(e.target.value)}/>
                <Button>
                    <span>Submit Now</span>
                </Button>
                <div className="info">
                    Already have an account? <a href="login.html">Login</a> instead.
                </div>
            </Form>
        </div>
    </>
  )
}
