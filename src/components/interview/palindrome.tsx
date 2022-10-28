import React, { useState } from "react";

export const Palindrome: React.FunctionComponent = () => {
  const [input, setInput] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  let tempVal: string[] | any = [];

  const reverseWord = (str: string) => {
    for (let i = str.length - 1; i >= 0; i--) {
      if (typeof tempVal !== "string") {
        tempVal.push(str[i]);
      }
    }
  };

  const concatWord = () => {
    if (typeof tempVal !== "string") {
      tempVal = tempVal.join("");
    }
  };

  const clearOperation = () => {
    tempVal = [];
    setInput("");
  };

  const confirmMatch = () => {
    if (input === tempVal) {
      setSuccess(true);
      return;
    }
    setFailed(true);
  };

  const resetSubmission = () => {
    if (success || failed) {
      setSuccess(false);
      setFailed(false);
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const checkPalindromeWord = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    resetSubmission();
    reverseWord(input);
    concatWord();
    confirmMatch();
    clearOperation();
  };

  return (
    <div className="main">
      <form onSubmit={(e) => checkPalindromeWord(e)} className="input-area">
        <input value={input} type="text" onChange={(e) => handleInput(e)} />
        <button type="submit">submit</button>
      </form>
      {success && <p>dude, that is a palindrome!</p>}
      {failed && <p>nah, that is not a palindrome!</p>}
    </div>
  );
};
