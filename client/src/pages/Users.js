import React from "react";
import styled from "styled-components";
import { users } from "../data";
import { User, ContentHeader } from "../components";

const UserWrapper = styled.div`
  display: grid;
  background: #fff;
  height: 100%;
  padding: 10px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 5px;

  grid-auto-rows: 200px;

  @media (min-width: 768px) {
    /* grid-template-columns: repeat(3, 1fr); */
  }
  @media (min-width: 1024px) {
    grid-gap: 10px;
    padding: 20px;
    /* grid-template-columns: repeat(4, 1fr); */
  }
`;

export const Users = ({ className }) => {
  return (
    <>
      <ContentHeader />
      <UserWrapper className={className}>
        {users.map((user) => (
          <div className="item" key={user.id}>
            <User
              {...user}
              id={user.id}
              name={user.name}
              avatar={user.avatar}
              status={user.status}
            />
          </div>
        ))}
      </UserWrapper>
    </>
  );
};
