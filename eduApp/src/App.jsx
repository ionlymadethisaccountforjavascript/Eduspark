import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import EduLogo from "./assets/LoadingPage/Logo.png";
import Arrow from "./assets/SignUpPage/arrow-left-line.png";
import Arrow2 from "./assets/GradeSelecter/arrow-left-line2.png";
import LineSignUp from "./assets/SignUpPage/LineSignUp.png";
import Group16 from "./assets/FirstPopUp/Group16.png";
import SelectedSign from "./assets/GradeSelecter/Check.png";
import "./App.css";

function LoadingPage() {
  return (
    <div className="App">
      <header class="absolute w-[390px] h-[844px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 bg-[#007BFF]">
        <h1 class="[text-shadow:0px_1px,_1px_0px,_1px_1px] absolute w-[347px] h-[40px] left-[24px] top-[422px] font-['Plus_Jakarta_Sans'] not-italic font-black text-[32px] leading-[40px] text-center tracking-wider text-[#FFFFFF] border-[1px] border-[solid] border-[#007BFF]">EduSpark</h1>
        <img src={EduLogo} class="absolute w-[168.2px] h-[108px] left-[111px] top-[314px]" alt="EduSpark Logo" />
      </header>
    </div>
  );
}

function SignUp() {
  return (
    <div className="App">
      <header class="absolute w-[390px] h-[844px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[rgb(0,_0,_0)] bg-[#ffffff]">
        <img src={Arrow} class="absolute w-[24px] h-[24px] left-[21px] top-[45px]" id="Arrow_Signup" />
        <img src={LineSignUp} class="absolute w-[75px] h-0 left-[45px] top-[534px] border-[1px] border-[solid] border-[#6C6C6C] rotate-180" />
        <img src={LineSignUp} class="absolute w-[75px] h-0 right-[45px] top-[534px] border-[1px] border-[solid] border-[#6C6C6C] rotate-180" />
        <button type="button" class="box-border flex flex-row justify-center items-center p-[15px] gap-[10px] bg-[#ffffff] absolute w-[317px] h-[49px] left-[37px] top-[572px] border-[1px] border-[solid] border-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[16px] leading-[20px] tracking-[0.02em] capitalize text-[#007BFF] flex-none order-none flex-grow-0" id="SignUp">Sign Up With Facebook</button>
        <button type="button" class="box-border flex flex-row justify-center items-center p-[15px] gap-[10px] bg-[#ffffff] absolute w-[317px] h-[49px] left-[37px] top-[636px] border-[1px] border-[solid] border-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[16px] leading-[20px] tracking-[0.02em] capitalize text-[#007BFF] flex-none order-none flex-grow-0" id="SignUp">Sign Up With Google</button>
        <button type="button" class="flex flex-row justify-center items-center p-[15px] gap-[10px] absolute w-[324px] h-[50px] left-[32px] top-[424px] bg-[#007BFF] border-[1px] border-[solid] border-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-medium text-[16px] leading-[20px] tracking-[0.02em] uppercase text-[#FFFFFF] flex-none order-none flex-grow-0" id="SignUp">SIGN UP</button>
        <h1 class="absolute w-[319px] h-[65px] left-[34px] top-[97px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[16px] leading-[20px] text-center tracking-[0.02em] capitalize text-[#6C6C6C]">Create your account to embark on your educational adventure</h1>
        <h1 class="[text-shadow:0px_1px,_1px_0px,_1px_1px] absolute w-[347px] h-[40px] left-[20px] top-[36px] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[32px] leading-[40px] text-center tracking-wider text-[#007BFF]" id="SignUp">SIGN UP</h1>
        <h1 class="absolute w-[225px] h-[15px] left-[81px] top-[700px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[12px] leading-[15px] tracking-[0.02em] text-[#6C6C6C]" id="SignUp">Already have an Account? <a href="#" class="font-bold text-[12px] leading-[15.12px] tracking-[2%] underline [text-decoration-style:solid] text-[#007BFF]" id="SignUp">Sign In</a>.</h1>
        <h1 class="absolute w-[200px] h-[18px] left-[96.5px] bottom-[292px] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[15px] leading-[18px] tracking-[0.02em] text-[#007BFF]">Or Sign Up With</h1>
        <SignUpInputs />
      </header>
    </div>
  );
}

