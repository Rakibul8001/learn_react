import React from 'react'
import Illustration from '../Illustration';
import Form from '../Form';
import signupClasses from '../../styles/Signup.module.css';
import formClasses from '../../styles/Form.module.css';
import TextInput from '../TextInput';
import Checkbox from '../Checkbox';
import Button from '../Button';

export default function Signup() {
  return (
      <>
        <h1>Create an account</h1>
        <div className="column">
           <Illustration/>

            <Form formClass={`${signupClasses.signup} ${formClasses.form}` } method="post">
                <TextInput type="text" placeholder="Enter name" icon="person"/>
                <TextInput type="text" placeholder="Enter email" icon="alternate_email"/>
                <TextInput type="password" placeholder="Enter password" icon="lock"/>
                <TextInput type="password" placeholder="Confirm password" icon="lock_clock"/>
                <Checkbox type="checkbox" text="I agree to the Terms &amp; Conditions"/>
                <Button>
                    Submit Now
                </Button>
                <div className="info">
                    Already have an account? <a href="login.html">Login</a> instead.
                </div>
            </Form>
        </div>
    </>
  )
}
