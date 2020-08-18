import React, { useState } from "react";

import styled from "styled-components";
import { Editor } from ".";

// import { VerticalAlign, HorizontalAlign } from "../styles";

const AnswerFormWrapper = styled.div`
  min-height: 400px;
  background: #fff;
  padding: 20px;
  .wrapper {
    margin: 0 auto;
    border: 1px solid ${({ theme }) => theme.colors.lightGrey};
  }
  .button {
    margin: 20px auto;
    width: 100%;
  }

  .jodit_theme_summery {
    border-width: 0px;
  }
  .jodit_theme_summery .jodit-status-bar {
    /* display: none; */

    background: transparent;
  }
  .jodit_theme_summery .jodit-workplace {
    font-family: "Inter";
  }
  .jodit_theme_summery .jodit-toolbar__box {
    /* background: ${({ theme }) => theme.colors.lightGrey}; */
  }
`;

export const AnswerForm = ({ className }) => {
  const [content, setContent] = useState(null);

  return (
    <AnswerFormWrapper>
      <div className="wrapper">
        <Editor
          value={content}
          onChange={(value) => {
            setContent(value);
          }}
        />
      </div>
      <div className="button">Answer</div>
    </AnswerFormWrapper>
  );
};
