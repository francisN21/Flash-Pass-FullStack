import React, { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";

const FormAuthenticate = () => {
  const [form, setform] = useState(true);
  // console.log(setform);

  const login = "Login";
  const signup = "SignUp";

  const haveAcc = "Already have an Account?";
  const noAcc = "Joining my app is one click away!";

  let formText;
  let formButton;

  if (form === !(<SignUp />)) {
    formText = haveAcc;
    formButton = login;
  } else {
    formText = noAcc;
    formButton = signup;
  }
  return (
    <div>
      <div>
        {form ? <Login /> : <SignUp />}

        <div>
          <p>{formText}</p>
          <button className="btn btn-primary" onClick={() => setform(!form)}>
            {formButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FormAuthenticate;
