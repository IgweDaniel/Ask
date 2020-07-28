import React from "react";
import styled from "styled-components";

const RegisterWrapper = styled.div``;

export const Register = ({ switchForm }) => {
  return (
    <RegisterWrapper>
      <h1>Register</h1>
      <button className="button" onClick={switchForm}>
        Switch to Login
      </button>
    </RegisterWrapper>
  );
};
