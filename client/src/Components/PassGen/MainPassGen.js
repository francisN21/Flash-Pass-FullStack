import React from "react";

const MainPassGen = () => {
  let possibles = [];
  let pw = [];
  let ans = [];
  const generatePassword = async () => {
    try {
      for (let x = 0; x < ans.length; x++) {
        let rand = Math.floor(Math.random() * ans[x].length);
        pw += possibles[x][rand];
        console.log(possibles);
      }
    } catch (e) {}
  };
  return (
    <button className="btn btn-danger" onClick={generatePassword}>
      Word
    </button>
  );
};

export default MainPassGen;
