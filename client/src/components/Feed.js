import React from "react";
import styled from "styled-components";
import { Question } from "./shared";
import { questions } from "../data";
export const Feed = ({ className }) => {
  return (
    <div className={className}>
      {questions.map((question) => (
        <Question {...question} key={question.id} />
      ))}
    </div>
  );
};

export const StyledFeed = styled(Feed)``;