function SignIn() {
  return (
    <div className="App">
      <header class="absolute w-[390px] h-[844px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[rgb(0,_0,_0)] bg-[#ffffff]">
        <img src={Arrow} class="absolute w-[24px] h-[24px] left-[21px] top-[55px]" id="Arrow_SignIn" />
        <img src={LineSignUp} class="absolute w-[75px] h-0 left-[45px] top-[534px] border-[1px] border-[solid] border-[#6C6C6C] rotate-180" />
        <img src={LineSignUp} class="absolute w-[75px] h-0 right-[45px] top-[534px] border-[1px] border-[solid] border-[#6C6C6C] rotate-180" />
        <button type="button" class="box-border flex flex-row justify-center items-center p-[15px] gap-[10px] bg-[#ffffff] absolute w-[317px] h-[49px] left-[37px] top-[582px] border-[1px] border-[solid] border-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[16px] leading-[20px] tracking-[0.02em] capitalize text-[#007BFF] flex-none order-none flex-grow-0" id="SignIn">Sign In With Facebook</button>
        <button type="button" class="box-border flex flex-row justify-center items-center p-[15px] gap-[10px] bg-[#ffffff] absolute w-[317px] h-[49px] left-[37px] top-[646px] border-[1px] border-[solid] border-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[16px] leading-[20px] tracking-[0.02em] capitalize text-[#007BFF] flex-none order-none flex-grow-0" id="SignIn">Sign In With Google</button>
        <button type="button" class="flex flex-row justify-center items-center p-[15px] gap-[10px] absolute w-[324px] h-[50px] left-[32px] top-[380px] bg-[#007BFF] border-[1px] border-[solid] border-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-medium text-[16px] leading-[20px] tracking-[0.02em] uppercase text-[#FFFFFF] flex-none order-none flex-grow-0" name="signIn">SIGN IN</button>
        <h1 class="absolute w-[319px] h-[65px] left-[34px] top-[116px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[16px] leading-[20px] text-center tracking-[0.02em] capitalize text-[#6C6C6C]">Sign in to access your personalized learning journey</h1>
        <h1 class="[text-shadow:0px_1px,_1px_0px,_1px_1px] absolute w-[347px] h-[40px] left-[20px] top-[55px] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[32px] leading-[40px] text-center tracking-wider text-[#007BFF]" id="SignIn">SIGN IN</h1>
        <h1 class="absolute w-[225px] h-[15px] left-[81px] top-[710px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[12px] leading-[15px] tracking-[0.02em] text-[#6C6C6C]" id="SignIn">Don't have an Account? <a href="#" class="font-bold text-[12px] leading-[15.12px] tracking-[2%] underline [text-decoration-style:solid] text-[#007BFF]" id="SignIn">Sign Up here</a>.</h1>
        <h1 class="absolute w-[200px] h-[18px] left-[96.5px] bottom-[292px] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[15px] leading-[18px] tracking-[0.02em] text-[#007BFF]">Or Sign In With</h1>
        <h1 class="absolute w-[120px] h-[14px] left-[237px] top-[336px] font-['Plus_Jakarta_Sans'] not-italic font-semibold text-[12px] leading-[14px] tracking-[0.02em] text-[#6C6C6C]" id="SignIn">Forgot Password?</h1>
        <SignInInputs />
      </header>
    </div>
  );
}

