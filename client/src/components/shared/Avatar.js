import React from "react";
import styled from "styled-components";

export const Avatar = ({ className, size, user }) => {
  const {
    id,
    name,
    status,
    points,
    questions,
    answers,
    best_answer,
    avatar,
  } = user;
  console.log(avatar);
  return (
    <div className={className}>
      <img src={avatar} alt={name} />
    </div>
  );
};

export const StyledAvatar = styled(Avatar)`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
  height: ${(props) => props.size}px;
  width: ${(props) => props.size}px;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;
