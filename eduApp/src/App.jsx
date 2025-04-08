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
      <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#007BFF] flex flex-col items-center">
        <div className="flex flex-col items-center justify-center h-full w-full max-w-md px-4">
          <img 
            src={EduLogo} 
            className="w-20 md:w-24 mx-auto mb-8 animate-pulse" 
            alt="EduSpark Logo" 
          />
          <h1 className="text-4xl md:text-5xl font-black text-center text-white font-['Plus_Jakarta_Sans'] tracking-wider animate-pulse animation-delay-200">
            EduSpark
          </h1>
        </div>
        <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-24 h-2 bg-white/30 rounded-full overflow-hidden">
          <div className="w-full h-full bg-white animate-loading-bar"></div>
        </div>
      </header>
    </div>
  );
}

function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <img 
          src={Arrow} 
          className="absolute w-6 h-6 left-5 top-12 cursor-pointer transition duration-400 hover:opacity-70 animate-fade-in" 
          onClick={() => navigate(-1)}
          alt="Back"
        />
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#007BFF] mb-8 animate-slide-down">SIGN UP</h1>
          <p className="text-center text-gray-600 mb-8 max-w-md animate-slide-down animation-delay-100">Create your account to embark on your educational adventure</p>
          
          <div className="w-full max-w-md animate-slide-down animation-delay-200">
            <SignUpInputs />
          </div>
          
          <button type="button" className="w-full max-w-md py-4 px-6 bg-[#007BFF] text-white rounded-lg font-medium uppercase mb-4 transition duration-400 hover:bg-[#0056b3] animate-slide-down animation-delay-300">SIGN UP</button>
          
          <div className="flex items-center justify-center w-full max-w-md mb-8 animate-slide-down animation-delay-400">
            <div className="flex-1 border-t border-gray-400"></div>
            <span className="px-4 text-[#007BFF] font-extrabold">Or Sign Up With</span>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>
          
          <button type="button" className="w-full max-w-md py-4 px-6 border border-[#007BFF] text-[#007BFF] bg-white rounded-lg font-bold mb-4 transition duration-400 hover:bg-gray-100 animate-slide-down animation-delay-500">Sign Up With Facebook</button>
          <button type="button" className="w-full max-w-md py-4 px-6 border border-[#007BFF] text-[#007BFF] bg-white rounded-lg font-bold mb-4 transition duration-400 hover:bg-gray-100 animate-slide-down animation-delay-600">Sign Up With Google</button>
          
          <p className="text-sm text-gray-600 animate-slide-down animation-delay-700">Already have an Account? <a href="#" className="font-bold text-[#007BFF] underline transition duration-400 hover:text-[#0056b3]">Sign In</a></p>
        </div>
      </header>
    </div>
  );
}

function SignIn() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <img 
          src={Arrow} 
          className="absolute w-6 h-6 left-5 top-14 cursor-pointer transition duration-400 hover:opacity-70 animate-fade-in" 
          onClick={() => navigate(-1)}
          alt="Back"
        />
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#007BFF] mb-8 animate-slide-down">SIGN IN</h1>
          <p className="text-center text-gray-600 mb-8 max-w-md animate-slide-down animation-delay-100">Sign in to access your personalized learning journey</p>
          
          <div className="w-full max-w-md animate-slide-down animation-delay-200">
            <SignInInputs />
          </div>
          
          <button type="button" className="w-full max-w-md py-4 px-6 bg-[#007BFF] text-white rounded-lg font-medium uppercase mb-4 transition duration-400 hover:bg-[#0056b3] animate-slide-down animation-delay-300">SIGN IN</button>
          
          <div className="flex items-center justify-center w-full max-w-md mb-8 animate-slide-down animation-delay-400">
            <div className="flex-1 border-t border-gray-400"></div>
            <span className="px-4 text-[#007BFF] font-extrabold">Or Sign In With</span>
            <div className="flex-1 border-t border-gray-400"></div>
          </div>
          
          <button type="button" className="w-full max-w-md py-4 px-6 border border-[#007BFF] text-[#007BFF] bg-white rounded-lg font-bold mb-4 transition duration-400 hover:bg-gray-100 animate-slide-down animation-delay-500">Sign In With Facebook</button>
          <button type="button" className="w-full max-w-md py-4 px-6 border border-[#007BFF] text-[#007BFF] bg-white rounded-lg font-bold mb-4 transition duration-400 hover:bg-gray-100 animate-slide-down animation-delay-600">Sign In With Google</button>
          
          <p className="text-sm text-gray-600 animate-slide-down animation-delay-700">Don't have an Account? <span onClick={() => navigate('/SignUp')} className="font-bold text-[#007BFF] underline cursor-pointer transition duration-400 hover:text-[#0056b3]">Sign Up here</span></p>
          <p className="text-sm text-gray-600 mt-4 cursor-pointer transition duration-400 hover:text-[#0056b3] animate-slide-down animation-delay-800">Forgot Password?</p>
        </div>
      </header>
    </div>
  );
}

