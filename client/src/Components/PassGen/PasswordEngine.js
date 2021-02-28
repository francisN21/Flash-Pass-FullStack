import React, { useState } from "react";
import "./PasswordEngine.css";
import API2 from "./API2";
import PasswordHolder from "./PasswordHolder";
import PasswordHandler from "./PasswordHandler";

const PasswordEngine = () => {
  const [form, setpassword] = useState();
  let possibles = [];
  let word = [];
  let adj = [];
  let verb = [];
  let noun = [];
  const randomWord = async (query) => {
    try {
      for (let i = 0; i < 3; i++) {
        const generatedWord = await API2.extract(query).then(function (
          response
        ) {
          let randomWord = response;
          let upper = randomWord[0].toUpperCase() + randomWord.slice(1);
          let combine = upper.split(" ");
          console.log(combine.join(""));
          return combine.join("");
        });
        switch (query) {
          case "word":
            word.push(generatedWord);
            break;
          case "noun":
            noun.push(generatedWord);
            break;
          case "verb":
            verb.push(generatedWord);
            break;
          case "adjective":
            adj.push(generatedWord);
            break;
          default:
            break;
        }
      }
      switch (query) {
        case "word":
          possibles.push(word);
          break;
        case "noun":
          possibles.push(noun);
          break;
        case "verb":
          possibles.push(verb);
          break;
        case "adjective":
          possibles.push(adj);
          break;
        default:
          break;
      }
    } catch (err) {
      console.log(err);
    }

    console.log(possibles);
  };

  let pw = [];

  const generatePassword = () => {
    setpassword();
    let ans = possibles;
    for (let x = 0; x < ans.length; x++) {
      let rand = Math.floor(Math.random() * ans[x].length);
      pw += possibles[x][rand];
      console.log(possibles);
    }
    let passwordBank = pw;

    setpassword(passwordBank);
    console.log(form);
    return passwordBank;
  };

  return (
    <div>
      <div className="col-md-8 main-engine">
        <div className="row">
          <h2>Schematics</h2>
          <br />
          <button
            className="btn btn-danger"
            onClick={() =>
              randomWord("adjective") && console.log("Ive been clicked")
            }
          >
            Adjective
          </button>

          <button className="btn btn-danger" onClick={() => randomWord("noun")}>
            noun
          </button>
          <button className="btn btn-danger" onClick={() => randomWord("verb")}>
            verb
          </button>
          <button className="btn btn-danger" onClick={() => randomWord("word")}>
            word
          </button>
        </div>
        <div className="row">
          <h2>Generate password</h2>
          <button
            className="btn btn-primary"
            onClick={() => generatePassword()}
          >
            Generate
          </button>
        </div>
        <div className="row">
          <PasswordHandler value={form} />
          <PasswordHolder value={form} />
        </div>
      </div>
    </div>
  );
};

export default PasswordEngine;
