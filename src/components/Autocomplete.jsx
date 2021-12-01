import React, { useState } from "react";

export const Autocomplete = () => {
  let data = [
    "Adam",
    "Jane",
    "Anthony",
    "Bob",
    "Cecile",
    "Caroline",
    "Cathy",
    "Kyle",
    "Franky",
    "Kevin",
  ];
  let suggestion = [];
  const [value, setValue] = useState("");
  const [list, setList] = useState();

  const setInputValue = (x) => {
    setValue(x);
  };

  const handleAutoComplete = (e) => {
    setValue(e.target.value);
    data.forEach((item) => {
      if (
        item.substring(0, e.target.value.length).toUpperCase() ===
        e.target.value.toUpperCase()
      ) {
        suggestion.push(item);
        setList(
          suggestion.map((x, id) => {
            return (
              <p key={id} onClick={() => setInputValue(x)}>
                {x}
              </p>
            );
          })
        );
      }
    });
  };

  return (
    <div className="auto__complete--container">
      <input
        type="text"
        className="auto__complete--input"
        value={value}
        onChange={(e) => handleAutoComplete(e)}
      />
      {list}
    </div>
  );
};
