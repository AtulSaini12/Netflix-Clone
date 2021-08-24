import React, { useState } from "react";
// import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import { SignUpScreen } from "../index";
import "./LoginPage.css";
// import "firebase/app";
// import { auth } from "../firebase";
// import firebase from "firebase/app";

export default function LoginPage() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="login-screen">
      <div className="login-screen-bg">
        <img
          className="login-screen-logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="netflix-logo"
        />
        <button className="login-screen-button" onClick={() => setSignIn(true)}>
          Sign In
        </button>
        <div className="login-screen-gradient"></div>
      </div>

      <div className="login-screen-body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programs and more.</h1>
            <h2>Watch anytime, Cancel at any time.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="login-screen-input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  className="login-screen-get-started"
                  onClick={() => setSignIn(true)}
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
