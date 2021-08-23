import React from "react";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

import "./LoginPage.css";
// import "firebase/app";
// import { auth } from "../firebase";
// import firebase from "firebase/app";

export default function LoginPage() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome To Netflix </h2>
        <div
          className="login-button google"
          // onClick={() => {
          //   auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
          // }}
        >
          <GoogleOutlined /> Login with Google
        </div>
        <br /> <br />
        <div
          className="login-button facebook"
          // onClick={() => {
          //   auth.signInWithRedirect(new firebase.auth.GithubAuthProvider());
          // }}
        >
          <GithubOutlined /> Login with Github
        </div>
      </div>
    </div>
  );
}
