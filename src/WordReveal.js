// Demonstrate hooks in Component
import React, { useState } from "react";

const WordReveal = ({ str }) => {
  // Provide in React Dev Tools for this particular Component next parameters:
  //  { 
  //    props
  //      str: "NotABigSecret"
  //    hooks
  //      State: -1
  const [wordIndex, setWordIndex] = useState(-1);
  return (
    <div>
      <h1>
        Click the button to reveal the next character of the secret string.
      </h1>
      <div>
        {str.split("").map((character, index) => {
          if (index > wordIndex)
            return <span key={`${character}${index}`}>_</span>;
          return <span>{character}</span>;
        })}
      </div>
      <button onClick={() => setWordIndex(wordIndex + 1)}>
        Next Character
      </button>
      <button onClick={() => setWordIndex(-1)}>Reset</button>
    </div>
  );
};

export default WordReveal;
