import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import formClasses from "../../styles/Form.module.css";
import loginClasses from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [loading, setLoading] = useState();

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log("something wrong");
      console.log(err);
      setLoading(false);
      setError("Failed to login !");
    }
  }

  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />

        <Form
          formClass={`${loginClasses.login} ${formClasses.form}`}
          onSubmit={handleLogin}
        >
          <TextInput
            type="text"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon="lock"
          />

          <Button disabled={loading}>
            <span>Login</span>
          </Button>
          {error && <p className="error">{error}</p>}
          <div className="info">
            Don't have an account?<Link to="/signup">Signup</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
