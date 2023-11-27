import GlobalStyle from "./components/styles/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/styles/access/Login.js";
import SignUp from "./components/styles/access/SignUp.js";
import Home from "./components/styles/home-logged/Home.js";
import Homepage from "./components/styles/home-unlogged/Homepage.js";
import CompanyRegistration from "./components/styles/company-registration/CompanyRegistration.js";
import ExTwo from "./components/styles/home-logged/ExTwo.js";
import ExThree from "./components/styles/home-logged/ExThree.js";
import ExFour from "./components/styles/home-logged/ExFour.js";
import ExFive from "./components/styles/home-logged/ExFive.js";
import ExSix from "./components/styles/home-logged/ExSix.js";
import ExSeven from "./components/styles/home-logged/ExSeven.js";
import ExEight from "./components/styles/home-logged/ExEight.js";

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/ex02" element={<ExTwo />} />
        <Route path="/ex03" element={<ExThree />} />
        <Route path="/ex04" element={<ExFour />} />
        <Route path="/ex05" element={<ExFive />} />
        <Route path="/ex06" element={<ExSix />} />
        <Route path="/ex07" element={<ExSeven />} />
        <Route path="/ex08" element={<ExEight />} />
        <Route path="/cadastro" element={<CompanyRegistration />} />
      </Routes>
    </BrowserRouter>
  );
}