function SignUpInputs() {
  return (
    <>
      <header class="font-['Plus_Jakarta_Sans'] not-italic font-semibold text-[14px] leading-[16px] tracking-[0.02em] text-[#007BFF]">
        <h1 class="absolute w-[35px] h-[16px] left-[35px] top-[171px]" id="SignUp">Email</h1>
        <h1 class="absolute w-[63px] h-[16px] left-[35px] top-[252px]" id="SignUp">Password</h1>
        <h1 class="absolute w-[126px] h-[16px] left-[32px] top-[330px]">Confirm Password</h1>
        <input class="flex flex-row items-center p-[10px] gap-[138px] absolute w-[320px] h-[35px] left-[31px] top-[195px] border-[1px] border-[solid] border-[#6C6C6C] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[15px] leading-[15px] tracking-[0.02em] text-[#6C6C6C] flex-none order-none flex-grow-0" id="SignUp" placeholder="Enter your email" />
        <input class="flex flex-row items-center p-[10px] gap-[138px] absolute w-[320px] h-[35px] left-[31px] top-[278px] border-[1px] border-[solid] border-[#6C6C6C] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[15px] leading-[15px] tracking-[0.02em] text-[#6C6C6C] flex-none order-none flex-grow-0" id="SignUp" placeholder="Enter your password" />
        <input class="flex flex-row items-center p-[10px] gap-[138px] absolute w-[320px] h-[35px] left-[31px] top-[357px] border-[1px] border-[solid] border-[#6C6C6C] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[15px] leading-[15px] tracking-[0.02em] text-[#6C6C6C] flex-none order-none flex-grow-0" placeholder="Confirm your password" />
      </header>
    </>
  );
}

function SignInInputs() {
  return (
    <>
      <header class="font-['Plus_Jakarta_Sans'] not-italic font-medium text-[14px] leading-[16px] tracking-[0.02em] text-[#007BFF]">
        <h1 class="absolute w-[35px] h-[16px] left-[35px] top-[171px]" id="SignIn">Email</h1>
        <h1 class="absolute w-[63px] h-[16px] left-[35px] top-[252px]" id="SignIn">Password</h1>
        <input class="flex flex-row items-center p-[10px] gap-[138px] absolute w-[320px] h-[35px] left-[31px] top-[195px] border-[1px] border-[solid] border-[#6C6C6C] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[15px] leading-[15px] tracking-[0.02em] text-[#6C6C6C] flex-none order-none flex-grow-0" id="SignIn" placeholder="Enter your email" />
        <input class="flex flex-row items-center p-[10px] gap-[138px] absolute w-[320px] h-[35px] left-[31px] top-[278px] border-[1px] border-[solid] border-[#6C6C6C] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[15px] leading-[15px] tracking-[0.02em] text-[#6C6C6C] flex-none order-none flex-grow-0" id="SignIn" placeholder="Enter your password" />
      </header>
    </>
  );
}


