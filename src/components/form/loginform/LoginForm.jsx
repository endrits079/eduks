import React from "react";
import Form from "../Form";
export default function LoginForm(props) {
  const loginInputs = {
    username: {
      element: "input",
      config: {
        type: "text",
        placeholder: "username",
        name: "username",
        id: "usernameInput",
      },
    },
    password: {
      element: "input",
      config: {
        type: "password",
        placeholder: "password",
        name: "password",
        id: "passwordInput",
      },
    },
    forgotPassword: {
      element: "link",
      link: "Forgot Password?",
      config: {
        to: "forgotpassword",
      },
    },
    login: {
      element: "input",
      config: {
        type: "submit",
        value: "Login",
        name: "login",
        id: "loginBtn",
      },
    },
  };
  return <Form title={props.title} inputs={loginInputs}></Form>;
}
