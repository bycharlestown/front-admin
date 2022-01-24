// https://medium.com/geekculture/how-to-use-react-router-useparams-436851fd5ef6

import { useState } from "react";

const EntryField = ({ value, className }) => {
  const [text, setText] = useState(value);

  return (
    <>
      <textarea
        className={className}
        defaultValue={text}
        onChange={(e) => setText(e.target.value)}
      />
    </>
  );
};

export default EntryField;
