import { Routes, Route } from "react-router-dom";
//BrowserRouter
import { HashRouter } from "react-router-dom"
import DataSantri from "./pages/datasantri";
import SantriDetail from "./pages/SantriDetail";
import Header from "./component/header";

export default function App() {
  return (
    //<BrowserRouter>
    <HashRouter>

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
    </HashRouter>
    //</BrowserRouter>
  );
}
