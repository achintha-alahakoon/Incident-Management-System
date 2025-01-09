import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignupPage";
import SignInPage from "./pages/SigninPage";
import ForgotPassword from "./pages/ForgotPassword";
import SideNavBar from "./pages/SideNavBar";
import UserSideNavBar from "./pages/UserSideNavBar";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/sidenavbar" element={<SideNavBar />} />
        <Route path="/usersidenavbar" element={<UserSideNavBar />} />
      </Routes>
    </Router>
  );
}

export default App;
