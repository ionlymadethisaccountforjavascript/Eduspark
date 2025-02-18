import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EduLogo from "./assets/LoadingPage/Logo.png";
import Arrow from "./assets/SignUpPage/arrow-left-line.png";
import LineSignUp from "./assets/SignUpPage/LineSignUp.png";
import EyeHide from "./assets/SignUpPage/EyeHide.png";
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

function NewPage() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src={Arrow} className="Arrow" id="Arrow_Signup"/>
        <img src={LineSignUp} id="LineSignUp1" />
        <img src={LineSignUp} id="LineSignUp2" />
        <button type="button" className="Facebook_Signup">Sign Up With Facebook</button>
        <button type="button" className="Google_Signup">Sign Up With Google</button>
        <button type="button" className="SignInButton">SIGN IN</button>
        <h1 className="Create_your_account_txt">Create your account to embark on your educational adventure</h1>
        <h1 className="SIGNUP">SIGN UP</h1>
        <h1 className="AlrHasAccount">Already have an Account? <a href="#" className="SignIn">Sign In</a>.</h1>
        <h1 id="OrSignUpWith">Or Sign Up With</h1>
        <SignUpInputs />
      </header>
    </div>
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
function Ansh_Demo() {
  return (
    <div className="App">
      <header className="App-header2">
        <h1 className="Question">Question:</h1>
        <h1 className="Some-Question">“Some question”</h1>
        <button type="button" className="Back">Back</button>
        <button type="button" className="Submit">Submit</button>
        <input id="AnswerMath" placeholder="Enter your answer" />
      </header>
    </div>
  );
}

function SignUpInputs() {
  return (
    <>
      <header className="SignUp-Header">
        <h1 id="Email_SU">Email</h1>
        <h1 id="Password_SU">Password</h1>
        <h1 id="ConfirmPassword_SU">Confirm Password</h1>
        <input id="EmailSignUp_Input" placeholder="Enter your email" />
        <input id="PasswordSignUp_Input" placeholder="Enter your password" />
        <input id="ConfirmPasswordSignUp_Input" placeholder="Confirm your password" />
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
        <Route path="/new-page" element={<NewPage />} />
        <Route path="/W1" element={<W1 />} />
        <Route path="/Ansh_Demo" element={<Ansh_Demo />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

function LoadingPageWithRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/new-page');
    }, 3000); // Delay for 3 seconds

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [navigate]);

  return <LoadingPage />;
}

export default App;