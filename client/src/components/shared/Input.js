import React from "react";
import styled from "styled-components";
const InputWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;

  label {
    font-size: 12px;
    margin: 4px 0;
  }
  .input-container {
    display: flex;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding: 0px 5px;
    height: 40px;
    width: 100%;

    /* background: red; */
  }
  .icon {
    flex: 2;
    max-width: 30px;
    color: ${({ theme }) => theme.colors.grey};
  }
  input[type="text"] {
    flex: 10;
    display: block;
    border: none;
    outline: none;
    box-shadow: none;
  }
  input::placeholder {
    font-size: 12.5px;
    font-family: Inter;
  }
`;

export const Input = ({ icon, label, placeHolder, ...props }) => {
  const ICON_SIZE = 20;
  return (
    <InputWrapper>
      <label htmlFor={label}>{label}</label>
      <div className="input-container">
        <span className="icon">{icon(ICON_SIZE)}</span>
        <input
          type="text"
          {...props}
          id={label}
          placeholder={placeHolder ? placeHolder : ""}
        />
      </div>
    </InputWrapper>
  );
};
