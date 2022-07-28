import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./pages/App";
import Upload from "./pages/Upload";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="upload" element={<Upload />} />
      </Routes>
    </BrowserRouter>
  );
}
