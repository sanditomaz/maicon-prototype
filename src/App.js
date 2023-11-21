import  GlobalStyle from "./components/styles/GlobalStyle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {

  return (
   
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
  );
}