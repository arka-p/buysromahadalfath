import { BrowserRouter, Routes, Route } from "react-router-dom";
import DataSantri from "./pages/datasantri";
import SantriDetail from "./pages/SantriDetail";
import Header from "./component/header";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
          <Header />
          <DataSantri />
          </div>
          } />
        <Route path="/santri/:id" element={
          <div>
          <Header />
          <SantriDetail />
          </div>} />
      </Routes>
    </BrowserRouter>
  );
}
