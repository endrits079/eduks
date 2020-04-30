import React from "react";
import Form from "../Form";
export default function LoginForm(props) {
  const registerInputs = {
    name: {
      element: "input",
      config: {
        type: "text",
        placeholder: "name",
        name: "name",
        id: "nameInput",
      },
    },
    surname: {
      element: "input",
      config: {
        type: "text",
        placeholder: "surname",
        name: "surname",
        id: "surnameInput",
      },
    },
    email: {
      element: "input",
      config: {
        type: "email",
        placeholder: "email",
        name: "email",
        id: "emailInput",
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
    confirmpassword: {
      element: "input",
      config: {
        type: "password",
        placeholder: "confirm password",
        name: "confirmpassword",
        id: "confirmpasswordInput",
      },
    },

    register: {
      element: "input",
      config: {
        type: "submit",
        value: "Register",
        name: "register",
        id: "registerBtn",
      },
    },
  };
  return <Form title={props.title} inputs={registerInputs}></Form>;
}