function W1() {
  return (
    <div className="App">
      <header class="absolute w-[390px] h-[844px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[rgb(0,_0,_0)] bg-[#ffffff]">
        <img src={Arrow} class="absolute w-[24px] h-[24px] left-[21px] top-[65px]" id="Arrow_W1" />
        <div class="absolute w-[9px] h-[9px] top-[693px] rounded-[50%] left-[168px] bg-[#000000]" id="Ellipse-1"></div>
        <div class="absolute w-[9px] h-[9px] top-[693px] rounded-[50%] left-[181px] bg-[#C5C5C5]" id="Ellipse-2"></div>
        <div class="absolute w-[9px] h-[9px] top-[693px] rounded-[50%] left-[194px] bg-[#C5C5C5]" id="Ellipse-3"></div>
        <div class="absolute w-[9px] h-[9px] top-[693px] rounded-[50%] left-[207px] bg-[#C5C5C5]" id="Ellipse-4"></div>
        <h1 class="absolute w-[347px] h-[40px] left-[25px] top-[105px] font-['Plus_Jakarta_Sans'] not-italic font-[1000] text-[32px] leading-[40px] text-center tracking-wider text-[#005965]">Question:</h1>
        <h1 class="absolute w-[347px] h-[40px] left-[25px] top-[164px] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[32px] leading-[40px] text-center tracking-wider text-[#007BFF]">“Some question”</h1>
        <button type="button" class="flex flex-row justify-center items-center p-[15px] gap-[10px] absolute w-[225px] h-[50px] left-[83px] top-[741px] bg-[#000000] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-medium text-[16px] leading-[20px] tracking-[0.02em] uppercase text-[#FFFFFF] flex-none order-none flex-grow-0">Back</button>
        <button type="button" class="absolute w-[318px] h-[84px] top-[256px] left-[38px] bg-[#007BFF] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[16px] leading-[20px] tracking-[0.02em] uppercase" id="option1">OPTION 1</button>
        <button type="button" class="absolute w-[318px] h-[84px] top-[361px] left-[38px] bg-[#007BFF] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[16px] leading-[20px] tracking-[0.02em] uppercase" id="option2">OPTION 2</button>
        <button type="button" class="absolute w-[318px] h-[84px] top-[466px] left-[38px] bg-[#007BFF] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[16px] leading-[20px] tracking-[0.02em] uppercase" id="option3">OPTION 3</button>
        <button type="button" class="absolute w-[318px] h-[84px] top-[571px] left-[38px] bg-[#007BFF] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[16px] leading-[20px] tracking-[0.02em] uppercase" id="option4">OPTION 4</button>
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
      <header class="absolute w-[390px] h-[844px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[rgb(0,_0,_0)] bg-[#ffffff]">
        <img src={Group16} class="absolute w-[277px] h-[361.63px] left-[57px] top-[64px]" />
        <h1 class="absolute w-[300px] h-[98px] left-[45px] top-[490px] font-['Plus_Jakarta_Sans'] not-italic font-[1200] text-[32px] leading-[40px] text-center tracking-wider text-[#007BFF] [text-shadow:0px_1px,_1px_0px,_1px_1px]">Unlock Your Learning Potential</h1>
        <button type="button" class="box-border flex flex-row justify-center items-center p-[15px] gap-[10px] absolute w-[160px] h-[50px] left-[32px] top-[630px] bg-[#007BFF] border-[1px] border-[solid] border-[#007BFF] [box-shadow:0px_2px_8px_rgba(0,_67,_76,_0.25)] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-semibold text-[16px] leading-[20px] tracking-[0.02em] uppercase text-[#D9EFF2] flex-none order-none flex-grow-0" onClick={SignInClick}>SIGN IN</button>
        <button type="button" class="box-border flex flex-row justify-center items-center p-[15px] gap-[10px] absolute w-[160px] h-[50px] left-[207px] top-[630px] bg-[#ffffff] border-[1px] border-[solid] border-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-semibold text-[16px] leading-[20px] tracking-[0.02em] uppercase text-[#00434C] flex-none order-none flex-grow-0" onClick={SignUpClick}>SIGN UP</button>
      </header>
    </>
  );
}

