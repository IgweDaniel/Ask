import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Avatar } from ".";
import { Align } from "../../styles";

const UserWrapper = styled.div`
  ${Align}
  flex-direction:column;

  background: #fff;
  border: 1px solid ${({ theme }) => theme.colors.lightGrey};

  padding: 10px;
  height: 100%;
  width: 100%;
  .status {
    display: block;
    text-align: center;
    background: ${({ theme }) => theme.colors.dark};
    color: #fff;
    text-transform: capitalize;
    padding: 5px;
  }
  .user-name {
    margin: 5px 0;
    text-align: center;
  }
`;

export const User = ({ ...user }) => {
  const { id, name, status } = user;
  return (
    <UserWrapper className="shadow">
      <Avatar user={user} size={70} />

      <Link to={`/users/${id}`}>
        <h5 className="user-name">{name}</h5>
        <span className="status">{status}</span>
      </Link>
    </UserWrapper>
  );
};
