import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { auth } from "../base.js";

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent, setEmailHasBeenSent] = useState(false);
  const [error, setError] = useState(null);

  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
  };
  const sendResetEmail = event => {
    event.preventDefault();
    auth
      .sendPasswordResetEmail(email)
      .then(() => {
        setEmailHasBeenSent(true);
        setTimeout(() => { setEmailHasBeenSent(false) }, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return (
    <div style={{
      margin: '0', 
      backgroundImage: "linear-gradient(#E8E8E4, white)", 
      width: '100%', 
      height: '100%'
    }} > 
      <div className="container">
        <div className="row">
          <h1 className="col-12 text-center" style={{ marginTop: '80px' }}> Reset Your Password </h1>
        </div>
        <div className="row">
          <span className="col-2"></span>
          <Form onSubmit={sendResetEmail} className="col-8">
            {emailHasBeenSent && (
              <Form.Text>An Email has been sent to you!</Form.Text>
            )}
            {error !== null && (
              <Form.Text>{error}</Form.Text>
            )}
            <Form.Group>
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="userEmail"
                id="userEmail"
                value={email}
                placeholder="Input your email"
                onChange={onChangeHandler}
                className="mb-3 w-full px-1 py-2"
              />
            </Form.Group>
            <Button variant="primary" className="btn-outline-secondary" type="submit">Send me a reset link</Button>
          </Form>
        </div>
        <div className="row">
          <span className="col-2"></span>
          <div className="col-8">
            <Link to="/login">
              <Form.Text className="mt-2">&larr; back to login page</Form.Text>
            </Link>
          </div>
          <span className="col-2"></span>
        </div>
        <span className="col-2"></span>
      </div>
    </div>
  );
};
export default PasswordReset;