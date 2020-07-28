import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { TiTickOutline, TiUserAdd, TiEye } from "react-icons/ti";

import { VerticalAlign, Align } from "../../styles";

const QuickProfileWrapper = styled.div`
position:relative;
    ${VerticalAlign}
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
    padding: 20px;
    background: #fff;
    height: 100%;
    width: 100%;
    flex-direction:column;
  .user-avatar{
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    height: 60px;
    width: 60px;
    padding: 5px;
  }
  .user-avatar  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  .name {
    font-size: 17px;
    font-weight: bold;
    margin: 5px 0;
    color:${({ theme }) => theme.colors.primary};
  }
  .badge {
    background:${({ theme }) => theme.colors.yellow};
    color:#fff;
    text-transform:uppercase;
    font-variant:small-caps;
    position:absolute;
    top:10px;

    right:10px;
    height:25px;
    width:25px;
    border-radius:50%;

    ${Align}
  }
  .user-stats{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      margin:10px 0 0;
      justify-items:center;
      width:100%;

      border-radius:10px;
  }
  .user-actions{
    display:flex;
    position:absolute;
    bottom:20px;
    width:80%;
    justify-content:space-between;
  }
  .user-actions .user-action{
 
    /* box-shadow: rgba(0, 0, 0, 0.03) 0px 21px 36px; */
    height:25px;
    width:50px;
    ${Align}
    background:${({ theme }) => theme.colors.primary};
    /* border:1px solid ${({ theme }) => theme.colors.lightGrey}; */

  }

  .user-stats .stat span.text{
      margin:5px 0
      text-transform:uppercase;
      font-variant:small-caps
  }
  .user-stats .stat span.value{
     font-weight:bold;
  }

`;

const UserStat = ({ value, label }) => (
  <div className="stat">
    <span className="value">{value}</span>
    <span className="text"> {label}</span>
  </div>
);

export const QuickProfile = ({
  id,
  name,
  status,
  points,
  questions,
  answers,
  best_answer,
  avatar,
}) => {
  return (
    <QuickProfileWrapper>
      <div className="user-avatar">
        <img src={avatar} alt={name} />
      </div>
      <span className="name"> {name} </span>
      <span className="badge">
        <TiTickOutline />
      </span>
      <div className="user-stats ">
        <UserStat value={points} label="points" />
        <UserStat value={questions} label="questions" />
        <UserStat value={answers} label="answers" />
        <UserStat value={best_answer} label="Best Answers" />
      </div>

      <div className="user-actions">
        <div className="user-action">
          <div className="icon">
            <TiUserAdd size={17} fill="#fff" />
          </div>
        </div>
        <Link to={`/users/${id}`}>
          <div className="user-action">
            <div className="icon">
              <TiEye size={16} fill="#fff" />
            </div>
          </div>
        </Link>
      </div>
    </QuickProfileWrapper>
  );
};
