// https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6

import { useState } from "react";

const EntryField = ({ value, className }) => {
  const [text, setText] = useState(value);

  return (
    <>
      <textarea
        className="entry-field"
        defaultValue={text}
        onClick={function (e) {
          e.target.style.height = "auto";
          e.target.style.height = e.target.scrollHeight + "px";
        }}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default EntryField;
