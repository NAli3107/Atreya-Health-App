// see SignupForm.js for comments
import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/react-hooks";
import { LOGIN_USER } from "../../utils/mutations";

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [login] = useMutation(LOGIN_USER);

  // allow user to input
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  //   button
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log("button clicked");
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    try {
      const { data } = await login({
        variables: { ...userFormData },
      });

      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div class="col-sm-4 sign">
        <br></br>
        <h1>Sign in to your account</h1>
        <div class="col-sm-4  form">
          <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
            <Alert
              dismissible
              onClose={() => setShowAlert(false)}
              show={showAlert}
              variant="danger"
            >
              Something went wrong with your login credentials!
            </Alert>
            <div class="col-sm-4 thumbnail">
              <Form.Group>
                <Form.Label htmlFor="email" class="text">
                  Email
                </Form.Label>
                <br></br>
                <Form.Control
                  type="text"
                  placeholder="Your email"
                  name="email"
                  onChange={handleInputChange}
                  value={userFormData.email}
                  required
                />
                {/* <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback> */}
              </Form.Group>
              <br></br>
              <Form.Group>
                <Form.Label htmlFor="password" class="text">
                  Password
                </Form.Label>
                <br></br>
                <Form.Control
                  type="password"
                  placeholder="Your password"
                  name="password"
                  onChange={handleInputChange}
                  value={userFormData.password}
                  required
                />
                {/* <Form.Control.Feedback type="invalid">
            Password is required!
      
          </Form.Control.Feedback> */}
              </Form.Group>
              <div className="loginbtn">
                <Button
                  disabled={!(userFormData.email && userFormData.password)}
                  type="submit"
                  variant="success"
                >
                  SUBMIT
                </Button>
              </div>
            </div>
          </Form>
        </div>
        <br></br> <br></br>
      </div>
    </>
  );
};

export default LoginForm;