function ResetPassword() {
  return (
    <div className="App">
      <header class="absolute w-[390px] h-[844px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[rgb(0,_0,_0)] bg-[#ffffff]">
        <img src={Arrow} class="absolute w-[24px] h-[24px] left-[21px] top-[54px]" id="Arrow_W1" />
        <h1 class="[text-shadow:0px_1px,_1px_0px,_1px_1px] absolute w-[347px] h-[40px] left-[23px] top-[153px] font-['Plus_Jakarta_Sans'] not-italic font-extrabold text-[32px] leading-[40px] text-center tracking-wider text-[#007BFF]">Reset Password</h1>
        <h1 class="[text-shadow:0px_0.3px] absolute w-[319px] h-[65px] left-[37px] top-[214px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[16px] leading-[20px] text-center tracking-[0.02em] capitalize text-[#6C6C6C]">Reset your password to regain access to your learning journey</h1>
        <h1 class="[text-shadow:0px_0.4px] absolute w-[95px] h-[16px] left-[37px] top-[295px] font-['Plus_Jakarta_Sans'] not-italic font-medium text-[13px] leading-[16px] tracking-[0.02em] text-[#007BFF]" >New Password</h1>
        <input class="[text-shadow:0px_0.4px] flex flex-row items-center p-[10px] gap-[138px] absolute w-[320px] h-[35px] left-[37px] top-[321px] border-[1px] border-[solid] border-[#6C6C6C] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[12px] leading-[15px] tracking-[0.02em] text-[#6C6C6C] flex-none order-none flex-grow-0" id="NewPasswordBox" placeholder="New Password" />
        <h1 class="[text-shadow:0px_0.4px] absolute w-[117px] h-[16px] left-[37px] top-[373px] font-['Plus_Jakarta_Sans'] not-italic font-medium text-[13px] leading-[16px] tracking-[0.02em] text-[#007BFF]" >Confirm Password</h1>
        <input class="[text-shadow:0px_0.4px] flex flex-row items-center p-[10px] gap-[138px] absolute w-[320px] h-[35px] left-[37px] top-[399px] border-[1px] border-[solid] border-[#6C6C6C] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-normal text-[12px] leading-[15px] tracking-[0.02em] text-[#6C6C6C] flex-none order-none flex-grow-0" id="NewPasswordBox" placeholder="Confirm Password" />
        <button type="button" class="flex flex-row justify-center items-center p-[15px] gap-[10px] absolute w-[320px] h-[50px] left-[37px] top-[478px] bg-[#007BFF] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-medium text-[16px] leading-[20px] tracking-[0.02em] uppercase text-[#FFFFFF] flex-none order-none flex-grow-0">SAVE</button>
      </header>
    </div>
  );
}

function GradeSelecter() {
  return (
    <div className="App">
      <header class="absolute w-[390px] h-[844px] left-2/4 top-2/4 -translate-x-1/2 -translate-y-1/2 border-2 border-solid border-[rgb(0,_0,_0)] bg-[#ffffff]">
        <button id="Grade6" class="absolute w-[349px] h-[81px] left-[21px] top-[127px] bg-[#F0F0F0] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[14px] leading-[18px] text-center tracking-[0.02em] text-[#007BFF]">GRADE 6</button>
        <button id="Grade7" class="absolute w-[349px] h-[81px] left-[21px] top-[227px] bg-[#F0F0F0] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[14px] leading-[18px] text-center tracking-[0.02em] text-[#007BFF]">GRADE 7</button>
        <button id="Grade8" class="absolute w-[349px] h-[81px] left-[21px] top-[327px] bg-[#F0F0F0] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[14px] leading-[18px] text-center tracking-[0.02em] text-[#007BFF]">GRADE 8</button>
        <button id="Grade9" class="absolute w-[349px] h-[81px] left-[21px] top-[427px] bg-[#F0F0F0] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[14px] leading-[18px] text-center tracking-[0.02em] text-[#007BFF]">GRADE 9</button>
        <button id="Grade10" class="absolute w-[349px] h-[81px] left-[21px] top-[527px] bg-[#F0F0F0] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[14px] leading-[18px] text-center tracking-[0.02em] text-[#007BFF]">GRADE 10</button>
        <button id="Grade11" class="absolute w-[349px] h-[81px] left-[21px] top-[627px] bg-[#F0F0F0] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[14px] leading-[18px] text-center tracking-[0.02em] text-[#007BFF]">GRADE 11</button>
        <button id="Grade12" class="absolute w-[349px] h-[81px] left-[21px] top-[727px] bg-[#F0F0F0] rounded-[5px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[14px] leading-[18px] text-center tracking-[0.02em] text-[#007BFF]">GRADE 12</button>
        <img src={SelectedSign} class="absolute left-[46px] top-[159px]" />
        <h1 class="[text-shadow:0px_0.45px] absolute w-[72px] h-[28px] left-[55px] top-[60px] font-['Plus_Jakarta_Sans'] not-italic font-bold text-[22px] leading-[28px] tracking-wider text-[#007BFF]">Grade</h1>
        <img src={Arrow2} class="absolute w-[24px] h-[24px] left-[17px] top-[63px]" />
      </header>
    </div>
  );
}


function TestPage() {
  return (
    <div className="App">
      <header className="App-header3">
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
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
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/GradeSelecter" element={<GradeSelecter />}/>
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