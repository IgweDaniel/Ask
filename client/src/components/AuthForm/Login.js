import React, { useState } from "react";
import styled from "styled-components";
import { Input } from "../";
import { TiUser, TiKey } from "react-icons/ti";
import { IoIosSwap } from "react-icons/io";
import { FormWrapper } from "./style";

const LoginWrapper = styled(FormWrapper)``;

export const Login = ({ switchForm }) => {
  const [{ email, password }, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setDetails({
      email,
      password,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <LoginWrapper>
      <h1 className="title">Sign In</h1>
      <p className="desc">
        Login to our social questions and share the world's knowledge
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted");
        }}
      >
        <Input
          name="email"
          value={email}
          onChange={handleInputChange}
          icon={(size) => <TiUser size={size} />}
          label="UserName or Email"
          placeHolder="you@email.com"
        />
        <Input
          name="password"
          value={password}
          onChange={handleInputChange}
          icon={(size) => <TiKey size={size} />}
          label="Password"
          placeHolder="yourstrongpasssword"
        />
        <button className="button">Login</button>
      </form>

      <p className="extra">
        Forgot password <span className="click">click here</span>
      </p>
      <div className="switcher clickable" onClick={switchForm}>
        <IoIosSwap size={20} />
      </div>
    </LoginWrapper>
  );
};
