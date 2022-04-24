import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { RegistrarProducto } from "./pages/RegistrarProducto";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registrar-producto" element={<RegistrarProducto />} />
      </Routes>
    </div>
  );
}

export default App;
