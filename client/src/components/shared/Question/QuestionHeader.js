import React from "react";
import styled from "styled-components";
import moment from "moment";
const QuestionHeaderWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  .date {
    display: block;
    margin-left: auto;
    font-weight: 500;
    font-size: 13px;
    text-transform: capitalize;
  }
  @media (min-width: 450px) {
    margin-left: auto;
    flex-direction: row;
  }
`;

const UserName = styled.div`
  display: flex;
  align-items: center;
  .name {
    display: block;
    margin-right: 10px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 15px;
  }
`;

export const QuestionHeader = ({ user, time, timePrefix = "Asked" }) => {
  const date = moment(new Date(time)).format("MMM Do YY");
  return (
    <QuestionHeaderWrapper>
      {user && (
        <UserName className="username">
          <span className="name">{user.name}</span>
          <span className={`badge ${user.status.toLowerCase()}`}>
            {user.status}
          </span>
        </UserName>
      )}
      <span className="date">
        {timePrefix}: <span className="primary">{date}</span>
      </span>
    </QuestionHeaderWrapper>
  );
};
