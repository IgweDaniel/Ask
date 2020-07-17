import React from "react";
import styled from "styled-components";
import logouri from "../../assets/images/qa.png";
const Header = ({ className }) => (
  <header className={className}>
    <nav className="panel">
      <a href="#" className="logo">
        <img src={logouri} alt="logo" />
      </a>
      <div className="search">
        <div className="input-group">
          <input type="text" name="" id="" placeholder="Type search words" />
          <span className="icon">
            <i className="fas fa-search"></i>
          </span>
        </div>
      </div>

      <ul className="actions">
        <li>
          <a href="#" className="button login">
            Sign In
          </a>
        </li>
        <li>
          <a href="#" className="button register">
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

const StyledHeader = styled(Header)`
  height: 85px;
  height: ${({ theme }) => theme.settings.navHeight}px;
  background-color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 200;
  border-bottom: 2px solid ${(props) => props.theme.colors.lightGrey};

  .panel {
    height: 100%;
    width: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    width: 90%;
    margin: 0 auto;
  }
  .logo {
    width: 50px;
    height: 50px;
    display: block;
  }
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
  }
  .search {
    display: none;
  }
  .input-group {
    height: 100%;
    width: 100%;
    max-width: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ccc;
    padding: 5px 10px;
    border: 1px solid #ccc;
  }

  .input-group .icon {
    width: 20%;
    max-width: 20px;
    display: block;
  }
  input {
    flex: 1;
    border: none;
    box-shadow: none;
    background: transparent;
    outline: none;
  }
  .button {
    font-weight: bold;
    padding: 7px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin: 0 5px;
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 2px;
  }
  .button.register {
    background-color: ${(props) => props.theme.colors.grey};
  }
  .actions {
    max-width: 200px;
    flex: 1;
    display: none;
    align-items: center;
    justify-content: center;
  }

  @media (min-width: 768px) {
    .search {
      flex: 2;
      display: flex;
      justify-content: flex-end;
    }
    .logo {
      width: 70px;
      height: 80px;
      display: block;
    }
    .actions {
      max-width: 200px;
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  @media (min-width: 1024px) {
  }
`;

export default StyledHeader;
