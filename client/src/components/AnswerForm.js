import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";

import { createEditor } from "slate";

// Import the Slate components and React plugin.
import { Slate, Editable, withReact } from "slate-react";
// import { VerticalAlign, HorizontalAlign } from "../styles";

const AnswerFormWrapper = styled.div`
  height: 400px;
  background: #fff;
`;

export const AnswerForm = ({ className }) => {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  return (
    <AnswerFormWrapper>
      <Slate
        editor={editor}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      >
        <Editable />
      </Slate>
    </AnswerFormWrapper>
  );
};
