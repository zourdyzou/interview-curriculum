import React, { useState } from "react";

const data = ["Adam", "Jane", "Anthony", "Bob", "Cecile", "Caroline", "Cathy", "Kyle", "Franky", "Kevin"] as string[];

export const Autocomplete: React.FunctionComponent = () => {
  const suggestion: any = [];
  const [value, setValue] = useState<string>("");
  const [list, setList] = useState<React.ReactElement[]>();

  const setInputValue = (x: string) => {
    setValue(x);
  };

  const handleAutoComplete = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    data.forEach((item) => {
      if (item.substring(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase()) {
        suggestion.push(item);

        setList(
          suggestion.map((x: string, id: number) => {
            return (
              <p key={`suggestions--list-${id}`} onClick={() => setInputValue(x)}>
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
      <input type="text" className="auto__complete--input" value={value} onChange={(e) => handleAutoComplete(e)} />
      {list}
    </div>
  );
};
