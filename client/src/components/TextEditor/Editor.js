import React, { useRef } from "react";
import JoditEditor from "jodit-react";
import { config } from "./config";
export const Editor = ({ value, onChange }) => {
  const editor = useRef(null);
  return (
    <JoditEditor
      ref={editor}
      value={value}
      config={config}
      tabIndex={1} // tabIndex of textarea
      onBlur={(e) => {
        onChange(e.target.innerHTML);
      }}
      //   onChange={(newContent) => {
      //     onChange(newContent);
      //   }}
    />
  );
};
