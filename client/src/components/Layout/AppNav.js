import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { HorizontalAlign } from "../../styles";
import { AiFillHome, AiFillRead } from "react-icons/ai";

import { FaPoll, FaUsers, FaPeopleCarry } from "react-icons/fa";

const SideNavWrapper = styled.div`
  ul.quick-links > li {
    cursor: pointer;
    ${HorizontalAlign}
    flex-direction: column;
    margin: 5px 0;
    padding: 10px;
    font-weight: bold;
  }
  ol.subLink {
    width: 100%;
    margin-left: 20px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.grey};
  }
  ol.subLink li {
    margin: 5px 0;
    font-weight: normal;
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  ul.quick-links > li .content {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .subLinks li {
    padding: 0px;
  }
  ul.quick-links > li.active {
    background-color: ${(props) => props.theme.colors.lightGrey};
  }
  .icon img {
    height: 20px;
    width: 20px;
    object-fit: cover;
    object-position: center;
  }
  .icon {
    margin-right: 5px;
  }
`;

const ICON_SIZE = 18;

export const AppNav = () => {
  return (
    <SideNavWrapper>
      <ul className="quick-links">
        <li className="active">
          <div className="content">
            <span className="icon">
              <AiFillHome size={ICON_SIZE} />
            </span>
            <span className="text">
              <Link to="/">Home</Link>
            </span>
          </div>
        </li>
        <li>
          <div className="content">
            <span className="icon">
              <FaPeopleCarry size={ICON_SIZE} />
            </span>
            <span className="text">
              <Link to="/communities">Communities</Link>
            </span>
          </div>
          <ol className="subLink">
            <li>
              <span className="icon">
                <img
                  src={require("../../assets/images/thumb1.jpeg")}
                  alt="ux"
                />
              </span>
              <span className="text">UX</span>
            </li>
            <li>
              <span className="icon">
                <img
                  src={require("../../assets/images/thumb2.jpeg")}
                  alt="ux"
                />
              </span>
              <span className="text">Progressive Web App</span>
            </li>
          </ol>
        </li>
        <li>
          <div className="content">
            <span className="icon">
              <AiFillRead size={ICON_SIZE} />
            </span>
            <span className="text">Questions</span>
          </div>
          <ol className="subLink">
            <li>Latest Questons</li>
            <li>Hot Questions</li>
            <li>Hot Answers</li>
          </ol>
        </li>

        <li>
          <div className="content">
            <span className="icon">
              <FaPoll size={ICON_SIZE} />
            </span>
            <span className="text">Polls</span>
          </div>
        </li>
        <li>
          <div className="content">
            <span className="icon">
              <FaUsers size={ICON_SIZE} />
            </span>

            <span className="text">
              <Link to="/users">Users</Link>
            </span>
          </div>
        </li>
      </ul>
    </SideNavWrapper>
  );
};
