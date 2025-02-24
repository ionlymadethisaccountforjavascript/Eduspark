import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EduLogo from "./assets/LoadingPage/Logo.png";
import Arrow from "./assets/SignUpPage/arrow-left-line.png";
import LineSignUp from "./assets/SignUpPage/LineSignUp.png";
import Group16 from "./assets/FirstPopUp/Group16.png";
import "./App.css";

function LoadingPage() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="EduSparkText_Loading">EduSpark</h1>
        <img src={EduLogo} className="EduLogo_Loading" alt="EduSpark Logo" />
      </header>
    </div>
  );
}

function SignUp() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src={Arrow} className="Arrow" id="Arrow_Signup"/>
        <img src={LineSignUp} id="LineSignUp1" />
        <img src={LineSignUp} id="LineSignUp2" />
        <button type="button" className="Facebook_SignButton" id="SignUp">Sign Up With Facebook</button>
        <button type="button" className="Google_SignButton" id="SignUp">Sign Up With Google</button>
        <button type="button" className="SignButton" id="SignUp">SIGN UP</button>
        <h1 className="Create_your_account_txt">Create your account to embark on your educational adventure</h1>
        <h1 className="SignTextTitle" id="SignUp">SIGN UP</h1>
        <h1 className="SignTxtLink" id="SignUp">Already have an Account? <a href="#" className="SigningLink" id="SignUp">Sign In</a>.</h1>
        <h1 id="OrSignUpWith">Or Sign Up With</h1>
        <SignUpInputs />
      </header>
    </div>
  );
}

function SignIn() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src={Arrow} className="Arrow" id="Arrow_SignIn"/>
        <img src={LineSignUp} id="LineSignUp1" />
        <img src={LineSignUp} id="LineSignUp2" />
        <button type="button" className="Facebook_SignButton" id="SignIn">Sign In With Facebook</button>
        <button type="button" className="Google_SignButton" id="SignIn">Sign In With Google</button>
        <button type="button" className="SignButton" name="signIn">SIGN IN</button>
        <h1 className="Create_your_account_txt">Sign in to access your personalized learning journey</h1>
        <h1 className="SignTextTitle" id="SignIn">SIGN IN</h1>
        <h1 className="SignTxtLink" id="SignIn">Don't have an Account? <a href="#" className="SigningLink" id="SignIn">Sign Up here</a>.</h1>
        <h1 id="OrSignUpWith">Or Sign In With</h1>
        <h1 className="ForgotPassword" id="SignIn">Forgot Password?</h1>
        <SignInInputs />
      </header>
    </div>
  );
}

function SignUpInputs() {
  return (
    <>
      <header className="SignUp-Header">
        <h1 className="Email_INPUT" id="SignUp">Email</h1>
        <h1 className="Password_INPUT" id="SignUp">Password</h1>
        <h1 id="ConfirmPassword_SU">Confirm Password</h1>
        <input className="EmailBox_Input" id="SignUp" placeholder="Enter your email" />
        <input className="PasswordBox_Input" id="SignUp" placeholder="Enter your password" />
        <input id="ConfirmPasswordSignUp_Input" placeholder="Confirm your password" />
      </header>
    </>
  );
}

function SignInInputs() {
  return (
    <>
      <header className="SignUp-Header">
        <h1 className="Email_INPUT" id="SignIn">Email</h1>
        <h1 className="Password_INPUT" id="SignIn">Password</h1>
        <input className="EmailBox_Input" id="SignIn" placeholder="Enter your email" />
        <input className="PasswordBox_Input" id="SignIn" placeholder="Enter your password" />
      </header>
    </>
  );
}


function W1() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src={Arrow} className="Arrow" id="Arrow_W1"/>
        <div class="Ellipse" id="Ellipse-1"></div>
        <div class="Ellipse" id="Ellipse-2"></div>
        <div class="Ellipse" id="Ellipse-3"></div>
        <div class="Ellipse" id="Ellipse-4"></div>
        <h1 className="Question">Question:</h1>
        <h1 className="Some-Question">“Some question”</h1>
        <button type="button" className="Back">Back</button>
        <button type="button" className="options" id="option1">OPTION 1</button>
        <button type="button" className="options" id="option2">OPTION 2</button>
        <button type="button" className="options" id="option3">OPTION 3</button>
        <button type="button" className="options" id="option4">OPTION 4</button>
      </header>
    </div>
  );
}

function P1() {
  const navigate = useNavigate();

  const SignInClick = () => {
    navigate('/SignIn');
  };
  const SignUpClick = () => {
    navigate('/SignUp');
  };

  return (
    <>
      <header className="App-header2">
        <img src={Group16} className="Group16"/>
        <h1 id="P1_Txt">Unlock Your Learning Potential</h1>
        <button type="button" className="SignInButton-P1" onClick={SignInClick}>SIGN IN</button>
        <button type="button" className="SignUpButton-P1" onClick={SignUpClick}>SIGN UP</button>

      </header>
    </>
  );
}

function TestPage() {
  return (
    <div className="App">
      <header className="App-header3">


      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPageWithRedirect />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/W1" element={<W1 />} />
        <Route path="/P1" element={<P1 />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

function LoadingPageWithRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/P1');
    }, 3000); // Delay for 3 seconds

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [navigate]);

  return <LoadingPage />;
}

export default App;