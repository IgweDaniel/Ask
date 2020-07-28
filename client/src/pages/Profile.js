import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const ProfileWrapper = styled.div`
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  column-gap: 20px;
  grid-auto-rows: 350px;
`;

export const Profile = ({ className }) => {
  const { userId } = useParams();
  return <ProfileWrapper className={className}>{userId}</ProfileWrapper>;
};
