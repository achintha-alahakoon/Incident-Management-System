import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignupPage";
import SignInPage from "./pages/SigninPage";
import ForgotPassword from "./pages/ForgotPassword";
import SideNavBar from "./pages/SideNavBar";


function App() {

  return (
    <Router>  
          <Routes> 
            <Route path="/" element={<SignInPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<SideNavBar />} />
          </Routes>
    </Router>
  );
}

export default App;
