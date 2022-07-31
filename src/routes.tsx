import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import SignUp from "./pages/SignUp";
import Upload from "./pages/Upload";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="upload" element={<Upload />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}