function SignUpInputs() {
  return (
    <div className="w-full space-y-6 mb-8">
      <div>
        <label className="block text-[#007BFF] font-semibold mb-2">Email</label>
        <input className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-300 transition duration-400" placeholder="Enter your email" />
      </div>
      <div>
        <label className="block text-[#007BFF] font-semibold mb-2">Password</label>
        <input className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-300 transition duration-400" placeholder="Enter your password" />
      </div>
      <div>
        <label className="block text-[#007BFF] font-semibold mb-2">Confirm Password</label>
        <input className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-300 transition duration-400" placeholder="Confirm your password" />
      </div>
    </div>
  );
}

function SignInInputs() {
  return (
    <div className="w-full space-y-6 mb-8">
      <div>
        <label className="block text-[#007BFF] font-medium mb-2">Email</label>
        <input className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-300 transition duration-400" placeholder="Enter your email" />
      </div>
      <div>
        <label className="block text-[#007BFF] font-medium mb-2">Password</label>
        <input className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-300 transition duration-400" placeholder="Enter your password" />
      </div>
    </div>
  );
}

function W1() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <img 
          src={Arrow} 
          className="absolute w-6 h-6 left-5 top-16 cursor-pointer transition duration-400 hover:opacity-70" 
          onClick={() => navigate(-1)}
          alt="Back"
        />
        <div className="flex flex-col items-center justify-between min-h-screen p-4">
          <div className="w-full flex flex-col items-center">
            <h1 className="text-4xl font-extrabold text-[#005965] mb-8">Question:</h1>
            <h2 className="text-4xl font-extrabold text-[#007BFF] mb-12">"Some question"</h2>
            
            <div className="w-full max-w-md space-y-4">
              <button className="w-full py-6 bg-[#007BFF] text-white font-extrabold uppercase rounded-lg transition duration-400 hover:bg-[#0056b3]">OPTION 1</button>
              <button className="w-full py-6 bg-[#007BFF] text-white font-extrabold uppercase rounded-lg transition duration-400 hover:bg-[#0056b3]">OPTION 2</button>
              <button className="w-full py-6 bg-[#007BFF] text-white font-extrabold uppercase rounded-lg transition duration-400 hover:bg-[#0056b3]">OPTION 3</button>
              <button className="w-full py-6 bg-[#007BFF] text-white font-extrabold uppercase rounded-lg transition duration-400 hover:bg-[#0056b3]">OPTION 4</button>
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center space-y-6">
            <div className="flex justify-center space-x-2">
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
            </div>
            
            <button className="w-full max-w-md py-4 bg-black text-white rounded-lg font-medium uppercase transition duration-400 hover:bg-gray-800">Back</button>
          </div>
        </div>
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
    <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-md flex flex-col items-center">
          <img src={Group16} className="w-48 md:w-56 mb-12" alt="Welcome Illustration" />
          <h1 className="text-3xl md:text-4xl font-extrabold text-[#007BFF] text-center mb-16">
            Unlock Your Learning Potential
          </h1>
          
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <button 
              onClick={SignInClick} 
              className="flex-1 py-4 px-6 bg-[#007BFF] text-white rounded-lg font-semibold uppercase shadow-lg transition duration-400 hover:bg-[#0056b3]"
            >
              SIGN IN
            </button>
            <button 
              onClick={SignUpClick} 
              className="flex-1 py-4 px-6 border border-[#007BFF] text-[#00434C] bg-white rounded-lg font-semibold uppercase transition duration-400 hover:bg-gray-100"
            >
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function ResetPassword() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <img 
          src={Arrow} 
          className="absolute w-6 h-6 left-5 top-14 cursor-pointer transition duration-400 hover:opacity-70" 
          onClick={() => navigate(-1)}
          alt="Back"
        />
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-4xl font-extrabold text-[#007BFF] text-center mb-8">Reset Password</h1>
          <p className="text-center text-gray-600 mb-12 max-w-md">Reset your password to regain access to your learning journey</p>
          
          <div className="w-full max-w-md space-y-6">
            <div>
              <label className="block text-[#007BFF] font-medium mb-2">New Password</label>
              <input className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-300 transition duration-400" placeholder="New Password" />
            </div>
            <div>
              <label className="block text-[#007BFF] font-medium mb-2">Confirm Password</label>
              <input className="w-full p-3 border border-gray-400 rounded-lg focus:outline-none focus:border-gray-300 transition duration-400" placeholder="Confirm Password" />
            </div>
            <button className="w-full py-4 bg-[#007BFF] text-white rounded-lg font-medium uppercase transition duration-400 hover:bg-[#0056b3]">SAVE</button>
          </div>
        </div>
      </header>
    </div>
  );
}

