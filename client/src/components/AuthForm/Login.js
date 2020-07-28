import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div``;

export const Login = ({ switchForm }) => {
  return (
    <LoginWrapper>
      <h1>Login</h1>
      <button className="button" onClick={switchForm}>
        Switch to Register
      </button>
    </LoginWrapper>
  );
};
