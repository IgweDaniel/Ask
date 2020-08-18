import React, { useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import {
  ContentHeader,
  Tabs,
  Answer,
  Question,
  AnswerForm,
} from "../components";
import { VerticalAlign } from "../styles";
import { questions, answers as fullAnswers } from "../data";
import { parseStats } from "../utils";

const QuestionDetailsWrapper = styled.div`
  .detail {
    line-height: 1.8;
  }

  .answers .tabs {
    justify-content: flex-end;
    height: 40px;
  }
  .answers {
    background: #fff;
    min-height: 300px;
  }
  .section-title {
    padding: 0 20px;
    margin: 0;
    height: 50px;
    ${VerticalAlign}
    position: relative;
    bottom: -20px;
    width: 30%;
  }
  .form {
    min-height: 400px;
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
    .meta {
      width: 10%;
      max-width: 50px;
    }
  }
`;

export const QuestionDetails = () => {
  const { questionId } = useParams();
  const question = questions.find((ques) => ques.id === Number(questionId));

  const { full_detail, id, answers } = question;

  useEffect(() => {
    console.log(id);
    return () => {};
  }, [id]);
  return (
    <QuestionDetailsWrapper>
      <ContentHeader />
      {question && (
        <Question {...question}>
          <span slot="title">{question.title}</span>
          <p className="detail" slot="detail">
            {full_detail}
          </p>
        </Question>
      )}

      <h4 className="section-title">{parseStats(answers)} Answers</h4>
      <div className="answers">
        <Tabs
          tabsClassName="tabs"
          tabClassName="tab"
          activeTabClassName="tab-active"
        >
          <div label="Voted">
            {fullAnswers &&
              fullAnswers.map((answer) => (
                <Answer key={answer.id} {...answer} />
              ))}
          </div>
          <div label="Oldest">
            After 'while, <em>Crocodile</em>!
          </div>
        </Tabs>
      </div>
      <div className="form" id="#answer">
        <AnswerForm />
      </div>
    </QuestionDetailsWrapper>
  );
};