function GradeSelecter() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <div className="flex items-center p-4 mb-8">
          <img 
            src={Arrow2} 
            className="w-6 h-6 mr-4 cursor-pointer transition duration-400 hover:opacity-70" 
            onClick={() => navigate(-1)}
            alt="Back"
          />
          <h1 className="text-2xl font-bold text-[#007BFF]">Grade</h1>
        </div>
        
        <div className="flex flex-col items-center p-4 space-y-4">
          {[6, 7, 8, 9, 10, 11, 12].map((grade) => (
            <button key={grade} className="w-full max-w-md py-6 bg-[#F0F0F0] rounded-lg font-bold text-[#007BFF] transition duration-400 hover:bg-gray-200">
              GRADE {grade}
            </button>
          ))}
        </div>
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

function Profile() {
  const navigate = useNavigate();
  
  // Example user data - in a real app, this would come from your auth/state management
  const userData = {
    name: "John Doe",
    grade: "Grade 8",
    profileImage: null // placeholder for profile image
  };

  const menuItems = [
    {
      icon: "📚", // You should replace these with actual icons
      label: "Change grade",
      action: () => navigate('/GradeSelecter')
    },
    {
      icon: "📝",
      label: "My Topics",
      action: () => navigate('/topics')
    },
    {
      icon: "🎧",
      label: "Help Center",
      action: () => navigate('/help')
    },
    {
      icon: "🚪",
      label: "Log out",
      action: () => {
        // Add logout logic here
        navigate('/');
      }
    }
  ];

  return (
    <div className="App">
      <header className="absolute w-full h-screen left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white">
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <h1 className="text-2xl font-bold text-[#007BFF] mb-6">My Profile</h1>

          {/* Profile Section */}
          <div className="flex items-center mb-8">
            <div className="w-20 h-20 bg-gray-200 rounded-full mr-4"></div>
            <div>
              <h2 className="text-lg font-semibold">{userData.name}</h2>
              <p className="text-gray-600">{userData.grade}</p>
            </div>
            <button 
              className="ml-auto text-[#007BFF]"
              onClick={() => navigate('/edit-profile')}
            >
              ✏️
            </button>
          </div>

          {/* Menu Items */}
          <div className="flex-1">
            {menuItems.map((item, index) => (
              <button
                key={index}
                onClick={item.action}
                className="w-full flex items-center py-4 px-2 border-b border-gray-100 text-left transition duration-300 hover:bg-gray-50"
              >
                <span className="w-8">{item.icon}</span>
                <span className="flex-1 text-[#00434C]">{item.label}</span>
                <span className="text-gray-400">›</span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-auto pb-6 text-center text-sm text-gray-500">
            <a href="/privacy" className="hover:text-[#007BFF]">Privacy Policy</a>
            <span className="mx-2">·</span>
            <a href="/terms" className="hover:text-[#007BFF]">Terms and Conditions</a>
          </div>
        </div>
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
        <Route path="/profile" element={<Profile />} />
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

// Update the styles section
const styles = `
@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes loadingBar {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-slide-down {
  animation: slideDown 0.5s ease-out forwards;
  opacity: 0;
}

.animate-fade-in {
  animation: fadeIn 0.5s ease-out forwards;
  opacity: 0;
}

.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-loading-bar {
  animation: loadingBar 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

.animation-delay-100 {
  animation-delay: 100ms;
}

.animation-delay-200 {
  animation-delay: 200ms;
}

.animation-delay-300 {
  animation-delay: 300ms;
}

.animation-delay-400 {
  animation-delay: 400ms;
}

.animation-delay-500 {
  animation-delay: 500ms;
}

.animation-delay-600 {
  animation-delay: 600ms;
}

.animation-delay-700 {
  animation-delay: 700ms;
}

.animation-delay-800 {
  animation-delay: 800ms;
}
`;

// Add the styles to the document
const styleSheet = document.createElement("style");
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);

export default App;