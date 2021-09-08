import React, { useRef } from "react";
import db, { auth } from "../../Firebase/firebase";
import "./SignUp.css";

export default function SignUpScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);

        db.collection("plans")
          .doc(authUser.user._delegate.email)
          .set({
            active: "Basic",
            plans: [
              { name: "Premium", description: "4k + HD" },
              { name: "Standard", description: "1080p" },
              { name: "Basic", description: "720p" },
            ],
          });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="sign-up-screen">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder="Email" type="email" />
        <input ref={passwordRef} placeholder="Password" type="password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="sign-up-screen-gray">New to Netflix? </span>
          <span className="sign-up-screen-link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}
