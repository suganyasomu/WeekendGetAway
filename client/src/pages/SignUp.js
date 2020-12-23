import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../base";
import {Form, Button } from "react-bootstrap";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    // <div>
    //   <h1>Sign up</h1>
    //   <form onSubmit={handleSignUp}>
    //     <label>
    //       Email
    //       <input name="email" type="email" placeholder="Email" />
    //     </label>
    //     <label>
    //       Password
    //       <input name="password" type="password" placeholder="Password" />
    //     </label>
    //     <button type="submit">Sign Up</button>
    //   </form>
    // </div>

    <div className="container">
      <div className="row">
        <h1 className="col-12 text-center"> Create an Account </h1>
      </div>
      
      <div className="row">
        <span className="col-2"></span>
        <Form onSubmit={handleSignUp} className="col-8">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <span className="col-2"></span>
      </div>
    
    </div>
  );
};

export default withRouter(SignUp);