import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Form = styled.form`
  & div {
    margin: 10px;
  }
  & label {
    margin-right: 4px;
    display: block;
  }
  & input[type="email"],
  input[type="password"] {
    height: 2em;
    width: 20em;
  }
`;

function LoginForm() {
  let history = useHistory();
  const [user, setuser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    event.preventDefault();
    setuser({ ...user, [event.target.name]: event.target.value });
    console.log(user);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (user.email !== "" && user.password !== "") {
      localStorage.setItem("user", JSON.stringify(user));
      history.push("/userpage");
    }
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </Form>
    </div>
  );
}

export default LoginForm;
