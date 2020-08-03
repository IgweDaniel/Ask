import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { Login } from "./Login";
import { Register } from "./Register";

const AuthFormWrapper = styled.div`
  min-height: 400px;
  max-width: 400px;
  width: 90%;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  display: flex;
  justify-content: center;
  .button {
    width: 100%;
  }
`;

export const AuthForm = ({ trigger }) => {
  const [formType, setFormType] = useState(null);

  useEffect(() => {
    setFormType(null);
  }, [trigger]);

  const switcher = formType ? formType : trigger;
  return (
    <AuthFormWrapper>
      {switcher === "RGS" ? (
        <Register switchForm={() => setFormType("LGN")} />
      ) : (
        <Login switchForm={() => setFormType("RGS")} />
      )}
    </AuthFormWrapper>
  );
};
