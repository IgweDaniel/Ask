import styled from "styled-components";

export const QuestionContent = styled.div`
  background: #fff;
  border-bottom: 1px solid #e4e6e6;
  display: flex;
  justify-content: center;
  padding: 20px;
  flex-direction: column;

  .meta {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .body {
    width: 100%;
    padding: 0 5px;
  }
  .tags {
    margin: 20px 0;
  }
  .tag {
    display: inline-block;
    margin-right: 5px;
    border: 1px solid #e4e6e6;
    padding: 0 5px;
    font-size: 12px;
    text-transform: capitalize;
  }
  .button-group {
    font-size: 13px;
  }

  @media (max-width: 767px) {
    .button-group {
      width: 100%;
    }
    .footer {
      padding: 10px;
      background-color: #f5f5f5;
      grid-auto-rows: 30px;
      display: grid;
      grid-gap: 10px;
      justify-items: center;
      grid-template-columns: repeat(2, 1fr);
    }
    .answer.button {
      width: 100%;
      grid-column: span 2;
    }
    .button-group .icon {
      width: 30%;
      justify-content: flex-end;
    }
    .button-group .text {
      width: 60%;
    }
  }

  .comment.answered {
    color: ${({ theme }) => theme.colors.primary};
  }

  .action {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 17px;
    font-size: 25px;

    color: ${({ theme }) => theme.colors.grey};
  }

  .votes {
    font-size: 18px;
    font-weight: bold;
    margin: 2px 0;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    .title {
      margin-top: 8px;
    }
    .button-group {
      margin-right: 10px;
    }
    .answer.button {
      margin-left: auto;
    }
    .meta {
      max-width: 50px;
      width: 20%;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
    }

    .action {
      margin: 40px 0;
    }

    .body {
      width: 90%;
      padding: 0 10px;
    }

    .footer {
      background-color: #f5f5f5;
      display: flex;
      align-items: center;
      padding: 10px;
      margin: 10px 0;
      height: 60px;
      flex-direction: row;
    }
  }
  @media (min-width: 1024px) {
    .meta {
      width: 10%;
      max-width: 50px;
    }
  }
`;

export const QuestionWrapper = styled.div`
  position: relative;
`;
