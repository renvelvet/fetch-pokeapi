import React from "react";
import styled from "styled-components";

import LoginForm from "../../components/LoginForm/LoginForm";

const Div = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;
function Login() {
  return (
    <Div>
      <LoginForm />
    </Div>
  );
}

export default Login;
