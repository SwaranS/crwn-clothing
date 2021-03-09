import React from "react";

import "./sign-in-and-sign-up.scss";
import SignIn from "../../componenets/sign-in/sign-in.componenet";
import SignUp from "../../componenets/sign-up/sign-up.componenet";

const SignInAndSignUpPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
