import React, { useState } from "react";

export const Palindrome = () => {
  const [input, setInput] = useState("");
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);

  let tempVal = [];

  const reverseWord = (str) => {
    for (let i = str.length - 1; i >= 0; i--) {
      tempVal.push(str[i]);
    }
  };

  const concatWord = () => {
    tempVal = tempVal.join("");
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

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const checkPalindromeWord = (e) => {
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
