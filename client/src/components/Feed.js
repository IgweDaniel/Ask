import React from "react";
import styled from "styled-components";
import { Question } from "./shared";
import { questions } from "../data";

const FeedWrapper = styled.div``;

export const Feed = ({ className }) => {
  return (
    <FeedWrapper>
      {questions.map((question) => (
        <Question {...question} key={question.id} />
      ))}
    </FeedWrapper>
  );
};
