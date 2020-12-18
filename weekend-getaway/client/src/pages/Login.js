import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { Link } from 'react-router-dom';
import app from "../base.js";
import  {AuthContext} from "../Auth.js";
import API from "../utils/API";
import {Form, Button } from "react-bootstrap";

const Login = ({ history }) => {
  console.log(history);
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  if (currentUser) {
    const uid=app.auth().currentUser.uid;
    API.getUid(uid);
    alert("You are now logged in!")
    return <Redirect to="/" />;
  }

  return (

    <div className="container">
      <div className="row">
        <h1 className="col-12 text-center"> Log in to Your Account </h1>
      </div>
      
      <div className="row">
        <span className="col-2"></span>
        <Form onSubmit={handleLogin} className="col-8">
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

      <div className="row mt-2">
        <span className="col-2"></span>
        <div className="col-8">
        <Link to="/passwordReset">
          <p>Forgot Password?</p>
        </Link>
        </div>
        <span className="col-2"></span>
        </div>
    
    </div>
  );
};

export default withRouter(Login);