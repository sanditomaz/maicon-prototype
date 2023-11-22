import GlobalStyle from "./components/styles/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/styles/access/Login.js";
import SignUp from "./components/styles/access/SignUp.js";
import Home from "./components/styles/home-logged/Home.js";
import Homepage from "./components/styles/home-unlogged/Homepage.js";
import CompanyRegistration from "./components/styles/company-registration/CompanyRegistration.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/company-regristration" element={<CompanyRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}
