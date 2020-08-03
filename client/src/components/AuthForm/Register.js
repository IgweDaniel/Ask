import React, { useState } from "react";
import styled from "styled-components";
import { FormWrapper } from "./style";
import { Input } from "../";
import { TiKey, TiMail } from "react-icons/ti";
import { IoIosSwap } from "react-icons/io";
import { FiUser } from "react-icons/fi";
const RegisterWrapper = styled(FormWrapper)`
  .button {
  }
`;

export const Register = ({ switchForm }) => {
  const [{ name, password, email }, setDetails] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleInputChange = (e) => {
    setDetails({
      email,
      name,
      password,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <RegisterWrapper>
      <h1 className="title">Sign Up</h1>
      <p className="desc">
        Join millions of user in their quest for the secrets that govern our
        universe
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();

          console.log("Submitted");
        }}
      >
        <Input
          icon={(size) => <FiUser size={18} />}
          label="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
          placeHolder="JohnDoe"
        />
        <Input
          icon={(size) => <TiMail size={size} />}
          label=" Email"
          value={email}
          name="email"
          onChange={handleInputChange}
          placeHolder="you@email.com"
        />
        <Input
          icon={(size) => <TiKey size={size} />}
          label="Password"
          value={password}
          name="password"
          onChange={handleInputChange}
          placeHolder="yourstrongpasssword"
        />
        <button className="button">Create An Account</button>
      </form>

      <div className="switcher clickable" onClick={switchForm}>
        <IoIosSwap size={20} />
      </div>
    </RegisterWrapper>
  );
};
