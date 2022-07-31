import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import App from "./pages/App";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";
import { GlobalStyle, Wrapper } from "./styles/global";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="upload" element={<Upload />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Wrapper>
    </BrowserRouter>
  );
}
