import React from "react";
import styled from "styled-components";
import { Question } from "./shared";
import { questions } from "../data";
import { Link } from "react-router-dom";

const FeedWrapper = styled.div``;

export const Feed = ({ className }) => {
  return (
    <FeedWrapper>
      {questions.map((question) => (
        <Question {...question} key={question.id}>
          <span slot="title">
            <Link to={`/question/${question.id}`}>{question.title}</Link>
          </span>
          <p className="short_detail" slot="detail">
            {question.short_detail}
          </p>
        </Question>
      ))}
    </FeedWrapper>
  );
};
