import React from "react";
import { auth } from "../../firebase/index";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import "./AuthUI.css";
import { Helmet } from "react-helmet";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/dash",
  signInOptions: [
    auth.GoogleAuthProvider.PROVIDER_ID,
    auth.FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,
    auth.PhoneAuthProvider.PHONE_SIGN_IN_METHOD,
  ],
};

const AuthUI = () => {
  return (
    <>
      <div className="banner-top">
        <Helmet>
          <title>TestNearU</title>
        </Helmet>

        <h1>TESTNEARU</h1>

        <h2>Discover COVID-19 testing locations near you.</h2>
        <img
          alt="covid"
          src="https://www.clydeco.com/getattachment/adc68b7b-3a83-4a32-8c83-dcf1df851351/facebook-image?variant=introbannerdesktopvarient"
        ></img>

        <h3 style={{ marginTop: "2em" }}>
          Do your part and social distance. Follow community guidelines and help
          stop the spread of COVID-19.
        </h3>
        <h2 className="banner-top" style={{ marginTop: "1px" }}>
          Sign In
        </h2>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={auth()}
          className="auth-ui"
          style={{ backgroundColor: "#FFF" }}
        />
      </div>
    </>
  );
};

export default AuthUI;
