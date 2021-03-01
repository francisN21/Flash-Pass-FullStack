import React, { useState } from "react";
import "./PasswordEngine.css";
import API from "./API";
import PasswordHolder from "./PasswordHolder";
import PasswordHandler from "./PasswordHandler";

const PasswordEngine = () => {
  const [form, setpassword] = useState();
  let possibles = [];
  let word = [];
  let adj = [];
  let verb = [];
  let noun = [];
  let specialChar = [
    "$",
    "@",
    "#",
    "&",
    "?",
    "~",
    "!",
    "_",
    ".",
    "*",
    "+",
    "-",
    "=",
  ];
  let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const extraCharacters = (query) => {
    switch (query) {
      case "special":
        console.log(query);
        possibles.push(specialChar);
        break;
      case "num":
        console.log(query);
        possibles.push(number);
        break;
      default:
        break;
    }
  };
  const randomWord = async (query) => {
    try {
      for (let i = 0; i < 3; i++) {
        const generatedWord = await API.extract(query).then(function (
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
    }
    let passwordBank = pw;
    console.log(possibles);
    setpassword(passwordBank);
    console.log(form);
    return passwordBank;
  };

  // form.handleInputChange = (event) => {
  //   setpassword(event);
  // };

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
          <button
            className="btn btn-danger"
            onClick={() => extraCharacters("num")}
          >
            number
          </button>
          <button
            className="btn btn-danger"
            onClick={() => extraCharacters("special")}
          >
            special
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
